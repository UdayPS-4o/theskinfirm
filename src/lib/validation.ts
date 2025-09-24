import { z, ZodError } from "zod";

// Security patterns for validation
const SECURITY_PATTERNS = {
  SQL_INJECTION: /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/i,
  XSS_PATTERNS: /<script|javascript:|on\w+\s*=|<iframe|<object|<embed/i,
  PATH_TRAVERSAL: /\.\.[\/\\]|\.\.%2f|\.\.%5c/i,
  COMMAND_INJECTION: /[;&|`$(){}[\]]/,
  SUSPICIOUS_CHARS: /[<>'"&]/g
};

// Rate limiting store (in-memory for demo, use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limiting validation
export const validateRateLimit = (
  identifier: string, 
  maxRequests: number = 10, 
  windowMs: number = 60000
): boolean => {
  const now = Date.now();
  const key = `rate_limit_${identifier}`;
  const current = rateLimitStore.get(key);

  if (!current || now > current.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (current.count >= maxRequests) {
    return false;
  }

  current.count++;
  return true;
};

// Advanced security validation
export const securityValidation = {
  // Check for SQL injection patterns
  checkSQLInjection: (input: string): boolean => {
    return !SECURITY_PATTERNS.SQL_INJECTION.test(input);
  },

  // Check for XSS patterns
  checkXSS: (input: string): boolean => {
    return !SECURITY_PATTERNS.XSS_PATTERNS.test(input);
  },

  // Check for path traversal
  checkPathTraversal: (input: string): boolean => {
    return !SECURITY_PATTERNS.PATH_TRAVERSAL.test(input);
  },

  // Check for command injection
  checkCommandInjection: (input: string): boolean => {
    return !SECURITY_PATTERNS.COMMAND_INJECTION.test(input);
  },

  // Comprehensive security check
  isSecure: (input: string): boolean => {
    return (
      securityValidation.checkSQLInjection(input) &&
      securityValidation.checkXSS(input) &&
      securityValidation.checkPathTraversal(input) &&
      securityValidation.checkCommandInjection(input)
    );
  }
};

// Custom sanitization utilities
const customSanitize = {
  removeHtmlTags: (input: string): string => {
    return input.replace(/<[^>]*>/g, '');
  },
  escapeHtml: (input: string): string => {
    const htmlEscapes: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;'
    };
    return input.replace(/[&<>"'/]/g, (match) => htmlEscapes[match]);
  },
  removeScripts: (input: string): string => {
    return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  }
};

// Sanitization utilities
export const sanitizeInput = {
  // Basic text sanitization with security checks
  text: (input: string): string => {
    if (!securityValidation.isSecure(input)) {
      throw new Error("Input contains potentially malicious content");
    }
    return customSanitize.removeHtmlTags(input.trim());
  },

  // HTML content sanitization (for rich text)
  html: (input: string): string => {
    if (!securityValidation.isSecure(input)) {
      throw new Error("Input contains potentially malicious content");
    }
    let sanitized = customSanitize.removeScripts(input);
    sanitized = customSanitize.escapeHtml(sanitized);
    return sanitized.trim();
  },

  // URL sanitization
  url: (input: string): string => {
    try {
      const url = new URL(input.trim());
      return url.toString();
    } catch {
      return '';
    }
  },

  // Email sanitization
  email: (input: string): string => {
    return input.trim().toLowerCase();
  },

  // Phone number sanitization
  phone: (input: string): string => {
    return input.replace(/[^\d+\-\s()]/g, '').trim();
  },

  // Slug generation
  slug: (input: string): string => {
    return input
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  },

  // Number sanitization
  number: (input: string | number): number => {
    const num = typeof input === 'string' ? parseFloat(input) : input;
    return isNaN(num) ? 0 : num;
  },

  // Integer sanitization
  integer: (input: string | number): number => {
    const num = typeof input === 'string' ? parseInt(input, 10) : Math.floor(input);
    return isNaN(num) ? 0 : num;
  }
};

// Common validation schemas
export const commonValidations = {
  // Required string with min/max length
  requiredString: (min = 1, max = 255) => 
    z.string()
      .min(min, `Must be at least ${min} characters`)
      .max(max, `Must be no more than ${max} characters`)
      .transform(sanitizeInput.text),

  // Optional string with max length
  optionalString: (max = 255) =>
    z.string()
      .max(max, `Must be no more than ${max} characters`)
      .optional()
      .transform(val => val ? sanitizeInput.text(val) : undefined),

  // Email validation
  email: z.string()
    .email("Invalid email format")
    .transform(sanitizeInput.email),

  // URL validation
  url: z.string()
    .url("Invalid URL format")
    .transform(sanitizeInput.url),

  // Phone validation
  phone: z.string()
    .regex(/^[\d+\-\s()]+$/, "Invalid phone number format")
    .transform(sanitizeInput.phone),

  // Slug validation
  slug: z.string()
    .regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens")
    .min(1, "Slug is required")
    .max(100, "Slug must be no more than 100 characters"),

  // Positive number
  positiveNumber: z.number()
    .positive("Must be a positive number")
    .or(z.string().transform(sanitizeInput.number).pipe(z.number().positive())),

  // Non-negative integer
  nonNegativeInteger: z.number()
    .int("Must be an integer")
    .min(0, "Must be 0 or greater")
    .or(z.string().transform(sanitizeInput.integer).pipe(z.number().int().min(0))),

  // Boolean validation
  boolean: z.boolean()
    .or(z.string().transform(val => val === 'true' || val === '1'))
    .or(z.number().transform(val => val === 1)),

  // Rich text content
  richText: z.string()
    .max(10000, "Content must be no more than 10,000 characters")
    .transform(sanitizeInput.html),

  // Array of strings
  stringArray: z.array(z.string().transform(sanitizeInput.text)),

  // Date validation
  date: z.string()
    .refine(val => !isNaN(Date.parse(val)), "Invalid date format")
    .transform(val => new Date(val)),

  // File validation (for file uploads)
  file: z.object({
    name: z.string(),
    size: z.number().max(10 * 1024 * 1024, "File must be less than 10MB"),
    type: z.string()
  })
};

// Service validation schema
export const serviceValidationSchema = z.object({
  name: commonValidations.requiredString(2, 100),
  description: commonValidations.optionalString(1000),
  shortDescription: commonValidations.optionalString(200),
  price: commonValidations.positiveNumber,
  duration: commonValidations.positiveNumber,
  categoryId: z.string().min(1, "Category is required"),
  isActive: commonValidations.boolean,
  tags: commonValidations.stringArray.optional(),
  imageUrl: commonValidations.url.optional(),
  features: commonValidations.stringArray.optional(),
  prerequisites: commonValidations.optionalString(500),
  aftercare: commonValidations.optionalString(500),
  order: commonValidations.nonNegativeInteger.optional()
});

// Service category validation schema
export const serviceCategoryValidationSchema = z.object({
  name: commonValidations.requiredString(2, 50),
  description: commonValidations.optionalString(500),
  slug: commonValidations.slug,
  type: z.enum(['facial', 'body', 'consultation', 'package']),
  isActive: commonValidations.boolean,
  order: commonValidations.nonNegativeInteger,
  imageUrl: commonValidations.url.optional(),
  color: z.string()
    .regex(/^#[0-9A-F]{6}$/i, "Invalid color format (use hex format like #FF0000)")
    .optional()
});

// User validation schema
export const userValidationSchema = z.object({
  name: commonValidations.requiredString(2, 100),
  email: commonValidations.email,
  phone: commonValidations.phone.optional(),
  role: z.enum(['admin', 'staff', 'client'])
});

// Appointment validation schema
export const appointmentValidationSchema = z.object({
  clientName: commonValidations.requiredString(2, 100),
  clientEmail: commonValidations.email,
  clientPhone: commonValidations.phone,
  serviceId: z.string().min(1, "Service is required"),
  appointmentDate: commonValidations.date,
  notes: commonValidations.optionalString(1000),
  status: z.enum(['pending', 'confirmed', 'completed', 'cancelled']).optional()
});

// Contact form validation schema
export const contactFormValidationSchema = z.object({
  name: commonValidations.requiredString(2, 100),
  email: commonValidations.email,
  phone: commonValidations.phone.optional(),
  subject: commonValidations.requiredString(5, 200),
  message: commonValidations.requiredString(10, 2000),
  preferredContact: z.enum(['email', 'phone']).optional()
});

// Newsletter subscription validation
export const newsletterValidationSchema = z.object({
  email: commonValidations.email,
  name: commonValidations.optionalString(100),
  preferences: z.array(z.string()).optional()
});

// Search validation schema
export const searchValidationSchema = z.object({
  query: commonValidations.requiredString(1, 100),
  category: z.string().optional(),
  priceMin: commonValidations.nonNegativeInteger.optional(),
  priceMax: commonValidations.positiveNumber.optional(),
  duration: commonValidations.positiveNumber.optional()
});

// File upload validation schema
export const fileUploadValidationSchema = z.object({
  file: z.object({
    name: z.string()
      .min(1, "File name is required")
      .max(255, "File name too long")
      .refine(name => !/[<>:"/\\|?*]/.test(name), "File name contains invalid characters"),
    size: z.number()
      .max(10 * 1024 * 1024, "File must be less than 10MB")
      .min(1, "File cannot be empty"),
    type: z.string()
      .refine(type => 
        ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf'].includes(type),
        "Invalid file type. Only JPEG, PNG, WebP, GIF, and PDF files are allowed"
      )
  }),
  category: z.enum(['service-image', 'category-image', 'gallery', 'document']),
  alt: commonValidations.optionalString(200),
  description: commonValidations.optionalString(500)
});

// Bulk operations validation schema
export const bulkOperationValidationSchema = z.object({
  operation: z.enum(['delete', 'activate', 'deactivate', 'update']),
  ids: z.array(z.string().min(1, "Invalid ID"))
    .min(1, "At least one item must be selected")
    .max(100, "Cannot process more than 100 items at once"),
  data: z.record(z.string(), z.any()).optional() // For bulk updates
});

// Advanced service validation with business rules
export const advancedServiceValidationSchema = serviceValidationSchema.extend({
  // Business rule validations
  minBookingNotice: z.number()
    .min(0, "Minimum booking notice cannot be negative")
    .max(30, "Minimum booking notice cannot exceed 30 days")
    .optional(),
  maxAdvanceBooking: z.number()
    .min(1, "Maximum advance booking must be at least 1 day")
    .max(365, "Maximum advance booking cannot exceed 1 year")
    .optional(),
  availableDays: z.array(z.number().min(0).max(6))
    .max(7, "Cannot have more than 7 days")
    .optional(),
  timeSlots: z.array(z.object({
    start: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format"),
    end: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format")
  })).optional(),
  contraindications: commonValidations.optionalString(1000),
  sideEffects: commonValidations.optionalString(1000),
  requiredConsultation: commonValidations.boolean.optional()
}).refine(data => {
  // Business rule: end time must be after start time for time slots
  if (data.timeSlots) {
    return data.timeSlots.every(slot => {
      const start = new Date(`1970-01-01T${slot.start}:00`);
      const end = new Date(`1970-01-01T${slot.end}:00`);
      return end > start;
    });
  }
  return true;
}, {
  message: "End time must be after start time for all time slots",
  path: ["timeSlots"]
});

// Enhanced appointment validation with conflict checking
export const enhancedAppointmentValidationSchema = appointmentValidationSchema.extend({
  duration: commonValidations.positiveNumber,
  staffId: z.string().min(1, "Staff member is required").optional(),
  roomId: z.string().optional(),
  specialRequests: commonValidations.optionalString(500),
  reminderPreferences: z.object({
    email: commonValidations.boolean.optional(),
    sms: commonValidations.boolean.optional(),
    whatsapp: commonValidations.boolean.optional(),
    reminderTime: z.number().min(1).max(72).optional() // hours before appointment
  }).optional(),
  paymentStatus: z.enum(['pending', 'partial', 'paid', 'refunded']).optional(),
  depositAmount: commonValidations.nonNegativeInteger.optional()
}).refine(data => {
  // Business rule: appointment must be in the future
  const appointmentDate = new Date(data.appointmentDate);
  const now = new Date();
  return appointmentDate > now;
}, {
  message: "Appointment date must be in the future",
  path: ["appointmentDate"]
});

// Settings validation schema
export const settingsValidationSchema = z.object({
  businessHours: z.object({
    monday: z.object({
      isOpen: commonValidations.boolean,
      openTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional(),
      closeTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional()
    }),
    tuesday: z.object({
      isOpen: commonValidations.boolean,
      openTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional(),
      closeTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional()
    }),
    wednesday: z.object({
      isOpen: commonValidations.boolean,
      openTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional(),
      closeTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional()
    }),
    thursday: z.object({
      isOpen: commonValidations.boolean,
      openTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional(),
      closeTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional()
    }),
    friday: z.object({
      isOpen: commonValidations.boolean,
      openTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional(),
      closeTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional()
    }),
    saturday: z.object({
      isOpen: commonValidations.boolean,
      openTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional(),
      closeTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional()
    }),
    sunday: z.object({
      isOpen: commonValidations.boolean,
      openTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional(),
      closeTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).optional()
    })
  }),
  bookingSettings: z.object({
    maxAdvanceBookingDays: z.number().min(1).max(365),
    minBookingNoticeDays: z.number().min(0).max(30),
    allowOnlineBooking: commonValidations.boolean,
    requireDeposit: commonValidations.boolean,
    defaultDepositPercentage: z.number().min(0).max(100).optional(),
    cancellationPolicy: commonValidations.optionalString(1000)
  }),
  notificationSettings: z.object({
    emailNotifications: commonValidations.boolean,
    smsNotifications: commonValidations.boolean,
    whatsappNotifications: commonValidations.boolean,
    reminderHours: z.array(z.number().min(1).max(168)).max(5)
  }),
  paymentSettings: z.object({
    acceptCash: commonValidations.boolean,
    acceptCard: commonValidations.boolean,
    acceptOnline: commonValidations.boolean,
    currency: z.string().length(3, "Currency code must be 3 characters"),
    taxRate: z.number().min(0).max(100).optional()
  })
});

// Validation helper functions
export const validateAndSanitize = <T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: string[] } => {
  try {
    const result = schema.parse(data);
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = error.issues.map((err: any) => 
        `${err.path.join('.')}: ${err.message}`
      );
      return { success: false, errors };
    }
    return { success: false, errors: ['Validation failed'] };
  }
};

// Form field validation helper
export const validateField = <T>(
  schema: z.ZodSchema<T>,
  value: unknown
): { isValid: boolean; error?: string } => {
  try {
    schema.parse(value);
    return { isValid: true };
  } catch (error) {
    if (error instanceof ZodError) {
      return { 
        isValid: false, 
        error: error.issues[0]?.message || 'Invalid input' 
      };
    }
    return { isValid: false, error: 'Validation failed' };
  }
};

// Batch validation for arrays
export const validateBatch = <T>(
  schema: z.ZodSchema<T>,
  items: unknown[]
): { validItems: T[]; invalidItems: { index: number; errors: string[] }[] } => {
  const validItems: T[] = [];
  const invalidItems: { index: number; errors: string[] }[] = [];

  items.forEach((item, index) => {
    const result = validateAndSanitize(schema, item);
    if (result.success) {
      validItems.push(result.data);
    } else {
      invalidItems.push({ index, errors: result.errors });
    }
  });

  return { validItems, invalidItems };
};

// Type exports for TypeScript
// Enhanced validation utilities
export const validationUtils = {
  // Validate with rate limiting
  validateWithRateLimit: <T>(
    schema: z.ZodSchema<T>,
    data: unknown,
    identifier: string,
    maxRequests: number = 10,
    windowMs: number = 60000
  ): { success: true; data: T } | { success: false; errors: string[]; rateLimited?: boolean } => {
    // Check rate limit first
    if (!validateRateLimit(identifier, maxRequests, windowMs)) {
      return {
        success: false,
        errors: ["Rate limit exceeded. Please try again later."],
        rateLimited: true
      };
    }

    return validateAndSanitize(schema, data);
  },

  // Validate file upload with security checks
  validateFileUpload: (file: File): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    // Check file size
    if (file.size > 10 * 1024 * 1024) {
      errors.push("File size must be less than 10MB");
    }

    // Check file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      errors.push("Invalid file type. Only JPEG, PNG, WebP, GIF, and PDF files are allowed");
    }

    // Check file name for security
    if (!/^[a-zA-Z0-9._-]+$/.test(file.name)) {
      errors.push("File name contains invalid characters");
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  },

  // Validate business hours consistency
  validateBusinessHours: (hours: any): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    for (const day of days) {
      const dayHours = hours[day];
      if (dayHours?.isOpen && dayHours.openTime && dayHours.closeTime) {
        const openTime = new Date(`1970-01-01T${dayHours.openTime}:00`);
        const closeTime = new Date(`1970-01-01T${dayHours.closeTime}:00`);
        
        if (closeTime <= openTime) {
          errors.push(`${day}: Close time must be after open time`);
        }
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  },

  // Validate appointment conflicts
  validateAppointmentConflict: async (
    appointmentData: any,
    existingAppointments: any[] = []
  ): Promise<{ hasConflict: boolean; conflicts: string[] }> => {
    const conflicts: string[] = [];
    const newStart = new Date(appointmentData.appointmentDate);
    const newEnd = new Date(newStart.getTime() + (appointmentData.duration * 60 * 1000));

    for (const existing of existingAppointments) {
      const existingStart = new Date(existing.appointmentDate);
      const existingEnd = new Date(existingStart.getTime() + (existing.duration * 60 * 1000));

      // Check for time overlap
      if (newStart < existingEnd && newEnd > existingStart) {
        // Check if same staff member
        if (appointmentData.staffId && existing.staffId === appointmentData.staffId) {
          conflicts.push(`Staff member is already booked at ${existingStart.toLocaleTimeString()}`);
        }

        // Check if same room
        if (appointmentData.roomId && existing.roomId === appointmentData.roomId) {
          conflicts.push(`Room is already booked at ${existingStart.toLocaleTimeString()}`);
        }
      }
    }

    return {
      hasConflict: conflicts.length > 0,
      conflicts
    };
  }
};

// File upload validation
export const fileValidation = {
  // Document file signatures for security validation
  DOCUMENT_SIGNATURES: {
    'application/pdf': [0x25, 0x50, 0x44, 0x46], // %PDF
    'application/msword': [0xD0, 0xCF, 0x11, 0xE0], // MS Office
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [0x50, 0x4B, 0x03, 0x04], // DOCX
    'text/plain': [0x54, 0x68, 0x69, 0x73], // This (common text start)
  },

  // Validate document file signature
  async validateDocumentSignature(file: File): Promise<boolean> {
    const expectedSignature = this.DOCUMENT_SIGNATURES[file.type as keyof typeof this.DOCUMENT_SIGNATURES];
    if (!expectedSignature) return false;

    try {
      const arrayBuffer = await file.slice(0, expectedSignature.length).arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      return expectedSignature.every((byte, index) => uint8Array[index] === byte);
    } catch {
      return false;
    }
  },

  // Enhanced document validation
  async validateDocument(
    file: File,
    options: {
      maxSize?: number; // in MB
      minSize?: number; // in KB
      allowedTypes?: string[];
      checkSignature?: boolean;
    } = {}
  ): Promise<{ isValid: boolean; error?: string }> {
    const {
      maxSize = 10, // 10MB default for documents
      minSize = 1, // 1KB minimum
      allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'],
      checkSignature = true
    } = options;

    // Basic file type validation
    if (!allowedTypes.includes(file.type)) {
      return {
        isValid: false,
        error: `Invalid file type. Allowed: ${allowedTypes.map(type => {
          const parts = type.split('/');
          return parts[parts.length - 1].toUpperCase();
        }).join(', ')}`
      };
    }

    // File size validation
    if (file.size > maxSize * 1024 * 1024) {
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(1);
      return {
        isValid: false,
        error: `File size too large (${fileSizeMB}MB). Maximum allowed: ${maxSize}MB`
      };
    }

    if (file.size < minSize * 1024) {
      return {
        isValid: false,
        error: `File size too small. Minimum required: ${minSize}KB`
      };
    }

    // File name validation
    const fileName = file.name;
    if (!/^[a-zA-Z0-9._\s-]+$/.test(fileName)) {
      return {
        isValid: false,
        error: 'Invalid file name. Only alphanumeric characters, spaces, dots, hyphens, and underscores are allowed.'
      };
    }

    // Check for suspicious file extensions
    const suspiciousExtensions = ['.exe', '.bat', '.cmd', '.scr', '.pif', '.com', '.js', '.vbs', '.php', '.asp', '.jsp'];
    if (suspiciousExtensions.some(ext => fileName.toLowerCase().includes(ext))) {
      return {
        isValid: false,
        error: 'File contains suspicious content and cannot be uploaded.'
      };
    }

    // File signature validation for security
    if (checkSignature) {
      try {
        const isValidSignature = await this.validateDocumentSignature(file);
        if (!isValidSignature) {
          return {
            isValid: false,
            error: 'File signature does not match the declared file type. This may indicate a malicious file.'
          };
        }
      } catch (error) {
        return {
          isValid: false,
          error: 'Unable to validate file signature. Please try again.'
        };
      }
    }

    return { isValid: true };
  },

  // General file validation for any file type
  async validateFile(
    file: File,
    options: {
      maxSize?: number; // in MB
      minSize?: number; // in KB
      allowedTypes?: string[];
      checkSignature?: boolean;
      allowedExtensions?: string[];
    } = {}
  ): Promise<{ isValid: boolean; error?: string }> {
    const {
      maxSize = 50,
      minSize = 1,
      allowedTypes = [],
      checkSignature = false,
      allowedExtensions = []
    } = options;

    // File size validation
    if (file.size > maxSize * 1024 * 1024) {
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(1);
      return {
        isValid: false,
        error: `File size too large (${fileSizeMB}MB). Maximum allowed: ${maxSize}MB`
      };
    }

    if (file.size < minSize * 1024) {
      return {
        isValid: false,
        error: `File size too small. Minimum required: ${minSize}KB`
      };
    }

    // File type validation
    if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
      return {
        isValid: false,
        error: `Invalid file type. Allowed: ${allowedTypes.join(', ')}`
      };
    }

    // File extension validation
    if (allowedExtensions.length > 0) {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
        return {
          isValid: false,
          error: `Invalid file extension. Allowed: ${allowedExtensions.join(', ')}`
        };
      }
    }

    // File name validation
    const fileName = file.name;
    if (!/^[a-zA-Z0-9._\s-]+$/.test(fileName)) {
      return {
        isValid: false,
        error: 'Invalid file name. Only alphanumeric characters, spaces, dots, hyphens, and underscores are allowed.'
      };
    }

    // Check for suspicious file extensions
    const suspiciousExtensions = ['.exe', '.bat', '.cmd', '.scr', '.pif', '.com', '.vbs', '.asp', '.jsp'];
    if (suspiciousExtensions.some(ext => fileName.toLowerCase().includes(ext))) {
      return {
        isValid: false,
        error: 'File contains suspicious content and cannot be uploaded.'
      };
    }

    return { isValid: true };
  }
};

// Type exports
export type ServiceFormData = z.infer<typeof serviceValidationSchema>;
export type ServiceCategoryFormData = z.infer<typeof serviceCategoryValidationSchema>;
export type UserFormData = z.infer<typeof userValidationSchema>;
export type AppointmentFormData = z.infer<typeof appointmentValidationSchema>;
export type ContactFormData = z.infer<typeof contactFormValidationSchema>;
export type NewsletterFormData = z.infer<typeof newsletterValidationSchema>;
export type SearchFormData = z.infer<typeof searchValidationSchema>;
export type FileUploadFormData = z.infer<typeof fileUploadValidationSchema>;
export type BulkOperationFormData = z.infer<typeof bulkOperationValidationSchema>;
export type AdvancedServiceFormData = z.infer<typeof advancedServiceValidationSchema>;
export type EnhancedAppointmentFormData = z.infer<typeof enhancedAppointmentValidationSchema>;
export type SettingsFormData = z.infer<typeof settingsValidationSchema>;
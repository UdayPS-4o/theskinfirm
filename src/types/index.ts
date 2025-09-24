// Core entity types
export interface BaseEntity {
  _id: string;
  _creationTime: number;
  createdAt?: string;
  updatedAt?: string;
}

// Service Category Types
export interface ServiceCategory extends BaseEntity {
  name: string;
  description?: string;
  slug: string;
  type: ServiceCategoryType;
  isActive: boolean;
  order: number;
  imageUrl?: string;
  color?: string;
  metadata?: Record<string, any>;
}

export type ServiceCategoryType = 'facial' | 'body' | 'consultation' | 'package';

export interface ServiceCategoryFormData {
  name: string;
  description?: string;
  slug: string;
  type: ServiceCategoryType;
  isActive: boolean;
  order: number;
  imageUrl?: string;
  color?: string;
}

export interface ServiceCategoryStats {
  totalCategories: number;
  activeCategories: number;
  inactiveCategories: number;
  categoriesByType: Record<ServiceCategoryType, number>;
}

// Service Types
export interface Service extends BaseEntity {
  name: string;
  description?: string;
  shortDescription?: string;
  price: number;
  duration: number; // in minutes
  categoryId: string;
  category?: ServiceCategory;
  isActive: boolean;
  tags?: string[];
  imageUrl?: string;
  images?: string[];
  features?: string[];
  prerequisites?: string;
  aftercare?: string;
  order?: number;
  metadata?: Record<string, any>;
}

export interface ServiceFormData {
  name: string;
  description?: string;
  shortDescription?: string;
  price: number;
  duration: number;
  categoryId: string;
  isActive: boolean;
  tags?: string[];
  imageUrl?: string;
  images?: string[];
  features?: string[];
  prerequisites?: string;
  aftercare?: string;
  order?: number;
}

export interface ServiceStats {
  totalServices: number;
  activeServices: number;
  inactiveServices: number;
  servicesByCategory: Record<string, number>;
  averagePrice: number;
  averageDuration: number;
}

// User Types
export interface User extends BaseEntity {
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  isActive: boolean;
  avatar?: string;
  preferences?: UserPreferences;
  metadata?: Record<string, any>;
}

export type UserRole = 'admin' | 'staff' | 'client';

export interface UserPreferences {
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  theme: 'light' | 'dark' | 'auto';
  language: string;
  timezone: string;
}

export interface UserFormData {
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  isActive?: boolean;
  avatar?: string;
}

// Appointment Types
export interface Appointment extends BaseEntity {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceId: string;
  service?: Service;
  appointmentDate: string;
  status: AppointmentStatus;
  notes?: string;
  staffId?: string;
  staff?: User;
  duration?: number;
  price?: number;
  metadata?: Record<string, any>;
}

export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'no-show';

export interface AppointmentFormData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceId: string;
  appointmentDate: string;
  notes?: string;
  staffId?: string;
}

export interface AppointmentStats {
  totalAppointments: number;
  pendingAppointments: number;
  confirmedAppointments: number;
  completedAppointments: number;
  cancelledAppointments: number;
  revenue: number;
  averageAppointmentValue: number;
}

// Contact Form Types
export interface ContactForm extends BaseEntity {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: ContactFormStatus;
  preferredContact?: 'email' | 'phone';
  respondedAt?: string;
  respondedBy?: string;
  response?: string;
  metadata?: Record<string, any>;
}

export type ContactFormStatus = 'new' | 'in-progress' | 'responded' | 'closed';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  preferredContact?: 'email' | 'phone';
}

// Newsletter Types
export interface NewsletterSubscription extends BaseEntity {
  email: string;
  name?: string;
  isActive: boolean;
  preferences?: string[];
  subscribedAt: string;
  unsubscribedAt?: string;
  metadata?: Record<string, any>;
}

export interface NewsletterFormData {
  email: string;
  name?: string;
  preferences?: string[];
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
}

export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface SearchResponse<T = any> extends PaginatedResponse<T> {
  query: string;
  filters?: Record<string, any>;
  sort?: string;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: FormFieldType;
  required?: boolean;
  placeholder?: string;
  options?: FormFieldOption[];
  validation?: FormFieldValidation;
  defaultValue?: any;
  disabled?: boolean;
  hidden?: boolean;
}

export type FormFieldType = 
  | 'text' 
  | 'email' 
  | 'password' 
  | 'number' 
  | 'tel' 
  | 'url' 
  | 'textarea' 
  | 'select' 
  | 'multiselect' 
  | 'checkbox' 
  | 'radio' 
  | 'date' 
  | 'datetime-local' 
  | 'time' 
  | 'file' 
  | 'image' 
  | 'color' 
  | 'range';

export interface FormFieldOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface FormFieldValidation {
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  custom?: (value: any) => string | null;
}

export interface FormState {
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
  isDirty: boolean;
}

// UI Component Types
export interface TableColumn<T = any> {
  key: keyof T | string;
  title: string;
  render?: (value: any, record: T, index: number) => React.ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  fixed?: 'left' | 'right';
}

export interface TableProps<T = any> {
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
  };
  rowKey?: keyof T | ((record: T) => string);
  onRow?: (record: T, index: number) => Record<string, any>;
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  closable?: boolean;
  maskClosable?: boolean;
  className?: string;
}

export interface NotificationProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  onClose?: () => void;
  action?: React.ReactNode;
}

// Search and Filter Types
export interface SearchFilters {
  query?: string;
  category?: string;
  priceMin?: number;
  priceMax?: number;
  duration?: number;
  isActive?: boolean;
  dateFrom?: string;
  dateTo?: string;
  tags?: string[];
  status?: string;
}

export interface SortOptions {
  field: string;
  direction: 'asc' | 'desc';
}

export interface SearchParams {
  filters?: SearchFilters;
  sort?: SortOptions;
  page?: number;
  limit?: number;
}

// Analytics Types
export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  properties?: Record<string, any>;
  timestamp: string;
  userId?: string;
  sessionId?: string;
}

export interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  averageSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  topServices: Array<{ service: string; views: number }>;
  conversionRate: number;
  revenue: number;
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: string;
  userId?: string;
  sessionId?: string;
  stack?: string;
}

export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

export interface ApiError {
  status: number;
  message: string;
  errors?: ValidationError[];
  timestamp: string;
}

// Configuration Types
export interface AppConfig {
  app: {
    name: string;
    version: string;
    environment: 'development' | 'staging' | 'production';
    url: string;
  };
  api: {
    baseUrl: string;
    timeout: number;
    retries: number;
  };
  features: {
    analytics: boolean;
    notifications: boolean;
    darkMode: boolean;
    multiLanguage: boolean;
  };
  limits: {
    maxFileSize: number;
    maxImageSize: number;
    maxUploadFiles: number;
    sessionTimeout: number;
  };
}

// Theme Types
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
    warning: string;
    success: string;
    info: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// React Component Types
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  'data-testid'?: string;
}

export interface LoadingProps {
  loading?: boolean;
  skeleton?: boolean;
  error?: string | null;
  retry?: () => void;
}

// Hook Return Types
export interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export interface UseFormReturn<T> {
  values: T;
  errors: Record<keyof T, string>;
  touched: Record<keyof T, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
  isDirty: boolean;
  handleChange: (field: keyof T, value: any) => void;
  handleBlur: (field: keyof T) => void;
  handleSubmit: (onSubmit: (values: T) => Promise<void> | void) => Promise<void>;
  reset: () => void;
  setFieldValue: (field: keyof T, value: any) => void;
  setFieldError: (field: keyof T, error: string) => void;
}

// Export all types
// Note: validation types are exported from lib/validation.ts

// Re-export commonly used React types
export type {
  FC,
  ReactNode,
  ComponentProps as ReactComponentProps,
  HTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  FormHTMLAttributes,
  MouseEvent,
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  FocusEvent,
} from 'react';
/**
 * Image utility functions for processing uploaded images
 */

export interface ImageProcessingOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number; // 0.1 to 1.0
  format?: 'jpeg' | 'png' | 'webp';
}

/**
 * Compress and resize an image file
 */
export function processImage(
  file: File,
  options: ImageProcessingOptions = {}
): Promise<File> {
  return new Promise((resolve, reject) => {
    const {
      maxWidth = 1200,
      maxHeight = 800,
      quality = 0.85,
      format = 'jpeg'
    } = options;

    // For very large files, use more aggressive compression
    const isLargeFile = file.size > 10 * 1024 * 1024; // 10MB
    const finalQuality = isLargeFile ? Math.min(quality, 0.7) : quality;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    if (!ctx) {
      reject(new Error('Canvas context not available'));
      return;
    }

    img.onload = () => {
      // Calculate new dimensions
      let { width, height } = img;
      
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      
      if (height > maxHeight) {
        width = (width * maxHeight) / height;
        height = maxHeight;
      }

      // Set canvas dimensions
      canvas.width = width;
      canvas.height = height;

      // Draw and compress image
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);

      // Convert to blob
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Failed to process image'));
            return;
          }

          // Create new file with processed image
          const processedFile = new File(
            [blob],
            file.name.replace(/\.[^/.]+$/, `.${format}`),
            {
              type: `image/${format}`,
              lastModified: Date.now(),
            }
          );

          resolve(processedFile);
        },
        `image/${format}`,
        finalQuality
      );
    };

    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };

    img.src = URL.createObjectURL(file);
  });
}

/**
 * File signature validation for security
 */
const FILE_SIGNATURES = {
  'image/jpeg': [0xFF, 0xD8, 0xFF],
  'image/jpg': [0xFF, 0xD8, 0xFF],
  'image/png': [0x89, 0x50, 0x4E, 0x47],
  'image/webp': [0x52, 0x49, 0x46, 0x46],
  'image/gif': [0x47, 0x49, 0x46],
};

/**
 * Check file signature to prevent malicious files
 */
async function validateFileSignature(file: File): Promise<boolean> {
  const expectedSignature = FILE_SIGNATURES[file.type as keyof typeof FILE_SIGNATURES];
  if (!expectedSignature) return false;

  const arrayBuffer = await file.slice(0, expectedSignature.length).arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);
  
  return expectedSignature.every((byte, index) => uint8Array[index] === byte);
}

/**
 * Enhanced image file validation with security checks
 */
export async function validateImageFile(
  file: File,
  options: {
    maxSize?: number; // in MB
    minSize?: number; // in KB
    allowedTypes?: string[];
    checkSignature?: boolean;
    maxDimensions?: { width: number; height: number };
  } = {}
): Promise<{ isValid: boolean; error?: string }> {
  const { 
    maxSize = 50, 
    minSize = 1, // 1KB minimum
    allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
    checkSignature = true,
    maxDimensions = { width: 4000, height: 4000 }
  } = options;

  // Basic file type validation
  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: `Invalid file type. Allowed: ${allowedTypes.map(type => type.split('/')[1].toUpperCase()).join(', ')}`
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
  if (!/^[a-zA-Z0-9._-]+$/.test(fileName)) {
    return {
      isValid: false,
      error: 'Invalid file name. Only alphanumeric characters, dots, hyphens, and underscores are allowed.'
    };
  }

  // Check for suspicious file extensions
  const suspiciousExtensions = ['.exe', '.bat', '.cmd', '.scr', '.pif', '.com', '.js', '.vbs', '.php'];
  if (suspiciousExtensions.some(ext => fileName.toLowerCase().includes(ext))) {
    return {
      isValid: false,
      error: 'File contains suspicious content and cannot be uploaded.'
    };
  }

  // File signature validation for security
  if (checkSignature) {
    try {
      const isValidSignature = await validateFileSignature(file);
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

  // Image dimensions validation (if possible)
  try {
    const dimensions = await getImageDimensions(file);
    if (dimensions.width > maxDimensions.width || dimensions.height > maxDimensions.height) {
      return {
        isValid: false,
        error: `Image dimensions too large (${dimensions.width}x${dimensions.height}). Maximum allowed: ${maxDimensions.width}x${maxDimensions.height}`
      };
    }
  } catch (error) {
    // If we can't get dimensions, it might not be a valid image
    return {
      isValid: false,
      error: 'Unable to read image file. Please ensure it is a valid image.'
    };
  }

  return { isValid: true };
}

/**
 * Get image dimensions
 */
function getImageDimensions(file: File): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({ width: img.width, height: img.height });
    };
    
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image'));
    };
    
    img.src = url;
  });
}

/**
 * Generate a unique filename
 */
export function generateUniqueFilename(originalName: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  const extension = originalName.split('.').pop() || 'jpg';
  return `image-${timestamp}-${random}.${extension}`;
}

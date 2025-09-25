'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef, memo } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery, useMutation } from 'convex/react';
import { api } from "../../../../../../convex/_generated/api";
import { Id } from "../../../../../../convex/_generated/dataModel";
import { z } from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, ArrowLeft, Save, Plus, Trash2, Loader2, CheckCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ImageUpload } from '@/components/shared/ImageUpload';

/**
 * Props interface for the EditServicePage component
 */
interface EditServicePageProps {
  params: Promise<{ id: string }>;
}

/**
 * Type definitions for service data structures
 */
interface ProcessStep {
  title: string;
  description: string;
}

interface FAQQuestion {
  question: string;
  answer: string;
}

interface TransformationImage {
  src: string;
  alt: string;
  storageId?: Id<"_storage">;
}

interface TreatmentItem {
  title: string;
  description: string;
}

/**
 * Service form data interface matching Convex schema
 */
interface ServiceFormData {
  name: string;
  type: "skin" | "hair" | "laser";
  slug: string;
  category: string;
  data: {
    hero: {
      title: string;
      description: string;
    };
    about?: {
      title: string;
      description: string;
      highlight: string;
      image: string;
      imageStorageId?: Id<"_storage">;
    };
    process?: {
      title: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
    benefits?: {
      title: string;
      items: string[];
    };
    postCare?: {
      subtitle?: string;
      title?: string;
      downtime: {
        title: string;
        items: string[];
      };
      postCare: {
        title: string;
        items: string[];
      };
    };
    faq?: {
      title: string;
      subtitle: string;
      questions: Array<{
        question: string;
        answer: string;
      }>;
    };
    signsSymptoms?: {
      subtitle: string;
      title: string;
      items: string[];
    };
    treatments?: {
      subtitle: string;
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    transformations?: {
      subtitle: string;
      title: string;
      description: string;
      images: Array<{
        src: string;
        alt: string;
        storageId?: Id<"_storage">;
      }>;
    };
    testimonials?: {
      subtitle: string;
      title: string;
      items: string[];
    };
    whoBenefits?: {
      title: string;
      items: string[];
    };
  };
}

/**
 * Validation schema for service form data
 */
const serviceValidationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  type: z.enum(["skin", "hair", "laser"]),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens"),
  category: z.string().min(1, "Category is required"),
  data: z.object({
    hero: z.object({
      title: z.string().min(1, "Hero title is required"),
      description: z.string().min(1, "Hero description is required"),
    }),
    about: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      highlight: z.string().optional(),
      image: z.string().optional(),
      imageStorageId: z.custom<Id<"_storage">>().optional(),
    }).optional(),
    process: z.object({
      title: z.string().optional(),
      steps: z.array(z.object({
        title: z.string().optional(),
        description: z.string().optional(),
      })).optional(),
    }).optional(),
    benefits: z.object({
      title: z.string().optional(),
      items: z.array(z.string()).optional(),
    }).optional(),
    postCare: z.object({
      subtitle: z.string().optional(),
      title: z.string().optional(),
      downtime: z.object({
        title: z.string().optional(),
        items: z.array(z.string()).optional(),
      }).optional(),
      postCare: z.object({
        title: z.string().optional(),
        items: z.array(z.string()).optional(),
      }).optional(),
    }).optional(),
    faq: z.object({
      title: z.string().optional(),
      subtitle: z.string().optional(),
      questions: z.array(z.object({
        question: z.string().optional(),
        answer: z.string().optional(),
      })).optional(),
    }).optional(),
    signsSymptoms: z.object({
      subtitle: z.string().optional(),
      title: z.string().optional(),
      items: z.array(z.string()).optional(),
    }).optional(),
    treatments: z.object({
      subtitle: z.string().optional(),
      title: z.string().optional(),
      items: z.array(z.string()).optional(),
    }).optional(),
    transformations: z.object({
      subtitle: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      images: z.array(z.object({
        src: z.string().optional(),
        alt: z.string().optional(),
        storageId: z.string().optional(),
      })).optional(),
    }).optional(),
    testimonials: z.object({
      subtitle: z.string().optional(),
      title: z.string().optional(),
      items: z.array(z.string()).optional(),
    }).optional(),
    whoBenefits: z.object({
      title: z.string().optional(),
      items: z.array(z.string()).optional(),
    }).optional(),
  }),
});

/**
 * Utility function to generate slug from name
 */
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

/**
 * Memoized components for performance optimization
 */
const MemoizedArraySection = memo(({
  title,
  items,
  onAdd,
  onRemove,
  onUpdate,
  fieldPath,
  itemType = 'string'
}: {
  title: string;
  items: any[];
  onAdd: () => void;
  onRemove: (index: number) => void;
  onUpdate: (index: number, field: string, value: string) => void;
  fieldPath: string;
  itemType?: 'string' | 'object';
}) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <Label className="text-base font-semibold">{title}</Label>
      <Button type="button" variant="outline" size="sm" onClick={onAdd}>
        <Plus className="h-4 w-4 mr-2" />
        Add Item
      </Button>
    </div>
    {items?.map((item, index) => (
      <div key={index} className="space-y-2 p-4 border rounded-lg">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Item {index + 1}</Label>
          <Button type="button" variant="ghost" size="sm" onClick={() => onRemove(index)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        {itemType === 'string' ? (
          <Input
            value={item || ''}
            onChange={(e) => onUpdate(index, 'value', e.target.value)}
            placeholder={`${title} item`}
          />
        ) : (
          <div className="space-y-2">
            <Input
              value={item.title || ''}
              onChange={(e) => onUpdate(index, 'title', e.target.value)}
              placeholder="Title"
            />
            <Input
              value={item.description || ''}
              onChange={(e) => onUpdate(index, 'description', e.target.value)}
              placeholder="Description"
            />
          </div>
        )}
      </div>
    ))}
    {(!items || items.length === 0) && (
      <div className="text-center py-8 text-gray-500">
        <p>No {title.toLowerCase()} added yet. Click "Add Item" to get started.</p>
      </div>
    )}
  </div>
));

MemoizedArraySection.displayName = 'MemoizedArraySection';

/**
 * Main EditServicePage component
 */
export default function EditServicePage({ params }: EditServicePageProps) {
  const router = useRouter();

  // State management
  const [serviceId, setServiceId] = useState<Id<"services"> | null>(null);
  const [formData, setFormData] = useState<ServiceFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasChanges, setHasChanges] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [networkError, setNetworkError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);

  // Ref to prevent duplicate array item additions
  const lastAddCallRef = useRef<{ field: string; timestamp: number } | null>(null);

  // Error handling utilities
  const handleError = useCallback((error: unknown, context: string) => {
    console.error(`Error in ${context}:`, error);

    if (error instanceof Error) {
      if (error.message.includes('network') || error.message.includes('fetch')) {
        setNetworkError(`Network error: ${error.message}`);
        return 'network';
      } else if (error.message.includes('validation')) {
        return 'validation';
      } else if (error.message.includes('permission') || error.message.includes('unauthorized')) {
        toast.error('You do not have permission to perform this action');
        return 'permission';
      }
    }

    return 'unknown';
  }, []);

  // Retry mechanism for network failures
  const retryOperation = useCallback(async (operation: () => Promise<void>, maxRetries = 3) => {
    setIsRetrying(true);

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        await operation();
        setNetworkError(null);
        setRetryCount(0);
        break;
      } catch (error) {
        const errorType = handleError(error, `retry attempt ${attempt}`);

        if (errorType === 'network' && attempt < maxRetries) {
          setRetryCount(attempt);
          // Exponential backoff
          await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
        } else {
          throw error;
        }
      }
    }

    setIsRetrying(false);
  }, [handleError]);

  // Resolve params asynchronously
  useEffect(() => {
    params.then((resolvedParams) => {
      const id = resolvedParams.id as Id<"services">;
      setServiceId(id);
    }).catch((error) => {
      console.error('Failed to resolve params:', error);
      toast.error('Invalid service ID');
      router.push('/manage-services');
    });
  }, [params, router]);

  // Convex queries and mutations
  const service = useQuery(
    api.services.queries.getServiceById,
    serviceId ? { id: serviceId } : "skip"
  );

  const categories = useQuery(api.serviceCategories.queries.getServiceCategories, {});
  const updateService = useMutation(api.services.mutations.updateService);

  // Initialize form data when service loads
  useEffect(() => {
    if (service && !formData) {
      const initialData: ServiceFormData = {
        name: service.name,
        type: service.type,
        slug: service.slug,
        category: service.category || "",
        data: {
          hero: service.data.hero,
          about: service.data.about ? {
            title: service.data.about.title || '',
            description: service.data.about.description || '',
            highlight: service.data.about.highlight || '',
            image: service.data.about.image || '',
            imageStorageId: service.data.about.imageStorageId
          } : {
            title: '',
            description: '',
            highlight: '',
            image: '',
            imageStorageId: undefined
          },
          process: service.data.process ? {
            title: service.data.process.title || '',
            steps: Array.isArray(service.data.process.steps)
              ? service.data.process.steps.map((step: ProcessStep | any): ProcessStep => ({
                title: (step as ProcessStep).title || '',
                description: (step as ProcessStep).description || ''
              }))
              : []
          } : {
            title: '',
            steps: []
          },
          benefits: service.data.benefits ? {
            title: service.data.benefits.title || '',
            items: Array.isArray(service.data.benefits.items)
              ? service.data.benefits.items.map((item: any) =>
                typeof item === 'string' ? item : item.title || item.description || ''
              )
              : []
          } : {
            title: '',
            items: []
          },
          postCare: service.data.postCare ? {
            subtitle: service.data.postCare.subtitle || '',
            title: service.data.postCare.title || '',
            downtime: service.data.postCare.downtime ? {
              title: service.data.postCare.downtime.title || '',
              items: service.data.postCare.downtime.items || []
            } : {
              title: '',
              items: []
            },
            postCare: service.data.postCare.postCare ? {
              title: service.data.postCare.postCare.title || '',
              items: service.data.postCare.postCare.items || []
            } : {
              title: '',
              items: []
            }
          } : undefined,
          faq: service.data.faq ? {
            title: service.data.faq.title || '',
            subtitle: service.data.faq.subtitle || '',
            questions: Array.isArray(service.data.faq.questions)
              ? service.data.faq.questions.map((q: FAQQuestion | any): FAQQuestion => ({
                question: (q as FAQQuestion).question || '',
                answer: (q as FAQQuestion).answer || ''
              }))
              : []
          } : {
            title: '',
            subtitle: '',
            questions: []
          },
          signsSymptoms: {
            subtitle: service.data.signsSymptoms?.subtitle || '',
            title: service.data.signsSymptoms?.title || '',
            items: Array.isArray(service.data.signsSymptoms?.items)
              ? service.data.signsSymptoms.items.map((item: any) =>
                typeof item === 'string' ? item : item.title || item.description || ''
              )
              : []
          },
          treatments: {
            subtitle: service.data.treatments?.subtitle || '',
            title: service.data.treatments?.title || '',
            items: Array.isArray(service.data.treatments?.items)
              ? service.data.treatments.items.map((item: TreatmentItem | string | any): TreatmentItem =>
                typeof item === 'string'
                  ? { title: item, description: '' }
                  : { title: (item as TreatmentItem).title || '', description: (item as TreatmentItem).description || '' }
              )
              : []
          },
          transformations: {
            subtitle: service.data.transformations?.subtitle || '',
            title: service.data.transformations?.title || '',
            description: service.data.transformations?.description || '',
            images: Array.isArray(service.data.transformations?.images)
              ? service.data.transformations.images.map((item: TransformationImage | any): TransformationImage => ({
                src: (item as TransformationImage).src || '',
                alt: (item as TransformationImage).alt || '',
                storageId: (item as TransformationImage).storageId
              }))
              : []
          },
          testimonials: {
            subtitle: service.data.testimonials?.subtitle || '',
            title: service.data.testimonials?.title || '',
            items: Array.isArray(service.data.testimonials?.items)
              ? service.data.testimonials.items.map((item: any) =>
                typeof item === 'string' ? item : item.review || item.name || ''
              )
              : []
          },
          whoBenefits: {
            title: service.data.whoBenefits?.title || '',
            items: Array.isArray(service.data.whoBenefits?.items)
              ? service.data.whoBenefits.items.map((item: any) =>
                typeof item === 'string' ? item : item.title || item.description || ''
              )
              : []
          },
        },
      };
      setFormData(initialData);
    }
  }, [service, formData]);

  // Cleanup debounced timeout on unmount
  useEffect(() => {
    return () => {
      if (debouncedFieldChangeRef.current) {
        clearTimeout(debouncedFieldChangeRef.current);
      }
    };
  }, []);

  // Memoized filtered categories based on service type
  const filteredCategories = useMemo(() => {
    if (!categories || !formData) return [];
    return categories.filter(cat => cat.type === formData.type && cat.isActive);
  }, [categories, formData]);

  // Debounced field change for performance optimization
  const debouncedFieldChangeRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedFieldChange = useCallback(<T = unknown>(field: string, value: T, immediate = false) => {
    if (debouncedFieldChangeRef.current) {
      clearTimeout(debouncedFieldChangeRef.current);
    }

    if (immediate) {
      handleFieldChangeImmediate(field, value);
    } else {
      debouncedFieldChangeRef.current = setTimeout(() => {
        handleFieldChangeImmediate(field, value);
      }, 300); // 300ms debounce
    }
  }, []);

  // Handle form field changes with validation (immediate version)
  const handleFieldChangeImmediate = useCallback(<T = unknown>(field: string, value: T) => {
    if (!formData) return;

    setFormData(prev => {
      if (!prev) return prev;

      const newData = { ...prev };
      const fieldPath = field.split('.');

      let current: Record<string, unknown> = newData as Record<string, unknown>;
      for (let i = 0; i < fieldPath.length - 1; i++) {
        if (!current[fieldPath[i]] || typeof current[fieldPath[i]] !== 'object') {
          current[fieldPath[i]] = {};
        }
        current = current[fieldPath[i]] as Record<string, unknown>;
      }
      current[fieldPath[fieldPath.length - 1]] = value;

      // Auto-generate slug when name changes
      if (field === 'name' && typeof value === 'string') {
        (newData as ServiceFormData).slug = generateSlug(value);
      }

      return newData;
    });

    setHasChanges(true);

    // Clear field-specific error
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }, [formData, errors]);

  // Handle form field changes with validation (legacy for compatibility)
  const handleFieldChange = useCallback(<T = unknown>(field: string, value: T) => {
    if (!formData) return;

    setFormData(prev => {
      if (!prev) return prev;

      const newData = { ...prev };
      const fieldPath = field.split('.');

      let current: Record<string, unknown> = newData as Record<string, unknown>;
      for (let i = 0; i < fieldPath.length - 1; i++) {
        if (!current[fieldPath[i]] || typeof current[fieldPath[i]] !== 'object') {
          current[fieldPath[i]] = {};
        }
        current = current[fieldPath[i]] as Record<string, unknown>;
      }
      current[fieldPath[fieldPath.length - 1]] = value;

      // Auto-generate slug when name changes
      if (field === 'name' && typeof value === 'string') {
        (newData as ServiceFormData).slug = generateSlug(value);
      }

      return newData;
    });

    setHasChanges(true);

    // Clear field-specific error
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }, [formData, errors]);

  // Handle array field changes (for steps, benefits, etc.)
  const handleArrayFieldChange = useCallback((field: string, index: number, subField: string, value: string) => {
    if (!formData) return;

    setFormData(prev => {
      if (!prev) return prev;

      const newData = { ...prev };
      const fieldPath = field.split('.');

      let current: Record<string, unknown> = newData as Record<string, unknown>;
      for (const path of fieldPath) {
        if (!current[path] || typeof current[path] !== 'object') {
          current[path] = {};
        }
        current = current[path] as Record<string, unknown>;
      }

      if (!Array.isArray(current)) {
        // This shouldn't happen if the field path is correct
        console.warn(`Expected array at field path: ${field}`);
        return prev;
      }

      const arrayField = current as unknown[];
      if (!arrayField[index] || typeof arrayField[index] !== 'object') {
        arrayField[index] = {};
      }

      (arrayField[index] as Record<string, unknown>)[subField] = value;

      return newData;
    });

    setHasChanges(true);
  }, [formData]);

  // Add new array item with duplicate prevention
  const addArrayItem = useCallback(<T = unknown>(field: string, defaultItem: T) => {
    if (!formData) return;

    // Check if this is a duplicate call within 100ms
    const now = Date.now();
    const lastCall = lastAddCallRef.current;

    if (lastCall && lastCall.field === field && (now - lastCall.timestamp) < 100) {
      console.log('Preventing duplicate addArrayItem call for field:', field);
      return;
    }

    // Update the last call reference
    lastAddCallRef.current = { field, timestamp: now };

    setFormData(prev => {
      if (!prev) return prev;

      const newData = { ...prev };
      const fieldPath = field.split('.');

      // Navigate to the parent object
      let current: Record<string, unknown> = newData as Record<string, unknown>;
      for (let i = 0; i < fieldPath.length - 1; i++) {
        const path = fieldPath[i];
        if (!current[path] || typeof current[path] !== 'object') {
          current[path] = {};
        }
        current = current[path] as Record<string, unknown>;
      }

      // Get the final array field name
      const arrayFieldName = fieldPath[fieldPath.length - 1];

      // Initialize array if it doesn't exist or isn't an array
      if (!Array.isArray(current[arrayFieldName])) {
        current[arrayFieldName] = [];
      }

      // Add the new item
      const targetArray = current[arrayFieldName] as T[];
      targetArray.push(defaultItem);

      return newData;
    });

    setHasChanges(true);
  }, [formData]);

  // Remove array item
  const removeArrayItem = useCallback((field: string, index: number) => {
    if (!formData) return;

    setFormData(prev => {
      if (!prev) return prev;

      const newData = { ...prev };
      const fieldPath = field.split('.');

      let current: Record<string, unknown> = newData as Record<string, unknown>;
      for (const path of fieldPath) {
        if (!current[path]) {
          console.warn(`Field path ${field} not found`);
          return prev;
        }
        current = current[path] as Record<string, unknown>;
      }

      if (Array.isArray(current)) {
        const arrayField = current as unknown[];
        if (index >= 0 && index < arrayField.length) {
          arrayField.splice(index, 1);
        } else {
          console.warn(`Invalid index ${index} for array of length ${arrayField.length}`);
        }
      } else {
        console.warn(`Expected array at field path: ${field}`);
      }

      return newData;
    });

    setHasChanges(true);
  }, [formData]);

  // Handle form submission with comprehensive error handling
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData || !serviceId) {
      toast.error('Form data or service ID is missing');
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validationResult = serviceValidationSchema.safeParse(formData);

      if (!validationResult.success) {
        const fieldErrors: Record<string, string> = {};
        validationResult.error.issues.forEach((issue) => {
          const fieldPath = issue.path.join('.');
          fieldErrors[fieldPath] = issue.message;
        });
        setErrors(fieldErrors);
        toast.error('Please fix the validation errors');
        return;
      }

      // Transform data to match Convex mutation schema
      const { data: formDataContent, ...otherFields } = validationResult.data;

      // Build the transformed data object with proper typing
      interface TransformedServiceData {
        [key: string]: unknown;
        data: {
          hero: {
            title: string;
            description: string;
          };
          about?: {
            title: string;
            description: string;
            highlight: string;
            image: string;
            imageStorageId?: Id<"_storage">;
          };
          process?: {
            title: string;
            steps: ProcessStep[];
          };
          benefits?: {
            title: string;
            items: string[];
          };
          postCare?: {
            title: string;
            subtitle: string;
            downtime: {
              title: string;
              items: string[];
            };
            postCare: {
              title: string;
              items: string[];
            };
          };
          faq?: {
            title: string;
            subtitle: string;
            questions: FAQQuestion[];
          };
          signsSymptoms?: {
            subtitle: string;
            title: string;
            items: string[];
          };
          treatments?: {
            subtitle: string;
            title: string;
            items: Array<{
              title: string;
              description: string;
            }>;
          };
          transformations?: {
            subtitle: string;
            title: string;
            description: string;
            images: Array<{
              src: string;
              alt: string;
              storageId?: Id<"_storage">;
            }>;
          };
          testimonials?: {
            subtitle: string;
            title: string;
            items: string[];
          };
          whoBenefits?: {
            title: string;
            items: string[];
          };
        };
      }

      const transformedData: TransformedServiceData = {
        ...otherFields,
        data: {
          hero: formDataContent.hero,
        }
      };

      // Ensure about object has all required fields or is omitted
      if (formDataContent.about) {
        const about = formDataContent.about;
        if (about.title && about.description && about.highlight && about.image) {
          // Only include if all required fields are present
          transformedData.data.about = {
            title: about.title,
            description: about.description,
            highlight: about.highlight,
            image: about.image,
            imageStorageId: about.imageStorageId,
          };
        }
      }

      // Ensure process object has all required fields or is omitted
      if (formDataContent.process) {
        const process = formDataContent.process;
        if (process.title && process.steps && process.steps.length > 0) {
          // Ensure all step fields are strings
          const validSteps = process.steps.filter(step => step.title && step.description);
          if (validSteps.length > 0) {
            transformedData.data.process = {
              title: process.title,
              steps: validSteps.map(step => ({
                title: step.title!,
                description: step.description!,
              })),
            };
          }
        }
      }

      // Ensure benefits object has all required fields or is omitted
      if (formDataContent.benefits) {
        const benefits = formDataContent.benefits;
        if (benefits.title && benefits.items && benefits.items.length > 0) {
          transformedData.data.benefits = {
            title: benefits.title,
            items: benefits.items,
          };
        }
      }

      // Ensure postCare object has all required fields or is omitted
      if (formDataContent.postCare) {
        const postCare = formDataContent.postCare;
        if (postCare.title && postCare.subtitle && postCare.downtime?.title && postCare.downtime?.items && postCare.postCare?.title && postCare.postCare?.items) {
          transformedData.data.postCare = {
            title: postCare.title,
            subtitle: postCare.subtitle,
            downtime: {
              title: postCare.downtime.title,
              items: postCare.downtime.items,
            },
            postCare: {
              title: postCare.postCare.title,
              items: postCare.postCare.items,
            },
          };
        }
      }

      // Ensure faq object has all required fields or is omitted
      if (formDataContent.faq) {
        const faq = formDataContent.faq;
        if (faq.title && faq.subtitle && faq.questions && faq.questions.length > 0) {
          const validQuestions = faq.questions.filter(q => q.question && q.answer);
          if (validQuestions.length > 0) {
            transformedData.data.faq = {
              title: faq.title,
              subtitle: faq.subtitle,
              questions: validQuestions.map(q => ({
                question: q.question!,
                answer: q.answer!,
              })),
            };
          }
        }
      }

      // Handle other optional fields with proper validation
      if (formDataContent.signsSymptoms?.title && formDataContent.signsSymptoms?.subtitle && formDataContent.signsSymptoms?.items?.length) {
        transformedData.data.signsSymptoms = {
          title: formDataContent.signsSymptoms.title,
          subtitle: formDataContent.signsSymptoms.subtitle,
          items: formDataContent.signsSymptoms.items,
        };
      }

      if (formDataContent.treatments?.title && formDataContent.treatments?.subtitle && formDataContent.treatments?.items?.length) {
        transformedData.data.treatments = {
          title: formDataContent.treatments.title,
          subtitle: formDataContent.treatments.subtitle,
          items: formDataContent.treatments.items as unknown as Array<{ title: string; description: string; }>,
        };
      }

      if (formDataContent.transformations?.title && formDataContent.transformations?.subtitle && formDataContent.transformations?.description && formDataContent.transformations?.images?.length) {
        // Validate and filter transformation images
        const validImages = formDataContent.transformations.images.filter(img =>
          img && typeof img === 'object' && img.src && img.alt
        ).map(img => ({
          src: img.src!,
          alt: img.alt!,
          storageId: img.storageId as Id<"_storage"> | undefined,
        }));

        if (validImages.length > 0) {
          transformedData.data.transformations = {
            title: formDataContent.transformations.title,
            subtitle: formDataContent.transformations.subtitle,
            description: formDataContent.transformations.description,
            images: validImages,
          };
        }
      }

      if (formDataContent.testimonials?.title && formDataContent.testimonials?.subtitle && formDataContent.testimonials?.items?.length) {
        transformedData.data.testimonials = {
          title: formDataContent.testimonials.title,
          subtitle: formDataContent.testimonials.subtitle,
          items: formDataContent.testimonials.items,
        };
      }

      if (formDataContent.whoBenefits?.title && formDataContent.whoBenefits?.items?.length) {
        transformedData.data.whoBenefits = {
          title: formDataContent.whoBenefits.title,
          items: formDataContent.whoBenefits.items,
        };
      }

      // Update service via Convex mutation
      await updateService({
        id: serviceId,
        ...transformedData,
      });

      setHasChanges(false);
      setLastSaved(new Date());
      toast.success('Service updated successfully!');

      // Redirect to services list after successful update
      setTimeout(() => {
        router.push('/manage-services');
      }, 1500);

    } catch (error) {
      const errorType = handleError(error, 'form submission');

      if (errorType === 'network') {
        // Offer retry for network errors
        toast.error('Network error occurred. Click retry to try again.', {
          action: {
            label: 'Retry',
            onClick: () => retryOperation(async () => {
              await handleSubmit(e);
            })
          }
        });
      } else if (errorType === 'validation') {
        toast.error('Validation error. Please check your input and try again.');
      } else {
        toast.error('Failed to update service. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, serviceId, updateService, router]);

  // Loading state
  if (!serviceId || service === undefined) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading service...</span>
        </div>
      </div>
    );
  }

  // Service not found
  if (service === null) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <AlertCircle className="h-12 w-12 text-red-500" />
        <h2 className="text-xl font-semibold">Service Not Found</h2>
        <p className="text-muted-foreground">The requested service could not be found.</p>
        <Button onClick={() => router.push('/manage-services')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Services
        </Button>
      </div>
    );
  }

  // Form not initialized
  if (!formData) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Initializing form...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push('/manage-services')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Edit Service</h1>
            <p className="text-muted-foreground">
              Update service information and content
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {lastSaved && (
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 mr-1" />
              Last saved: {lastSaved.toLocaleTimeString()}
            </div>
          )}
          {hasChanges && (
            <Badge variant="secondary">Unsaved changes</Badge>
          )}
        </div>
      </div>

      {/* Validation Error Alert */}
      {Object.keys(errors).length > 0 && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Please fix the following errors:
            <ul className="mt-2 list-disc list-inside">
              {Object.entries(errors).map(([field, error]) => (
                <li key={field}>{error}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {/* Network Error Alert */}
      {networkError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="flex items-center justify-between">
            <div>
              <p>{networkError}</p>
              {retryCount > 0 && (
                <p className="text-sm mt-1">Retry attempt: {retryCount}/3</p>
              )}
            </div>
            <div className="flex space-x-2">
              {isRetrying ? (
                <Button disabled size="sm">
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Retrying...
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setNetworkError(null)}
                  >
                    Dismiss
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => retryOperation(async () => {
                      // Retry the last failed operation
                      window.location.reload();
                    })}
                  >
                    Retry
                  </Button>
                </>
              )}
            </div>
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>
              Configure the basic service details and categorization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Service Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                  placeholder="Enter service name"
                  className={errors.name ? 'border-red-500' : ''}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">URL Slug *</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => handleFieldChange('slug', e.target.value)}
                  placeholder="service-url-slug"
                  className={errors.slug ? 'border-red-500' : ''}
                />
                {errors.slug && (
                  <p className="text-sm text-red-500">{errors.slug}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Service Type *</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value) => handleFieldChange('type', value)}
                >
                  <SelectTrigger className={errors.type ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="skin">Skin</SelectItem>
                    <SelectItem value="hair">Hair</SelectItem>
                    <SelectItem value="laser">Laser</SelectItem>
                  </SelectContent>
                </Select>
                {errors.type && (
                  <p className="text-sm text-red-500">{errors.type}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => handleFieldChange('category', value)}
                >
                  <SelectTrigger className={errors.category ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredCategories.map((category) => (
                      <SelectItem key={category._id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && (
                  <p className="text-sm text-red-500">{errors.category}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hero Section */}
        <Card>
          <CardHeader>
            <CardTitle>Hero Section</CardTitle>
            <CardDescription>
              Main title and description displayed prominently on the service page
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hero-title">Hero Title *</Label>
              <Textarea
                id="hero-title"
                value={formData.data.hero.title}
                onChange={(e) => handleFieldChange('data.hero.title', e.target.value)}
                placeholder="Enter hero title"
                className={errors['data.hero.title'] ? 'border-red-500' : ''}
              />
              {errors['data.hero.title'] && (
                <p className="text-sm text-red-500">{errors['data.hero.title']}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="hero-description">Hero Description *</Label>
              <Textarea
                id="hero-description"
                value={formData.data.hero.description}
                onChange={(e) => handleFieldChange('data.hero.description', e.target.value)}
                placeholder="Enter hero description"
                rows={3}
                className={errors['data.hero.description'] ? 'border-red-500' : ''}
              />
              {errors['data.hero.description'] && (
                <p className="text-sm text-red-500">{errors['data.hero.description']}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* About Section */}
        <Card>
          <CardHeader>
            <CardTitle>About Section</CardTitle>
            <CardDescription>
              Detailed information about the service
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="about-title">About Title</Label>
              <Input
                id="about-title"
                value={formData.data.about?.title || ''}
                onChange={(e) => handleFieldChange('data.about.title', e.target.value)}
                placeholder="Enter about title"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="about-description">About Description</Label>
              <Textarea
                id="about-description"
                value={formData.data.about?.description || ''}
                onChange={(e) => handleFieldChange('data.about.description', e.target.value)}
                placeholder="Enter about description"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="about-highlight">About Highlight</Label>
              <Input
                id="about-highlight"
                value={formData.data.about?.highlight || ''}
                onChange={(e) => handleFieldChange('data.about.highlight', e.target.value)}
                placeholder="Enter about highlight"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="about-image">Service Image</Label>
              <ImageUpload
                value={formData.data.about?.imageStorageId}
                onChange={(storageId, imageUrl) => {
                  handleFieldChange('data.about.imageStorageId', storageId);
                  handleFieldChange('data.about.image', imageUrl || '');
                }}
                onRemove={() => {
                  handleFieldChange('data.about.imageStorageId', '');
                  handleFieldChange('data.about.image', '');
                }}
                placeholder="Upload an image to display in the about section of your service"
              />
            </div>
          </CardContent>
        </Card>

        {/* Process Section */}
        <Card>
          <CardHeader>
            <CardTitle>Process Section</CardTitle>
            <CardDescription>
              Step-by-step process of the service
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="process-title">Process Title</Label>
              <Input
                id="process-title"
                value={formData.data.process?.title || ''}
                onChange={(e) => handleFieldChange('data.process.title', e.target.value)}
                placeholder="Enter process title"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Process Steps</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem('data.process.steps', { title: '', description: '' })}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Step
                </Button>
              </div>

              {formData.data.process?.steps?.map((step, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-medium">Step {index + 1}</h4>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeArrayItem('data.process.steps', index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label>Step Title</Label>
                      <Input
                        value={step.title}
                        onChange={(e) => handleArrayFieldChange('data.process.steps', index, 'title', e.target.value)}
                        placeholder="Enter step title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Step Description</Label>
                      <Textarea
                        value={step.description}
                        onChange={(e) => handleArrayFieldChange('data.process.steps', index, 'description', e.target.value)}
                        placeholder="Enter step description"
                        rows={2}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <Card>
          <CardHeader>
            <CardTitle>Benefits Section</CardTitle>
            <CardDescription>
              Key benefits of the service
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="benefits-title">Benefits Title</Label>
              <Input
                id="benefits-title"
                value={formData.data.benefits?.title || ''}
                onChange={(e) => handleFieldChange('data.benefits.title', e.target.value)}
                placeholder="Enter benefits title"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Benefit Items</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem('data.benefits.items', '')}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Benefit
                </Button>
              </div>

              {formData.data.benefits?.items?.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Input
                    value={item}
                    onChange={(e) => {
                      const newItems = [...(formData.data.benefits?.items || [])];
                      newItems[index] = e.target.value;
                      handleFieldChange('data.benefits.items', newItems);
                    }}
                    placeholder="Enter benefit"
                    className="flex-1"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeArrayItem('data.benefits.items', index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Post Care Section */}
        <Card>
          <CardHeader>
            <CardTitle>Post Care Section</CardTitle>
            <CardDescription>
              Configure post-care information including downtime and care instructions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="postCareSubtitle">Post Care Subtitle</Label>
              <Input
                id="postCareSubtitle"
                value={formData.data.postCare?.subtitle || ''}
                onChange={(e) => handleFieldChange('data.postCare.subtitle', e.target.value)}
                placeholder="e.g., Recovery & Aftercare"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="postCareMainTitle">Post Care Title</Label>
              <Input
                id="postCareMainTitle"
                value={formData.data.postCare?.title || ''}
                onChange={(e) => handleFieldChange('data.postCare.title', e.target.value)}
                placeholder="e.g., What to Expect After Treatment"
              />
            </div>

            {/* Downtime Subsection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">Downtime Information</Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="postCareDowntimeTitle">Downtime Title</Label>
                <Input
                  id="postCareDowntimeTitle"
                  value={formData.data.postCare?.downtime?.title || ''}
                  onChange={(e) => handleFieldChange('data.postCare.downtime.title', e.target.value)}
                  placeholder="e.g., Expected Downtime"
                />
                {errors['data.postCare.downtime.title'] && (
                  <p className="text-sm text-red-600">{errors['data.postCare.downtime.title']}</p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Downtime Items</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => addArrayItem('data.postCare.downtime.items', '')}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Item
                  </Button>
                </div>

                {formData.data.postCare?.downtime?.items?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      value={item}
                      onChange={(e) => {
                        const newItems = [...(formData.data.postCare?.downtime?.items || [])];
                        newItems[index] = e.target.value;
                        handleFieldChange('data.postCare.downtime.items', newItems);
                      }}
                      placeholder="Enter downtime information"
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeArrayItem('data.postCare.downtime.items', index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Post-Care Subsection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">Post-Care Information</Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="postCarePostCareTitle">Post-Care Title</Label>
                <Input
                  id="postCarePostCareTitle"
                  value={formData.data.postCare?.postCare?.title || ''}
                  onChange={(e) => handleFieldChange('data.postCare.postCare.title', e.target.value)}
                  placeholder="e.g., Post-Care Instructions"
                />
                {errors['data.postCare.postCare.title'] && (
                  <p className="text-sm text-red-600">{errors['data.postCare.postCare.title']}</p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Post-Care Items</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => addArrayItem('data.postCare.postCare.items', '')}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Item
                  </Button>
                </div>

                {formData.data.postCare?.postCare?.items?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      value={item}
                      onChange={(e) => {
                        const newItems = [...(formData.data.postCare?.postCare?.items || [])];
                        newItems[index] = e.target.value;
                        handleFieldChange('data.postCare.postCare.items', newItems);
                      }}
                      placeholder="Enter post-care instruction"
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeArrayItem('data.postCare.postCare.items', index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>FAQ Section</CardTitle>
            <CardDescription>
              Configure frequently asked questions and their answers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="faqTitle">FAQ Title</Label>
              <Input
                id="faqTitle"
                value={formData.data.faq?.title || ''}
                onChange={(e) => handleFieldChange('data.faq.title', e.target.value)}
                placeholder="e.g., Frequently Asked Questions"
              />
              {errors['data.faq.title'] && (
                <p className="text-sm text-red-600">{errors['data.faq.title']}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="faqSubtitle">FAQ Subtitle</Label>
              <Input
                id="faqSubtitle"
                value={formData.data.faq?.subtitle || ''}
                onChange={(e) => handleFieldChange('data.faq.subtitle', e.target.value)}
                placeholder="e.g., Common questions about this service"
              />
              {errors['data.faq.subtitle'] && (
                <p className="text-sm text-red-600">{errors['data.faq.subtitle']}</p>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">Questions & Answers</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem('data.faq.questions', { question: '', answer: '' })}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Question
                </Button>
              </div>

              {formData.data.faq?.questions?.map((qa, index) => (
                <Card key={index} className="p-4 border-l-4 border-l-blue-500">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium">Question {index + 1}</Label>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeArrayItem('data.faq.questions', index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`faqQuestion${index}`}>Question</Label>
                      <Input
                        id={`faqQuestion${index}`}
                        value={qa.question}
                        onChange={(e) => {
                          const newQuestions = [...(formData.data.faq?.questions || [])];
                          newQuestions[index] = { ...newQuestions[index], question: e.target.value };
                          handleFieldChange('data.faq.questions', newQuestions);
                        }}
                        placeholder="Enter the question"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`faqAnswer${index}`}>Answer</Label>
                      <Textarea
                        id={`faqAnswer${index}`}
                        value={qa.answer}
                        onChange={(e) => {
                          const newQuestions = [...(formData.data.faq?.questions || [])];
                          newQuestions[index] = { ...newQuestions[index], answer: e.target.value };
                          handleFieldChange('data.faq.questions', newQuestions);
                        }}
                        placeholder="Enter the answer"
                        rows={3}
                      />
                    </div>
                  </div>
                </Card>
              ))}

              {(!formData.data.faq?.questions || formData.data.faq.questions.length === 0) && (
                <div className="text-center py-8 text-gray-500">
                  <p>No FAQ questions added yet. Click &quot;Add Question&quot; to get started.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Signs & Symptoms Section */}
        <Card>
          <CardHeader>
            <CardTitle>Signs & Symptoms Section</CardTitle>
            <CardDescription>
              Configure signs and symptoms information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="signsSubtitle">Signs & Symptoms Subtitle</Label>
              <Input
                id="signsSubtitle"
                value={formData.data.signsSymptoms?.subtitle || ''}
                onChange={(e) => handleFieldChange('data.signsSymptoms.subtitle', e.target.value)}
                placeholder="e.g., Identify the Problem"
              />
              {errors['data.signsSymptoms.subtitle'] && (
                <p className="text-sm text-red-600">{errors['data.signsSymptoms.subtitle']}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="signsTitle">Signs & Symptoms Title</Label>
              <Input
                id="signsTitle"
                value={formData.data.signsSymptoms?.title || ''}
                onChange={(e) => handleFieldChange('data.signsSymptoms.title', e.target.value)}
                placeholder="e.g., Signs & Symptoms"
              />
              {errors['data.signsSymptoms.title'] && (
                <p className="text-sm text-red-600">{errors['data.signsSymptoms.title']}</p>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">Signs & Symptoms Items</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem('data.signsSymptoms.items', '')}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </div>

              {formData.data.signsSymptoms?.items?.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Input
                    value={item}
                    onChange={(e) => {
                      const newItems = [...(formData.data.signsSymptoms?.items || [])];
                      newItems[index] = e.target.value;
                      handleFieldChange('data.signsSymptoms.items', newItems);
                    }}
                    placeholder="Enter sign or symptom"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeArrayItem('data.signsSymptoms.items', index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              {(!formData.data.signsSymptoms?.items || formData.data.signsSymptoms.items.length === 0) && (
                <div className="text-center py-8 text-gray-500">
                  <p>No signs & symptoms added yet. Click &quot;Add Item&quot; to get started.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Treatments Section */}
        <Card>
          <CardHeader>
            <CardTitle>Treatments Section</CardTitle>
            <CardDescription>
              Configure types of treatments information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="treatmentsSubtitle">Treatments Subtitle</Label>
              <Input
                id="treatmentsSubtitle"
                value={formData.data.treatments?.subtitle || ''}
                onChange={(e) => handleFieldChange('data.treatments.subtitle', e.target.value)}
                placeholder="e.g., Treatment Options"
              />
              {errors['data.treatments.subtitle'] && (
                <p className="text-sm text-red-600">{errors['data.treatments.subtitle']}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="treatmentsTitle">Treatments Title</Label>
              <Input
                id="treatmentsTitle"
                value={formData.data.treatments?.title || ''}
                onChange={(e) => handleFieldChange('data.treatments.title', e.target.value)}
                placeholder="e.g., Types of Treatments"
              />
              {errors['data.treatments.title'] && (
                <p className="text-sm text-red-600">{errors['data.treatments.title']}</p>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">Treatment Items</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem('data.treatments.items', { title: '', description: '' })}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </div>

              {formData.data.treatments?.items?.map((item: any, index) => (
                <div key={index} className="space-y-2 p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Treatment {index + 1}</Label>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeArrayItem('data.treatments.items', index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Input
                      value={item.title || ''}
                      onChange={(e) => {
                        const newItems = [...(formData.data.treatments?.items || [])];
                        newItems[index] = {
                          ...(newItems[index] || { title: '', description: '' }),
                          title: e.target.value
                        };
                        handleFieldChange('data.treatments.items', newItems);
                      }}
                      placeholder="Treatment title"
                    />
                    <Input
                      value={item.description || ''}
                      onChange={(e) => {
                        const newItems = [...(formData.data.treatments?.items || [])];
                        newItems[index] = {
                          ...(newItems[index] || { title: '', description: '' }),
                          description: e.target.value
                        };
                        handleFieldChange('data.treatments.items', newItems);
                      }}
                      placeholder="Treatment description"
                    />
                  </div>
                </div>
              ))}

              {(!formData.data.treatments?.items || formData.data.treatments.items.length === 0) && (
                <div className="text-center py-8 text-gray-500">
                  <p>No treatments added yet. Click &quot;Add Item&quot; to get started.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Transformations Section */}
        <Card>
          <CardHeader>
            <CardTitle>Transformations Section</CardTitle>
            <CardDescription>
              Configure before & after transformations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="transformationsSubtitle">Transformations Subtitle</Label>
              <Input
                id="transformationsSubtitle"
                value={formData.data.transformations?.subtitle || ''}
                onChange={(e) => handleFieldChange('data.transformations.subtitle', e.target.value)}
                placeholder="e.g., Real Results"
              />
              {errors['data.transformations.subtitle'] && (
                <p className="text-sm text-red-600">{errors['data.transformations.subtitle']}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="transformationsTitle">Transformations Title</Label>
              <Input
                id="transformationsTitle"
                value={formData.data.transformations?.title || ''}
                onChange={(e) => handleFieldChange('data.transformations.title', e.target.value)}
                placeholder="e.g., Before & After Transformations"
              />
              {errors['data.transformations.title'] && (
                <p className="text-sm text-red-600">{errors['data.transformations.title']}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="transformationsDescription">Transformations Description</Label>
              <Textarea
                id="transformationsDescription"
                value={formData.data.transformations?.description || ''}
                onChange={(e) => handleFieldChange('data.transformations.description', e.target.value)}
                placeholder="Enter description for transformations section"
                rows={3}
              />
              {errors['data.transformations.description'] && (
                <p className="text-sm text-red-600">{errors['data.transformations.description']}</p>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">Transformation Images</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem('data.transformations.images', { src: '', alt: '' })}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Image
                </Button>
              </div>

              {formData.data.transformations?.images?.map((image, index) => (
                <Card key={index} className="p-4 border-l-4 border-l-green-500">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium">Image {index + 1}</Label>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeArrayItem('data.transformations.images', index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`transformationImageSrc${index}`}>Image URL</Label>
                      <Input
                        id={`transformationImageSrc${index}`}
                        value={image.src}
                        onChange={(e) => {
                          const newImages = [...(formData.data.transformations?.images || [])];
                          newImages[index] = { ...newImages[index], src: e.target.value };
                          handleFieldChange('data.transformations.images', newImages);
                        }}
                        placeholder="Enter image URL"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`transformationImageAlt${index}`}>Alt Text</Label>
                      <Input
                        id={`transformationImageAlt${index}`}
                        value={image.alt}
                        onChange={(e) => {
                          const newImages = [...(formData.data.transformations?.images || [])];
                          newImages[index] = { ...newImages[index], alt: e.target.value };
                          handleFieldChange('data.transformations.images', newImages);
                        }}
                        placeholder="Enter alt text for accessibility"
                      />
                    </div>
                  </div>
                </Card>
              ))}

              {(!formData.data.transformations?.images || formData.data.transformations.images.length === 0) && (
                <div className="text-center py-8 text-gray-500">
                  <p>No transformation images added yet. Click &quot;Add Image&quot; to get started.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Testimonials Section */}
        <Card>
          <CardHeader>
            <CardTitle>Testimonials Section</CardTitle>
            <CardDescription>
              Configure customer testimonials and reviews
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="testimonialsSubtitle">Testimonials Subtitle</Label>
              <Input
                id="testimonialsSubtitle"
                value={formData.data.testimonials?.subtitle || ''}
                onChange={(e) => handleFieldChange('data.testimonials.subtitle', e.target.value)}
                placeholder="e.g., Patient Reviews"
              />
              {errors['data.testimonials.subtitle'] && (
                <p className="text-sm text-red-600">{errors['data.testimonials.subtitle']}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="testimonialsTitle">Testimonials Title</Label>
              <Input
                id="testimonialsTitle"
                value={formData.data.testimonials?.title || ''}
                onChange={(e) => handleFieldChange('data.testimonials.title', e.target.value)}
                placeholder="e.g., What Our Patients Say"
              />
              {errors['data.testimonials.title'] && (
                <p className="text-sm text-red-600">{errors['data.testimonials.title']}</p>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">Customer Reviews</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem('data.testimonials.items', '')}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Review
                </Button>
              </div>

              {formData.data.testimonials?.items?.map((testimonial, index) => (
                <Card key={index} className="p-4 border-l-4 border-l-yellow-500">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium">Testimonial {index + 1}</Label>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeArrayItem('data.testimonials.items', index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`testimonial${index}`}>Testimonial Text</Label>
                      <Textarea
                        id={`testimonial${index}`}
                        value={testimonial}
                        onChange={(e) => {
                          const newItems = [...(formData.data.testimonials?.items || [])];
                          newItems[index] = e.target.value;
                          handleFieldChange('data.testimonials.items', newItems);
                        }}
                        placeholder="Enter customer testimonial"
                        rows={3}
                      />
                    </div>
                  </div>
                </Card>
              ))}

              {(!formData.data.testimonials?.items || formData.data.testimonials.items.length === 0) && (
                <div className="text-center py-8 text-gray-500">
                  <p>No testimonials added yet. Click &quot;Add Review&quot; to get started.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Who Benefits Section */}
        <Card>
          <CardHeader>
            <CardTitle>Who Benefits Section</CardTitle>
            <CardDescription>
              Configure who can benefit from this treatment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="whoBenefitsTitle">Who Benefits Title</Label>
              <Input
                id="whoBenefitsTitle"
                value={formData.data.whoBenefits?.title || ''}
                onChange={(e) => handleFieldChange('data.whoBenefits.title', e.target.value)}
                placeholder="e.g., Who Can Benefit from This Treatment?"
              />
              {errors['data.whoBenefits.title'] && (
                <p className="text-sm text-red-600">{errors['data.whoBenefits.title']}</p>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">Benefit Items</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => addArrayItem('data.whoBenefits.items', '')}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </div>

              {formData.data.whoBenefits?.items?.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Input
                    value={item}
                    onChange={(e) => {
                      const newItems = [...(formData.data.whoBenefits?.items || [])];
                      newItems[index] = e.target.value;
                      handleFieldChange('data.whoBenefits.items', newItems);
                    }}
                    placeholder="Enter who can benefit"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeArrayItem('data.whoBenefits.items', index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}

              {(!formData.data.whoBenefits?.items || formData.data.whoBenefits.items.length === 0) && (
                <div className="text-center py-8 text-gray-500">
                  <p>No benefit items added yet. Click &quot;Add Item&quot; to get started.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex items-center justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/manage-services')}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting || !hasChanges}
            className="min-w-[120px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
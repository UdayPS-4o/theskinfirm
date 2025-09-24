'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
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

/**
 * Props interface for the EditServicePage component
 */
interface EditServicePageProps {
  params: Promise<{ id: string }>;
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
      downtime: {
        title: string;
        items: string[];
      };
      info: {
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
      title: z.string().min(1, "About title is required"),
      description: z.string().min(1, "About description is required"),
      highlight: z.string().min(1, "About highlight is required"),
      image: z.string().min(1, "Image URL is required"),
      imageStorageId: z.custom<Id<"_storage">>().optional(),
    }).optional(),
    process: z.object({
      title: z.string().min(1, "Process title is required"),
      steps: z.array(z.object({
        title: z.string().min(1, "Step title is required"),
        description: z.string().min(1, "Step description is required"),
      })).min(1, "At least one process step is required"),
    }).optional(),
    benefits: z.object({
      title: z.string().min(1, "Benefits title is required"),
      items: z.array(z.string().min(1, "Benefit item cannot be empty")).min(1, "At least one benefit is required"),
    }).optional(),
    postCare: z.object({
      downtime: z.object({
        title: z.string().min(1, "Downtime title is required"),
        items: z.array(z.string().min(1, "Downtime item cannot be empty")).min(1, "At least one downtime item is required"),
      }),
      info: z.object({
        title: z.string().min(1, "Info title is required"),
        items: z.array(z.string().min(1, "Info item cannot be empty")).min(1, "At least one info item is required"),
      }),
    }).optional(),
    faq: z.object({
      title: z.string().min(1, "FAQ title is required"),
      subtitle: z.string().min(1, "FAQ subtitle is required"),
      questions: z.array(z.object({
        question: z.string().min(1, "Question is required"),
        answer: z.string().min(1, "Answer is required"),
      })).min(1, "At least one FAQ question is required"),
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
          about: service.data.about,
          process: service.data.process,
          benefits: service.data.benefits,
          postCare: service.data.postCare,
          faq: service.data.faq,
        },
      };
      setFormData(initialData);
    }
  }, [service, formData]);

  // Memoized filtered categories based on service type
  const filteredCategories = useMemo(() => {
    if (!categories || !formData) return [];
    return categories.filter(cat => cat.type === formData.type && cat.isActive);
  }, [categories, formData?.type]);

  // Handle form field changes with validation
  const handleFieldChange = useCallback((field: string, value: any) => {
    if (!formData) return;

    setFormData(prev => {
      if (!prev) return prev;
      
      const newData = { ...prev };
      const fieldPath = field.split('.');
      
      let current: any = newData;
      for (let i = 0; i < fieldPath.length - 1; i++) {
        if (!current[fieldPath[i]]) {
          current[fieldPath[i]] = {};
        }
        current = current[fieldPath[i]];
      }
      current[fieldPath[fieldPath.length - 1]] = value;

      // Auto-generate slug when name changes
      if (field === 'name' && typeof value === 'string') {
        newData.slug = generateSlug(value);
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
      
      let current: any = newData;
      for (const path of fieldPath) {
        if (!current[path]) {
          current[path] = {};
        }
        current = current[path];
      }

      if (!Array.isArray(current)) {
        current = [];
      }

      if (!current[index]) {
        current[index] = {};
      }

      current[index][subField] = value;
      
      return newData;
    });

    setHasChanges(true);
  }, [formData]);

  // Add new array item
  const addArrayItem = useCallback((field: string, defaultItem: any) => {
    if (!formData) return;

    setFormData(prev => {
      if (!prev) return prev;
      
      const newData = { ...prev };
      const fieldPath = field.split('.');
      
      let current: any = newData;
      for (const path of fieldPath) {
        if (!current[path]) {
          current[path] = {};
        }
        current = current[path];
      }

      if (!Array.isArray(current)) {
        current = [];
      }

      current.push(defaultItem);
      
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
      
      let current: any = newData;
      for (const path of fieldPath) {
        current = current[path];
      }

      if (Array.isArray(current)) {
        current.splice(index, 1);
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

      // Update service via Convex mutation
      await updateService({
        id: serviceId,
        ...validationResult.data,
      });

      setHasChanges(false);
      setLastSaved(new Date());
      toast.success('Service updated successfully!');
      
      // Redirect to services list after successful update
      setTimeout(() => {
        router.push('/manage-services');
      }, 1500);

    } catch (error) {
      console.error('Failed to update service:', error);
      toast.error('Failed to update service. Please try again.');
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

      {/* Error Alert */}
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
              <Input
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
              <Label htmlFor="about-image">About Image URL</Label>
              <Input
                id="about-image"
                value={formData.data.about?.image || ''}
                onChange={(e) => handleFieldChange('data.about.image', e.target.value)}
                placeholder="Enter image URL"
                type="url"
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
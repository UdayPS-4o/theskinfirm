"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Loader2, Upload, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ImageUpload } from "@/components/shared/ImageUpload";

// Form validation schema matching the updated Convex schema
const serviceFormSchema = z.object({
    name: z.string().min(1, "Service name is required"),
    type: z.enum(["skin", "hair", "laser"]),
    slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens"),
    category: z.string().optional(),
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
            imageStorageId: z.string().optional(),
        }).optional(),
        process: z.object({
            title: z.string().optional(),
            steps: z.array(z.object({
                title: z.string().min(1, "Step title is required"),
                description: z.string().min(1, "Step description is required"),
            })).optional(),
        }).optional(),
        benefits: z.object({
            title: z.string().optional(),
            items: z.array(z.string().min(1, "Benefit item cannot be empty")).optional(),
        }).optional(),
        postCare: z.object({
            subtitle: z.string().optional(),
            title: z.string().optional(),
            downtime: z.object({
                title: z.string().optional(),
                items: z.array(z.string().min(1, "Downtime item cannot be empty")).optional(),
            }).optional(),
            postCare: z.object({
                title: z.string().optional(),
                items: z.array(z.string().min(1, "Post care item cannot be empty")).optional(),
            }).optional(),
        }).optional(),
        signsSymptoms: z.object({
            subtitle: z.string().optional(),
            title: z.string().optional(),
            items: z.array(z.string().min(1, "Signs & symptoms item cannot be empty")).optional(),
        }).optional(),
        treatments: z.object({
            subtitle: z.string().optional(),
            title: z.string().optional(),
            items: z.array(z.object({
                title: z.string().min(1, "Treatment title cannot be empty"),
                description: z.string().min(1, "Treatment description cannot be empty"),
            })).optional(),
        }).optional(),
        transformations: z.object({
            subtitle: z.string().optional(),
            title: z.string().optional(),
            description: z.string().optional(),
            images: z.array(z.object({
                src: z.string().min(1, "Image URL is required"),
                alt: z.string().min(1, "Image alt text is required"),
            })).optional(),
        }).optional(),
        testimonials: z.object({
            subtitle: z.string().optional(),
            title: z.string().optional(),
            items: z.array(z.string().min(1, "Testimonial cannot be empty")).optional(),
        }).optional(),
        whoBenefits: z.object({
            title: z.string().optional(),
            items: z.array(z.string().min(1, "Who benefits item cannot be empty")).optional(),
        }).optional(),
        faq: z.object({
            title: z.string().optional(),
            subtitle: z.string().optional(),
            questions: z.array(z.object({
                question: z.string().min(1, "Question is required"),
                answer: z.string().min(1, "Answer is required"),
            })).optional(),
        }).optional(),
    }),
});

type ServiceFormValues = z.infer<typeof serviceFormSchema>;

export default function AddServicePage() {
    const router = useRouter();
    const createService = useMutation(api.services.mutations.createService);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const form = useForm<ServiceFormValues>({
        resolver: zodResolver(serviceFormSchema),
        defaultValues: {
            name: "",
            type: "skin",
            slug: "",
            category: "",
            data: {
                hero: {
                    title: "",
                    description: "",
                },
                about: {
                    title: "",
                    description: "",
                    highlight: "",
                    image: "",
                    imageStorageId: "",
                },
                process: {
                    title: "",
                    steps: [],
                },
                benefits: {
                    title: "",
                    items: [],
                },
                postCare: {
                    subtitle: "",
                    title: "",
                    downtime: {
                        title: "",
                        items: [],
                    },
                    postCare: {
                        title: "",
                        items: [],
                    },
                },
                signsSymptoms: {
                    subtitle: "",
                    title: "",
                    items: [],
                },
                treatments: {
                    subtitle: "",
                    title: "",
                    items: [],
                },
                transformations: {
                    subtitle: "",
                    title: "",
                    description: "",
                    images: [],
                },
                testimonials: {
                    subtitle: "",
                    title: "",
                    items: [],
                },
                whoBenefits: {
                    title: "",
                    items: [],
                },
                faq: {
                    title: "",
                    subtitle: "",
                    questions: [],
                },
            },
        },
    });

    const { fields: stepFields, append: appendStep, remove: removeStep } = useFieldArray({
        control: form.control,
        name: "data.process.steps",
    });

    const { fields: benefitFields, append: appendBenefit, remove: removeBenefit } = useFieldArray({
        control: form.control,
        name: "data.benefits.items" as any,
    });

    const { fields: downtimeFields, append: appendDowntime, remove: removeDowntime } = useFieldArray({
        control: form.control,
        name: "data.postCare.downtime.items" as any,
    });

    const { fields: postCareFields, append: appendPostCare, remove: removePostCare } = useFieldArray({
        control: form.control,
        name: "data.postCare.postCare.items" as any,
    });

    const { fields: signsSymptomsFields, append: appendSignsSymptoms, remove: removeSignsSymptoms } = useFieldArray({
        control: form.control,
        name: "data.signsSymptoms.items" as any,
    });

    const { fields: treatmentsFields, append: appendTreatments, remove: removeTreatments } = useFieldArray({
        control: form.control,
        name: "data.treatments.items" as any,
    });

    const { fields: transformationImageFields, append: appendTransformationImage, remove: removeTransformationImage } = useFieldArray({
        control: form.control,
        name: "data.transformations.images",
    });

    const { fields: testimonialFields, append: appendTestimonial, remove: removeTestimonial } = useFieldArray({
        control: form.control,
        name: "data.testimonials.items" as any,
    });

    const { fields: whoBenefitsFields, append: appendWhoBenefits, remove: removeWhoBenefits } = useFieldArray({
        control: form.control,
        name: "data.whoBenefits.items" as any,
    });

    const { fields: faqFields, append: appendFaq, remove: removeFaq } = useFieldArray({
        control: form.control,
        name: "data.faq.questions",
    });

    // Watch service type to load categories dynamically
    const watchType = form.watch("type");
    const categories = useQuery(api.serviceCategories.queries.getServiceCategories, { type: watchType });

    // Auto-generate slug from name
    const watchName = form.watch("name");
    React.useEffect(() => {
        if (watchName) {
            const slug = watchName
                .toLowerCase()
                .replace(/[^a-z0-9\s-]/g, "")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-")
                .trim();
            form.setValue("slug", slug);
        }
    }, [watchName, form]);

    // Reset category when service type changes
    React.useEffect(() => {
        form.setValue("category", "");
    }, [watchType, form]);

    const onSubmit = async (values: ServiceFormValues) => {
        try {
            setIsSubmitting(true);
            setSubmitError(null);

            // Clean up optional empty sections
            const cleanedData = { ...values.data };

            if (!cleanedData.about?.title && !cleanedData.about?.description) {
                delete cleanedData.about;
            }

            if (!cleanedData.process?.title || !cleanedData.process?.steps?.length) {
                delete cleanedData.process;
            }

            if (!cleanedData.benefits?.title || !cleanedData.benefits?.items?.length) {
                delete cleanedData.benefits;
            }

            if (!cleanedData.postCare?.downtime?.title && !cleanedData.postCare?.postCare?.title) {
                delete cleanedData.postCare;
            }

            if (!cleanedData.faq?.title || !cleanedData.faq?.questions?.length) {
                delete cleanedData.faq;
            }

            const serviceData = {
                name: values.name,
                type: values.type,
                slug: values.slug,
                data: cleanedData as any,
            };

            // Only include category if it's provided and not empty
            if (values.category && values.category.trim() !== "") {
                (serviceData as any).category = values.category;
            }

            await createService(serviceData);

            toast.success("Service created successfully!");
            router.push("/manage-services");
        } catch (error) {
            console.error("Error creating service:", error);
            const errorMessage = error instanceof Error ? error.message : "Failed to create service. Please try again.";
            setSubmitError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderCategorySelect = () => {
        if (categories === undefined) {
            return (
                <SelectItem value="loading" disabled>
                    <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Loading categories...</span>
                    </div>
                </SelectItem>
            );
        }

        if (!categories || categories.length === 0) {
            return (
                <SelectItem value="no-categories" disabled>
                    <div className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        <span>No categories available</span>
                    </div>
                </SelectItem>
            );
        }

        return categories.map((category) => (
            <SelectItem key={category._id} value={category.name}>
                <div className="flex items-center gap-2">
                    <Badge variant="outline">{category.name}</Badge>
                </div>
            </SelectItem>
        ));
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto max-w-4xl py-8 space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">Add New Service</h1>
                        <p className="text-muted-foreground">
                            Create a new service with all the necessary information and sections.
                        </p>
                    </div>

            {submitError && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{submitError}</AlertDescription>
                </Alert>
            )}

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Basic Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic Information</CardTitle>
                            <CardDescription>
                                Enter the basic details for your service.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Service Name *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g., Hair Transplant" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="type"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Service Type *</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select service type" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="skin">
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="secondary">Skin</Badge>
                                                            Skin Care Services
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="hair">
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="secondary">Hair</Badge>
                                                            Hair Care Services
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="laser">
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="secondary">Laser</Badge>
                                                            Laser Treatments
                                                        </div>
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Category Field - Show for all service types but only required for skin */}
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Service Category</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value || ""}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a category (optional)" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {renderCategorySelect()}
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Optional: Select a category to group this service in the navigation.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="slug"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>URL Slug *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="hair-transplant" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Auto-generated from service name. Use lowercase letters, numbers, and hyphens only.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                    </Card>

                    {/* Hero Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Hero Section *</CardTitle>
                            <CardDescription>
                                This section appears at the top of your service page.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <FormField
                                control={form.control}
                                name="data.hero.title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Hero Title *</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Transform Your Hair with Advanced Hair Transplant" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="data.hero.description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Hero Description *</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Describe your service in an engaging way that captures attention..."
                                                className="min-h-24"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                    </Card>

                    {/* About Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>About Section</CardTitle>
                            <CardDescription>
                                Optional: Provide detailed information about your service.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <FormField
                                control={form.control}
                                name="data.about.title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>About Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="About Hair Transplant" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="data.about.description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>About Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Detailed description of your service..."
                                                className="min-h-32"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="data.about.highlight"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Highlight Text</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Key highlight or benefit" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="data.about.imageStorageId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Service Image</FormLabel>
                                        <FormControl>
                                            <ImageUpload
                                                value={field.value}
                                                onChange={(storageId, imageUrl) => {
                                                    field.onChange(storageId);
                                                    form.setValue("data.about.image", imageUrl);
                                                }}
                                                onRemove={() => {
                                                    field.onChange("");
                                                    form.setValue("data.about.image", "");
                                                }}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Upload an image to display in the about section of your service.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                    </Card>

                    {/* Process Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Process Section</CardTitle>
                            <CardDescription>
                                Optional: Describe the steps involved in your service.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <FormField
                                control={form.control}
                                name="data.process.title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Process Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Our Process" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-medium">Process Steps</h4>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => appendStep({ title: "", description: "" })}
                                    >
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add Step
                                    </Button>
                                </div>

                                {stepFields.map((field, index) => (
                                    <div key={field.id} className="flex gap-4 items-start">
                                        <div className="flex-1 space-y-4">
                                            <FormField
                                                control={form.control}
                                                name={`data.process.steps.${index}.title`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Step {index + 1} Title</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Step title" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`data.process.steps.${index}.description`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Step {index + 1} Description</FormLabel>
                                                        <FormControl>
                                                            <Textarea placeholder="Step description" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => removeStep(index)}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Benefits Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Benefits Section</CardTitle>
                            <CardDescription>
                                Optional: List the benefits of your service.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <FormField
                                control={form.control}
                                name="data.benefits.title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Benefits Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Benefits" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-medium">Benefit Items</h4>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => appendBenefit("")}
                                    >
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add Benefit
                                    </Button>
                                </div>

                                {benefitFields.map((field, index) => (
                                    <div key={field.id} className="flex gap-4 items-center">
                                        <FormField
                                            control={form.control}
                                            name={`data.benefits.items.${index}`}
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormControl>
                                                        <Input placeholder="Benefit item" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => removeBenefit(index)}
                                        >
                                            <X className="h-4 w-4" />
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
                                Optional: Provide post-treatment care information.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="data.postCare.subtitle"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Post Care Subtitle</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Post Care" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="data.postCare.title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Post Care Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Post Treatment Care" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            {/* Downtime */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-medium">Downtime Information</h4>
                                <FormField
                                    control={form.control}
                                    name="data.postCare.downtime.title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Downtime Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Downtime" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h5 className="text-sm font-medium">Downtime Items</h5>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => appendDowntime("")}
                                        >
                                            <Plus className="h-4 w-4 mr-2" />
                                            Add Item
                                        </Button>
                                    </div>

                                    {downtimeFields.map((field, index) => (
                                        <div key={field.id} className="flex gap-4 items-center">
                                            <FormField
                                                control={form.control}
                                                name={`data.postCare.downtime.items.${index}`}
                                                render={({ field }) => (
                                                    <FormItem className="flex-1">
                                                        <FormControl>
                                                            <Input placeholder="Downtime item" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                onClick={() => removeDowntime(index)}
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Separator />

                            {/* Post Care */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-medium">Post Care Information</h4>
                                <FormField
                                    control={form.control}
                                    name="data.postCare.postCare.title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Post Care Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Post Care Information" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h5 className="text-sm font-medium">Post Care Items</h5>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => appendPostCare("")}
                                        >
                                            <Plus className="h-4 w-4 mr-2" />
                                            Add Item
                                        </Button>
                                    </div>

                                    {postCareFields.map((field, index) => (
                                        <div key={field.id} className="flex gap-4 items-center">
                                            <FormField
                                                control={form.control}
                                                name={`data.postCare.postCare.items.${index}`}
                                                render={({ field }) => (
                                                    <FormItem className="flex-1">
                                                        <FormControl>
                                                            <Input placeholder="Post care item" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                onClick={() => removePostCare(index)}
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Signs & Symptoms Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Signs & Symptoms Section</CardTitle>
                            <CardDescription>
                                Optional: List the signs and symptoms that indicate this treatment is needed.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="data.signsSymptoms.subtitle"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Signs & Symptoms Subtitle</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Signs & Symptoms" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="data.signsSymptoms.title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Signs & Symptoms Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="When You Need This Treatment" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-medium">Signs & Symptoms Items</h4>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => appendSignsSymptoms("")}
                                    >
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add Item
                                    </Button>
                                </div>

                                {signsSymptomsFields.map((field, index) => (
                                    <div key={field.id} className="flex gap-4 items-center">
                                        <FormField
                                            control={form.control}
                                            name={`data.signsSymptoms.items.${index}`}
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormControl>
                                                        <Input placeholder="Signs & symptoms item" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => removeSignsSymptoms(index)}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Treatments Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Treatments Section</CardTitle>
                            <CardDescription>
                                Optional: List the different types of treatments available.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="data.treatments.subtitle"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Treatments Subtitle</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Treatments" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="data.treatments.title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Treatments Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Types of Treatments" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-medium">Treatment Items</h4>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => appendTreatments({ title: "", description: "" })}
                                    >
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add Treatment
                                    </Button>
                                </div>

                                {treatmentsFields.map((field, index) => (
                                    <div key={field.id} className="space-y-2 p-4 border rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <h5 className="text-sm font-medium">Treatment {index + 1}</h5>
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                onClick={() => removeTreatments(index)}
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="space-y-2">
                                            <FormField
                                                control={form.control}
                                                name={`data.treatments.items.${index}.title`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input placeholder="Treatment title" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`data.treatments.items.${index}.description`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <Input placeholder="Treatment description" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Transformations Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Transformations Section</CardTitle>
                            <CardDescription>
                                Optional: Showcase before and after transformations.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="data.transformations.subtitle"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Transformations Subtitle</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Transformations" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="data.transformations.title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Transformations Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Before & After Transformations" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="data.transformations.description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Transformations Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Describe the transformations..."
                                                className="min-h-24"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-medium">Transformation Images</h4>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => appendTransformationImage({ src: "", alt: "" })}
                                    >
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add Image
                                    </Button>
                                </div>

                                {transformationImageFields.map((field, index) => (
                                    <div key={field.id} className="flex gap-4 items-start">
                                        <div className="flex-1 space-y-4">
                                            <FormField
                                                control={form.control}
                                                name={`data.transformations.images.${index}.src`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Image URL {index + 1}</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Image URL" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`data.transformations.images.${index}.alt`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Alt Text {index + 1}</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Image alt text" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => removeTransformationImage(index)}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Testimonials Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Testimonials Section</CardTitle>
                            <CardDescription>
                                Optional: Customer reviews and testimonials.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="data.testimonials.subtitle"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Testimonials Subtitle</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Testimonials" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="data.testimonials.title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Testimonials Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="What Our Clients Say" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-medium">Customer Testimonials</h4>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => appendTestimonial("")}
                                    >
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add Testimonial
                                    </Button>
                                </div>

                                {testimonialFields.map((field, index) => (
                                    <div key={field.id} className="border rounded-lg p-4 space-y-4">
                                        <div className="flex justify-between items-center">
                                            <h5 className="font-medium">Testimonial {index + 1}</h5>
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                onClick={() => removeTestimonial(index)}
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <FormField
                                            control={form.control}
                                            name={`data.testimonials.items.${index}`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Testimonial Text</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Customer testimonial..."
                                                            className="min-h-20"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Who Benefits Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Who Benefits Section</CardTitle>
                            <CardDescription>
                                Optional: Define who can benefit from this service.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <FormField
                                control={form.control}
                                name="data.whoBenefits.title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Who Benefits Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Who Can Benefit" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-medium">Benefit Items</h4>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => appendWhoBenefits("")}
                                    >
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add Item
                                    </Button>
                                </div>

                                {whoBenefitsFields.map((field, index) => (
                                    <div key={field.id} className="flex gap-4 items-center">
                                        <FormField
                                            control={form.control}
                                            name={`data.whoBenefits.items.${index}`}
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormLabel className="sr-only">Benefit Item {index + 1}</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Who can benefit..." {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => removeWhoBenefits(index)}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* FAQ Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>FAQ Section</CardTitle>
                            <CardDescription>
                                Optional: Add frequently asked questions about your service.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="data.faq.title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>FAQ Title</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Frequently Asked Questions" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="data.faq.subtitle"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>FAQ Subtitle</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Get answers to common questions" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h4 className="text-sm font-medium">FAQ Questions</h4>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => appendFaq({ question: "", answer: "" })}
                                    >
                                        <Plus className="h-4 w-4 mr-2" />
                                        Add FAQ
                                    </Button>
                                </div>

                                {faqFields.map((field, index) => (
                                    <div key={field.id} className="flex gap-4 items-start">
                                        <div className="flex-1 space-y-4">
                                            <FormField
                                                control={form.control}
                                                name={`data.faq.questions.${index}.question`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Question {index + 1}</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Question" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`data.faq.questions.${index}.answer`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Answer {index + 1}</FormLabel>
                                                        <FormControl>
                                                            <Textarea placeholder="Answer" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => removeFaq(index)}
                                        >
                                            <X className="h-4 w-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Submit Button */}
                    <div className="flex gap-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => router.push("/manage-services")}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                    Creating Service...
                                </>
                            ) : (
                                "Create Service"
                            )}
                        </Button>
                    </div>
                </form>
            </Form>
            </div>
        </div>
    );
}
"use client";

import React, { useState } from "react";
import { useForm, type FieldValues, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

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
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
    ArrowLeft,
    Loader2,
    AlertCircle,
    CheckCircle2,
    Hash,
    Type,
    Tag,
    Shield
} from "lucide-react";

// Import enhanced validation and security
import {
    validateRateLimit,
    securityValidation,
    sanitizeInput,
    validationUtils
} from "@/lib/validation";

// Enhanced form validation schema with security checks
const categoryFormSchema = z.object({
    name: z.string()
        .min(1, "Category name is required")
        .max(50, "Name must be 50 characters or less")
        .refine((val) => securityValidation.isSecure(val), {
            message: "Category name contains potentially unsafe content"
        })
        .transform((val) => sanitizeInput.text(val)),
    type: z.enum(["skin", "hair", "laser"]),
    slug: z.string()
        .min(1, "Slug is required")
        .regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens")
        .max(50, "Slug must be 50 characters or less")
        .refine((val) => securityValidation.isSecure(val), {
            message: "Slug contains potentially unsafe content"
        }),
    order: z.number()
        .min(0, "Order must be 0 or greater")
        .max(999, "Order must be less than 1000"),
    isActive: z.boolean(),
});

type CategoryFormData = z.infer<typeof categoryFormSchema>;

export default function AddCategoryPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    // Get existing categories to suggest next order number
    const existingCategories = useQuery(api.serviceCategories.queries.getAllServiceCategories);

    // Mutation
    const createCategory = useMutation(api.serviceCategories.mutations.createServiceCategory);

    const form: UseFormReturn<CategoryFormData> = useForm<CategoryFormData>({
        resolver: zodResolver(categoryFormSchema),
        mode: "onChange" as const,
        defaultValues: {
            name: "",
            type: undefined,
            slug: "",
            order: 0,
            isActive: true,
        },
    });

    // Auto-generate slug from name
    const watchName = form.watch("name");
    const watchType = form.watch("type");

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

    // Suggest next order number based on existing categories of the same type
    React.useEffect(() => {
        if (watchType && existingCategories) {
            const categoriesOfSameType = existingCategories.filter(cat => cat.type === watchType);
            const maxOrder = categoriesOfSameType.length > 0
                ? Math.max(...categoriesOfSameType.map(cat => cat.order))
                : -1;
            form.setValue("order", maxOrder + 1);
        }
    }, [watchType, existingCategories, form]);

    const onSubmit = async (data: CategoryFormData) => {
        try {
            setIsSubmitting(true);
            setSubmitError(null);

            // Rate limiting check
            if (!validateRateLimit('create_category', 5, 60000)) {
                setSubmitError("Too many category creation attempts. Please wait a moment before trying again.");
                toast.error("Rate limit exceeded. Please wait before creating another category.");
                return;
            }

            // Additional security validation
            if (!securityValidation.isSecure(data.name) || !securityValidation.isSecure(data.slug)) {
                setSubmitError("Invalid input detected. Please check your category name and slug for potentially unsafe content.");
                toast.error("Security validation failed");
                return;
            }

            // Check for duplicate slug
            if (existingCategories?.some(cat => cat.slug === data.slug)) {
                setSubmitError("A category with this slug already exists. Please use a different name or modify the slug.");
                return;
            }

            // Sanitize data before submission
            const sanitizedData = {
                ...data,
                name: sanitizeInput.text(data.name),
                slug: data.slug.toLowerCase().trim()
            };

            await createCategory(sanitizedData);

            toast.success(`Category "${sanitizedData.name}" created successfully!`);
            router.push("/manage-services/categories");
        } catch (error) {
            console.error("Create category error:", error);
            setSubmitError("Failed to create category. Please try again.");
            toast.error("Failed to create category");
        } finally {
            setIsSubmitting(false);
        }
    };

    const getTypeDescription = (type: string) => {
        switch (type) {
            case "skin":
                return "Categories for skin care treatments and procedures";
            case "hair":
                return "Categories for hair care and hair restoration services";
            case "laser":
                return "Categories for laser treatments and procedures";
            default:
                return "";
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case "skin":
                return "bg-blue-100 text-blue-800";
            case "hair":
                return "bg-green-100 text-green-800";
            case "laser":
                return "bg-purple-100 text-purple-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="container mx-auto max-w-5xl py-8 space-y-8">
            <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tight">Add New Category</h1>
                <p className="text-muted-foreground">
                    Create a new service category to organize your services.
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
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Tag className="h-5 w-5" />
                                Category Information
                                <Badge variant="outline" className="ml-auto flex items-center gap-1">
                                    <Shield className="h-3 w-3" />
                                    Enhanced Security
                                </Badge>
                            </CardTitle>
                            <CardDescription>
                                Enter the basic information for your new category. All inputs are validated and sanitized for security.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="flex items-center gap-2">
                                                <Type className="h-4 w-4" />
                                                Category Name *
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="e.g., Acne Treatment"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                A descriptive name for this category
                                            </FormDescription>
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
                                                            <Badge variant="secondary" className={getTypeColor("skin")}>
                                                                Skin
                                                            </Badge>
                                                            Skin Care Services
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="hair">
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="secondary" className={getTypeColor("hair")}>
                                                                Hair
                                                            </Badge>
                                                            Hair Care Services
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="laser">
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="secondary" className={getTypeColor("laser")}>
                                                                Laser
                                                            </Badge>
                                                            Laser Treatments
                                                        </div>
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            {watchType && (
                                                <FormDescription>
                                                    {getTypeDescription(watchType)}
                                                </FormDescription>
                                            )}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="slug"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="flex items-center gap-2">
                                                <Hash className="h-4 w-4" />
                                                URL Slug *
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="acne-treatment"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                Auto-generated from name. Used in URLs and navigation.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="order"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Display Order</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    min="0"
                                                    max="999"
                                                    {...field}
                                                    onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                                />
                                            </FormControl>
                                            <FormDescription>
                                                Order in which this category appears in navigation (0 = first)
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="isActive"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                        <div className="space-y-0.5">
                                            <FormLabel className="text-base">
                                                Active Status
                                            </FormLabel>
                                            <FormDescription>
                                                Whether this category is visible in the navigation and available for use.
                                            </FormDescription>
                                        </div>
                                        <FormControl>
                                            <Switch
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                    </Card>

                    {/* Preview */}
                    {watchName && watchType && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                                    Preview
                                </CardTitle>
                                <CardDescription>
                                    This is how your category will appear in the system.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4 p-4 border rounded-lg">
                                    <Badge variant="secondary" className={getTypeColor(watchType)}>
                                        {watchType.charAt(0).toUpperCase() + watchType.slice(1)}
                                    </Badge>
                                    <div>
                                        <div className="font-medium">{watchName}</div>
                                        <div className="text-sm text-muted-foreground">/{form.watch("slug")}</div>
                                    </div>
                                    <div className="ml-auto">
                                        <Badge variant="outline">Order: {form.watch("order")}</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    <div className="flex items-center gap-4">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="min-w-[120px]"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                    Creating...
                                </>
                            ) : (
                                "Create Category"
                            )}
                        </Button>
                        <Link href="/manage-services/categories">
                            <Button variant="outline" type="button">
                                Cancel
                            </Button>
                        </Link>
                    </div>
                </form>
            </Form>
        </div>
    );
}
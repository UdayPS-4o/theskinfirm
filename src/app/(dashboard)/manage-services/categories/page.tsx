"use client";

import React, { useState, useMemo, useCallback } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import Link from "next/link";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { 
    Plus, 
    Edit, 
    Trash2, 
    Eye, 
    EyeOff, 
    ArrowUp, 
    ArrowDown,
    Loader2 
} from "lucide-react";

// Import new utilities
import { withErrorBoundary } from "@/components/shared/ErrorBoundary";
import { 
    CategoryManagementSkeleton, 
    ErrorState, 
    EmptyState,
    ButtonLoading,
    LoadingSpinner
} from "@/components/shared/LoadingStates";
import { logger, useLogger } from "@/lib/logger";
import { withPerformanceOptimization, usePerformanceMonitor } from "@/lib/performance";
import type { ServiceCategory, ServiceCategoryStats } from "@/types";

// Optimized component with error boundary and performance monitoring
const CategoriesPageComponent = React.memo(() => {
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    // Performance monitoring
    const { logUserAction, logError } = useLogger();
    const performanceMetrics = usePerformanceMonitor();
    
    // Fetch all categories with error handling
    const categories = useQuery(api.serviceCategories.queries.getAllServiceCategories);
    
    // Mutations
    const deleteCategory = useMutation(api.serviceCategories.mutations.deleteServiceCategory);
    const updateCategory = useMutation(api.serviceCategories.mutations.updateServiceCategory);

    // Optimized handlers with logging and error handling
    const handleDelete = useCallback(async (id: string, name: string) => {
        try {
            setDeletingId(id);
            setError(null);
            
            logUserAction('delete_category', 'CategoriesPage', { categoryId: id, categoryName: name });
            logger.startTimer(`delete_category_${id}`);
            
            await deleteCategory({ id: id as any });
            
            logger.endTimer(`delete_category_${id}`);
            toast.success(`Category "${name}" deleted successfully`);
            
            logger.info('Category deleted successfully', { categoryId: id, categoryName: name });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to delete category';
            setError(errorMessage);
            toast.error(errorMessage);
            logError(error as Error, { component: 'CategoriesPage', categoryId: id, categoryName: name, action: 'delete' });
        } finally {
            setDeletingId(null);
        }
    }, [deleteCategory, logUserAction, logError]);

    const handleToggleActive = useCallback(async (id: string, currentStatus: boolean, name: string) => {
        try {
            setError(null);
            const newStatus = !currentStatus;
            
            logUserAction('toggle_category_status', 'CategoriesPage', { 
                categoryId: id, 
                categoryName: name, 
                newStatus 
            });
            
            logger.startTimer(`toggle_category_${id}`);
            
            await updateCategory({ 
                id: id as any, 
                isActive: newStatus 
            });
            
            logger.endTimer(`toggle_category_${id}`);
            toast.success(`Category "${name}" ${newStatus ? 'activated' : 'deactivated'}`);
            
            logger.info('Category status toggled', { 
                categoryId: id, 
                categoryName: name, 
                newStatus 
            });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to update category status';
            setError(errorMessage);
            toast.error(errorMessage);
            logError(error as Error, { 
                component: 'CategoriesPage',
                categoryId: id, 
                categoryName: name, 
                action: 'toggle_status' 
            });
        }
    }, [updateCategory, logUserAction, logError]);

    const getTypeColor = (type: string) => {
        switch (type) {
            case "skin":
                return "bg-blue-100 text-blue-800 hover:bg-blue-200";
            case "hair":
                return "bg-green-100 text-green-800 hover:bg-green-200";
            case "laser":
                return "bg-purple-100 text-purple-800 hover:bg-purple-200";
            default:
                return "bg-gray-100 text-gray-800 hover:bg-gray-200";
        }
    };

    const sortedCategories = categories?.sort((a, b) => {
        // Sort by type first, then by order
        if (a.type !== b.type) {
            return a.type.localeCompare(b.type);
        }
        return a.order - b.order;
    });

    // Handle error state
    if (error) {
        return (
            <ErrorState 
                message={error}
                onRetry={() => window.location.reload()}
                title="Failed to load categories"
            />
        );
    }

    // Handle loading state
    if (categories === undefined) {
        return <CategoryManagementSkeleton />;
    }

    // Handle empty state
    if (categories.length === 0) {
        return (
            <EmptyState
                title="No categories found"
                message="Get started by creating your first service category."
                action={
                    <Link href="/manage-services/categories/add">
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Category
                        </Button>
                    </Link>
                }
                icon={<Plus className="h-8 w-8" />}
            />
        );
    }

    return (
        <div className="container mx-auto max-w-6xl py-8 space-y-8">
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Service Categories</h1>
                    <p className="text-muted-foreground">
                        Manage service categories for organizing your services.
                    </p>
                </div>
                <Link href="/manage-services/categories/add">
                    <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Category
                    </Button>
                </Link>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Categories</CardTitle>
                    <CardDescription>
                        View and manage all service categories. Categories help organize services in the navigation.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Slug</TableHead>
                                    <TableHead>Order</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {sortedCategories?.map((category) => (
                                    <TableRow key={category._id}>
                                        <TableCell className="font-medium">
                                            {category.name}
                                        </TableCell>
                                        <TableCell>
                                            <Badge 
                                                variant="secondary" 
                                                className={getTypeColor(category.type)}
                                            >
                                                {category.type.charAt(0).toUpperCase() + category.type.slice(1)}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="font-mono text-sm">
                                            {category.slug}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline">
                                                {category.order}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                {category.isActive ? (
                                                    <Eye className="h-4 w-4 text-green-600" />
                                                ) : (
                                                    <EyeOff className="h-4 w-4 text-gray-400" />
                                                )}
                                                <span className={category.isActive ? "text-green-600" : "text-gray-400"}>
                                                    {category.isActive ? "Active" : "Inactive"}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleToggleActive(
                                                        category._id, 
                                                        category.isActive, 
                                                        category.name
                                                    )}
                                                >
                                                    {category.isActive ? (
                                                        <EyeOff className="h-4 w-4" />
                                                    ) : (
                                                        <Eye className="h-4 w-4" />
                                                    )}
                                                </Button>
                                                
                                                <Link href={`/manage-services/categories/edit/${category._id}`}>
                                                    <Button variant="ghost" size="sm">
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                </Link>

                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button 
                                                            variant="ghost" 
                                                            size="sm"
                                                            disabled={deletingId === category._id}
                                                        >
                                                            {deletingId === category._id ? (
                                                                <Loader2 className="h-4 w-4 animate-spin" />
                                                            ) : (
                                                                <Trash2 className="h-4 w-4" />
                                                            )}
                                                        </Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Delete Category</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                Are you sure you want to delete the category &quot;{category.name}&quot;? 
                                                                This action cannot be undone and may affect services using this category.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                            <AlertDialogAction
                                                                onClick={() => handleDelete(category._id, category.name)}
                                                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                                            >
                                                                Delete
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                </CardContent>
            </Card>

            {/* Quick Stats */}
            {categories && categories.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card>
                        <CardContent className="pt-6">
                            <div className="text-2xl font-bold">{categories.length}</div>
                            <p className="text-xs text-muted-foreground">Total Categories</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="text-2xl font-bold text-green-600">
                                {categories.filter(c => c.isActive).length}
                            </div>
                            <p className="text-xs text-muted-foreground">Active Categories</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="text-2xl font-bold text-blue-600">
                                {categories.filter(c => c.type === "skin").length}
                            </div>
                            <p className="text-xs text-muted-foreground">Skin Categories</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="pt-6">
                            <div className="text-2xl font-bold text-purple-600">
                                {categories.filter(c => c.type === "laser").length}
                            </div>
                            <p className="text-xs text-muted-foreground">Laser Categories</p>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
});

CategoriesPageComponent.displayName = 'CategoriesPageComponent';

// Export the component with error boundary and performance optimization
const CategoriesPage = withErrorBoundary(
    withPerformanceOptimization(CategoriesPageComponent),
    <ErrorState
        onRetry={() => window.location.reload()}
        title="Categories Page Error"
        message="Something went wrong while loading the categories page."
    />
);

export default CategoriesPage;
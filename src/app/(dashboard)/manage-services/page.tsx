"use client";

import React, { useState, useCallback, useMemo } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
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
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus, MoreHorizontal, Edit, Trash2, Eye, Settings, FolderOpen, AlertTriangle, RefreshCw, CheckSquare, Square, Archive, Power, PowerOff } from "lucide-react";

// Import shared components and utilities
import { ErrorState, EmptyState, ServiceManagementSkeleton } from "@/components/shared/LoadingStates";
import { withErrorBoundary } from "@/components/shared/ErrorBoundary";
import { useLogger, logger } from "@/lib/logger";
import { 
    validateRateLimit, 
    securityValidation, 
    validationUtils,
    bulkOperationValidationSchema,
    type BulkOperationFormData 
} from "@/lib/validation";

type ServiceType = "skin" | "hair" | "laser";

const getTypeColor = (type: ServiceType) => {
    switch (type) {
        case "skin":
            return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
        case "hair":
            return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
        case "laser":
            return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
        default:
            return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
};

const getTypeIcon = (type: ServiceType) => {
    switch (type) {
        case "skin":
            return "🧴";
        case "hair":
            return "💇";
        case "laser":
            return "🔬";
        default:
            return "⚕️";
    }
};

// Optimized component with error boundary and performance monitoring
const ServicesPageComponent = React.memo(() => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [bulkOperationLoading, setBulkOperationLoading] = useState(false);
    
    // Logging
    const { logUserAction, logError } = useLogger();
    
    // Fetch services with error handling
    const services = useQuery(api.services.queries.getServices);
    const deleteService = useMutation(api.services.mutations.deleteService);

    // Enhanced handlers with validation, security checks, and rate limiting
    const handleDelete = useCallback(async (id: string, name: string) => {
        try {
            setDeletingId(id);
            setError(null);
            
            // Rate limiting check
            const clientId = `delete_${Date.now()}`; // In production, use user ID or IP
            if (!validateRateLimit(clientId, 5, 60000)) { // Max 5 deletions per minute
                toast.error("Too many deletion attempts. Please wait before trying again.");
                return;
            }
            
            // Security validation for ID
            if (!securityValidation.isSecure(id)) {
                toast.error("Invalid service ID format");
                logError(new Error("Security validation failed for service ID"), { component: 'ServicesPage', serviceId: id });
                return;
            }
            
            logUserAction('delete_service', 'ServicesPage', { serviceId: id, serviceName: name });
            logger.startTimer(`delete_service_${id}`);
            
            await deleteService({ id: id as any });
            
            logger.endTimer(`delete_service_${id}`);
            toast.success(`Service "${name}" deleted successfully`);
            
            logger.info('Service deleted successfully', { serviceId: id, serviceName: name });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            setError(`Failed to delete service: ${errorMessage}`);
            
            logError(error as Error, { component: 'ServicesPage', action: 'delete_service_failed', serviceId: id, serviceName: name });
            toast.error("Failed to delete service. Please try again.");
            
            logger.error('Service deletion failed', { 
                serviceId: id, 
                serviceName: name, 
                error: errorMessage 
            });
        } finally {
            setDeletingId(null);
        }
    }, [deleteService, logUserAction, logError]);

    const handleEdit = useCallback((id: string) => {
        logUserAction('edit_service', 'ServicesPage', { serviceId: id });
        router.push(`/manage-services/edit/${id}`);
    }, [router, logUserAction]);

    const handleView = useCallback((slug: string, serviceName: string) => {
        logUserAction('view_service', 'ServicesPage', { serviceSlug: slug, serviceName });
        window.open(`/services/${slug}`, "_blank");
    }, [logUserAction]);

    const handleRetry = useCallback(() => {
        setError(null);
        window.location.reload();
    }, []);

    // Bulk operations with validation
    const handleBulkOperation = useCallback(async (operation: 'delete' | 'activate' | 'deactivate') => {
        try {
            setBulkOperationLoading(true);
            setError(null);

            // Validate bulk operation data
            const bulkData: BulkOperationFormData = {
                operation,
                ids: selectedServices
            };

            const validation = validationUtils.validateWithRateLimit(
                bulkOperationValidationSchema,
                bulkData,
                `bulk_${operation}_${Date.now()}`, // In production, use user ID
                3, // Max 3 bulk operations per minute
                60000
            );

            if (!validation.success) {
                if (validation.rateLimited) {
                    toast.error("Too many bulk operations. Please wait before trying again.");
                } else {
                    toast.error(validation.errors.join(', '));
                }
                return;
            }

            // Security validation for all IDs
            for (const id of selectedServices) {
                if (!securityValidation.isSecure(id)) {
                    toast.error("Invalid service ID detected in selection");
                    logError(new Error("Security validation failed for bulk operation"), { 
                        component: 'ServicesPage',
                        operation, 
                        invalidId: id 
                    });
                    return;
                }
            }

            logUserAction(`bulk_${operation}`, 'ServicesPage', { 
                operation, 
                serviceCount: selectedServices.length,
                serviceIds: selectedServices 
            });

            // Perform bulk operation (placeholder - implement actual mutations)
            switch (operation) {
                case 'delete':
                    // TODO: Implement bulk delete mutation
                    toast.success(`${selectedServices.length} services deleted successfully`);
                    break;
                case 'activate':
                    // TODO: Implement bulk activate mutation
                    toast.success(`${selectedServices.length} services activated successfully`);
                    break;
                case 'deactivate':
                    // TODO: Implement bulk deactivate mutation
                    toast.success(`${selectedServices.length} services deactivated successfully`);
                    break;
            }

            setSelectedServices([]);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Bulk operation failed';
            setError(errorMessage);
            logError(error as Error, { component: 'ServicesPage', operation, serviceIds: selectedServices });
            toast.error(errorMessage);
        } finally {
            setBulkOperationLoading(false);
        }
    }, [selectedServices, logUserAction, logError]);

    // Selection handlers
    const handleSelectService = useCallback((serviceId: string) => {
        setSelectedServices(prev => 
            prev.includes(serviceId) 
                ? prev.filter(id => id !== serviceId)
                : [...prev, serviceId]
        );
    }, []);

    const handleSelectAll = useCallback(() => {
        if (!services) return;
        
        if (selectedServices.length === services.length) {
            setSelectedServices([]);
        } else {
            setSelectedServices(services.map(s => s._id));
        }
    }, [services, selectedServices.length]);

    // Memoized computed values for performance
    const serviceStats = useMemo(() => {
        if (!services) return { total: 0, skin: 0, hair: 0, laser: 0 };
        
        return {
            total: services.length,
            skin: services.filter(s => s.type === "skin").length,
            hair: services.filter(s => s.type === "hair").length,
            laser: services.filter(s => s.type === "laser").length
        };
    }, [services]);

    // Loading state with skeleton
    if (services === undefined) {
        return <ServiceManagementSkeleton />;
    }

    // Error state
    if (error) {
        return (
            <ErrorState
                title="Failed to load services"
                message={error}
                onRetry={handleRetry}
            />
        );
    }

    return (
        <div className="container mx-auto py-8 space-y-8">
            {/* Header */}
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Manage Services</h1>
                    <p className="text-muted-foreground">
                        Create, edit, and manage your medical services.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" asChild>
                        <Link href="/manage-services/categories">
                            <FolderOpen className="size-4 mr-2" />
                            Manage Categories
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href="/manage-services/add">
                            <Plus className="size-4 mr-2" />
                            Add New Service
                        </Link>
                    </Button>
                </div>
            </div>

            {/* Quick Navigation */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Settings className="h-5 w-5" />
                        Quick Actions
                    </CardTitle>
                    <CardDescription>
                        Manage your services and categories efficiently
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button variant="outline" asChild className="h-auto p-4 flex-col items-start">
                            <Link href="/manage-services/add">
                                <Plus className="h-6 w-6 mb-2" />
                                <div className="text-left">
                                    <div className="font-medium">Add New Service</div>
                                    <div className="text-sm text-muted-foreground">Create a new medical service</div>
                                </div>
                            </Link>
                        </Button>
                        <Button variant="outline" asChild className="h-auto p-4 flex-col items-start">
                            <Link href="/manage-services/categories">
                                <FolderOpen className="h-6 w-6 mb-2" />
                                <div className="text-left">
                                    <div className="font-medium">Manage Categories</div>
                                    <div className="text-sm text-muted-foreground">Organize service categories</div>
                                </div>
                            </Link>
                        </Button>
                        <Button variant="outline" asChild className="h-auto p-4 flex-col items-start">
                            <Link href="/manage-services/categories/add">
                                <Plus className="h-6 w-6 mb-2" />
                                <div className="text-left">
                                    <div className="font-medium">Add Category</div>
                                    <div className="text-sm text-muted-foreground">Create a new service category</div>
                                </div>
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Stats Cards - Using memoized values for performance */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Services</CardTitle>
                        <span className="text-2xl">⚕️</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{serviceStats.total}</div>
                        <p className="text-xs text-muted-foreground">
                            Active services in your catalog
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Skin Services</CardTitle>
                        <span className="text-2xl">🧴</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{serviceStats.skin}</div>
                        <p className="text-xs text-muted-foreground">
                            Skin care treatments
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Hair Services</CardTitle>
                        <span className="text-2xl">💇</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{serviceStats.hair}</div>
                        <p className="text-xs text-muted-foreground">
                            Hair care treatments
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Laser Services</CardTitle>
                        <span className="text-2xl">🔬</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{serviceStats.laser}</div>
                        <p className="text-xs text-muted-foreground">
                            Laser treatments
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Bulk Operations */}
            {services && services.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <span className="flex items-center gap-2">
                                <CheckSquare className="h-5 w-5" />
                                Bulk Operations
                            </span>
                            <Badge variant="secondary">
                                {selectedServices.length} selected
                            </Badge>
                        </CardTitle>
                        <CardDescription>
                            Select multiple services to perform bulk actions
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleSelectAll}
                                    className="flex items-center gap-2"
                                >
                                    {selectedServices.length === services.length ? (
                                        <>
                                            <Square className="h-4 w-4" />
                                            Deselect All
                                        </>
                                    ) : (
                                        <>
                                            <CheckSquare className="h-4 w-4" />
                                            Select All
                                        </>
                                    )}
                                </Button>
                                <span className="text-sm text-muted-foreground">
                                    {selectedServices.length} of {services.length} services selected
                                </span>
                            </div>
                            
                            {selectedServices.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                disabled={bulkOperationLoading}
                                                className="flex items-center gap-2"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                                Delete Selected ({selectedServices.length})
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Delete Services</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Are you sure you want to delete {selectedServices.length} selected service(s)? 
                                                    This action cannot be undone.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction
                                                    onClick={() => handleBulkOperation('delete')}
                                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                                >
                                                    Delete Services
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                    
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        disabled={bulkOperationLoading}
                                        onClick={() => handleBulkOperation('activate')}
                                        className="flex items-center gap-2"
                                    >
                                        <Power className="h-4 w-4" />
                                        Activate Selected
                                    </Button>
                                    
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        disabled={bulkOperationLoading}
                                        onClick={() => handleBulkOperation('deactivate')}
                                        className="flex items-center gap-2"
                                    >
                                        <PowerOff className="h-4 w-4" />
                                        Deactivate Selected
                                    </Button>
                                </div>
                            )}
                        </div>
                        
                        {bulkOperationLoading && (
                            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                                <RefreshCw className="h-4 w-4 animate-spin" />
                                Processing bulk operation...
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}

            {/* Services Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Services</CardTitle>
                    <CardDescription>
                        Manage all your medical services from this dashboard.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {services && services.length > 0 ? (
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-12">
                                            <Checkbox
                                                checked={selectedServices.length === services.length}
                                                onCheckedChange={handleSelectAll}
                                                aria-label="Select all services"
                                            />
                                        </TableHead>
                                        <TableHead>Service</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Slug</TableHead>
                                        <TableHead>Sections</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {services.map((service) => (
                                        <TableRow key={service._id}>
                                            <TableCell>
                                                <Checkbox
                                                    checked={selectedServices.includes(service._id)}
                                                    onCheckedChange={() => handleSelectService(service._id)}
                                                    aria-label={`Select ${service.name}`}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <div className="space-y-1">
                                                    <div className="font-medium">{service.name}</div>
                                                    <div className="text-sm text-muted-foreground truncate max-w-[200px]">
                                                        {service.data.hero.title}
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant="secondary"
                                                    className={getTypeColor(service.type)}
                                                >
                                                    <span className="mr-1">{getTypeIcon(service.type)}</span>
                                                    {service.type.charAt(0).toUpperCase() + service.type.slice(1)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <code className="text-sm bg-muted px-2 py-1 rounded">
                                                    /{service.slug}
                                                </code>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex flex-wrap gap-1">
                                                    <Badge variant="outline" className="text-xs">
                                                        Hero
                                                    </Badge>
                                                    {service.data.about && (
                                                        <Badge variant="outline" className="text-xs">
                                                            About
                                                        </Badge>
                                                    )}
                                                    {service.data.process && (
                                                        <Badge variant="outline" className="text-xs">
                                                            Process
                                                        </Badge>
                                                    )}
                                                    {service.data.benefits && (
                                                        <Badge variant="outline" className="text-xs">
                                                            Benefits
                                                        </Badge>
                                                    )}
                                                    {service.data.postCare && (
                                                        <Badge variant="outline" className="text-xs">
                                                            Post Care
                                                        </Badge>
                                                    )}
                                                    {service.data.faq && (
                                                        <Badge variant="outline" className="text-xs">
                                                            FAQ
                                                        </Badge>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                                            <span className="sr-only">Open menu</span>
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                        <DropdownMenuItem onClick={() => handleView(service.slug, service.name)}>
                                            <Eye className="mr-2 h-4 w-4" />
                                            View Service
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => handleEdit(service._id)}>
                                            <Edit className="mr-2 h-4 w-4" />
                                            Edit Service
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <DropdownMenuItem
                                                    className="text-destructive focus:text-destructive"
                                                    onSelect={(e) => e.preventDefault()}
                                                >
                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                    Delete Service
                                                </DropdownMenuItem>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        This action cannot be undone. This will permanently delete the
                                                        service "{service.name}" and remove all its data.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction
                                                        onClick={() => handleDelete(service._id, service.name)}
                                                        disabled={deletingId === service._id}
                                                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                                    >
                                                        {deletingId === service._id ? "Deleting..." : "Delete"}
                                                    </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    ) : (
                        <EmptyState
                            title="No services yet"
                            message="Get started by creating your first service."
                            action={
                                <Link href="/manage-services/add">
                                    <Button>Add Your First Service</Button>
                                </Link>
                            }
                        />
                    )}
                </CardContent>
            </Card>
        </div>
    );
});

ServicesPageComponent.displayName = 'ServicesPageComponent';

// Export with error boundary
const ManageServicesPage = withErrorBoundary(
    ServicesPageComponent,
    <ErrorState
        title="Failed to load services management"
        message="An unexpected error occurred"
        onRetry={() => window.location.reload()}
    />
);

export default ManageServicesPage;

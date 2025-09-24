"use client";

import React, { useState, useCallback, useRef } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
    Upload, 
    X, 
    Image as ImageIcon, 
    Loader2, 
    CheckCircle, 
    AlertCircle,
    Camera
} from "lucide-react";
import { toast } from "sonner";

interface ImageUploadProps {
    value?: string; // Current image URL or storage ID
    onChange: (storageId: Id<"_storage"> | null, imageUrl?: string) => void;
    onRemove?: () => void;
    onError?: (error: string) => void;
    disabled?: boolean;
    className?: string;
    maxSizeInMB?: number;
    acceptedTypes?: string[];
    placeholder?: string;
}

interface UploadState {
    isUploading: boolean;
    progress: number;
    error: string | null;
    success: boolean;
}

export function ImageUpload({
    value,
    onChange,
    onRemove,
    onError,
    disabled = false,
    className,
    maxSizeInMB = 5,
    acceptedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"],
    placeholder = "Click to upload or drag and drop an image"
}: ImageUploadProps) {
    const [uploadState, setUploadState] = useState<UploadState>({
        isUploading: false,
        progress: 0,
        error: null,
        success: false
    });
    const [isDragOver, setIsDragOver] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(value || null);
    
    const fileInputRef = useRef<HTMLInputElement>(null);
    const generateUploadUrl = useMutation(api.services.mutations.generateImageUploadUrl);
    const saveImageAfterUpload = useMutation(api.services.mutations.saveImageAfterUpload);

    const validateFile = useCallback((file: File): string | null => {
        // Check file type
        if (!acceptedTypes.includes(file.type)) {
            return `File type not supported. Please upload: ${acceptedTypes.join(", ")}`;
        }

        // Check file size
        const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
        if (file.size > maxSizeInBytes) {
            return `File size too large. Maximum size is ${maxSizeInMB}MB`;
        }

        return null;
    }, [acceptedTypes, maxSizeInMB]);

    const uploadFile = useCallback(async (file: File) => {
        try {
            setUploadState({
                isUploading: true,
                progress: 0,
                error: null,
                success: false
            });

            // Validate file
            const validationError = validateFile(file);
            if (validationError) {
                throw new Error(validationError);
            }

            // Create preview URL
            const objectUrl = URL.createObjectURL(file);
            setPreviewUrl(objectUrl);

            // Generate upload URL
            setUploadState(prev => ({ ...prev, progress: 20 }));
            const uploadUrl = await generateUploadUrl();

            // Upload file to Convex storage
            setUploadState(prev => ({ ...prev, progress: 50 }));
            const uploadResponse = await fetch(uploadUrl, {
                method: "POST",
                headers: {
                    "Content-Type": file.type,
                },
                body: file,
            });

            if (!uploadResponse.ok) {
                throw new Error(`Upload failed: ${uploadResponse.statusText}`);
            }

            // Get the storage ID from the response
            const { storageId } = await uploadResponse.json();
            
            setUploadState(prev => ({ ...prev, progress: 80 }));

            // Save image metadata and get the URL
            const result = await saveImageAfterUpload({ storageId });
            
            setUploadState(prev => ({ ...prev, progress: 100, success: true }));

            // Clean up object URL
            URL.revokeObjectURL(objectUrl);
            
            // Update parent component
            onChange(storageId, result.fileUrl || undefined);
            setPreviewUrl(result.fileUrl || "");

            toast.success("Image uploaded successfully!");

            // Reset success state after a delay
            setTimeout(() => {
                setUploadState(prev => ({ ...prev, success: false, isUploading: false }));
            }, 2000);

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Upload failed";
            
            setUploadState({
                isUploading: false,
                progress: 0,
                error: errorMessage,
                success: false
            });

            onError?.(errorMessage);
            toast.error(errorMessage);

            // Clear preview on error
            if (previewUrl && previewUrl.startsWith("blob:")) {
                URL.revokeObjectURL(previewUrl);
                setPreviewUrl(value || null);
            }
        }
    }, [generateUploadUrl, saveImageAfterUpload, onChange, onError, validateFile, value, previewUrl]);

    const handleFileSelect = useCallback((files: FileList | null) => {
        if (!files || files.length === 0) return;
        
        const file = files[0];
        uploadFile(file);
    }, [uploadFile]);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!disabled) {
            setIsDragOver(true);
        }
    }, [disabled]);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);
        
        if (disabled) return;
        
        const files = e.dataTransfer.files;
        handleFileSelect(files);
    }, [disabled, handleFileSelect]);

    const handleClick = useCallback(() => {
        if (disabled || uploadState.isUploading) return;
        fileInputRef.current?.click();
    }, [disabled, uploadState.isUploading]);

    const handleRemove = useCallback(() => {
        if (disabled || uploadState.isUploading) return;
        
        setPreviewUrl(null);
        onChange(null);
        setUploadState({
            isUploading: false,
            progress: 0,
            error: null,
            success: false
        });
        
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
        
        // Call the onRemove prop if provided
        if (onRemove) {
            onRemove();
        }
    }, [disabled, uploadState.isUploading, onChange, onRemove]);

    const clearError = useCallback(() => {
        setUploadState(prev => ({ ...prev, error: null }));
    }, []);

    return (
        <div className={cn("space-y-4", className)}>
            {/* Upload Area */}
            <div
                className={cn(
                    "relative border-2 border-dashed rounded-lg transition-all duration-200",
                    "hover:border-primary/50 hover:bg-muted/50",
                    isDragOver && "border-primary bg-primary/5",
                    disabled && "opacity-50 cursor-not-allowed",
                    uploadState.isUploading && "pointer-events-none",
                    uploadState.error && "border-destructive",
                    uploadState.success && "border-green-500",
                    !previewUrl && "border-muted-foreground/25 bg-muted/25",
                    "min-h-[200px] flex flex-col items-center justify-center p-6"
                )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleClick}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept={acceptedTypes.join(",")}
                    onChange={(e) => handleFileSelect(e.target.files)}
                    className="hidden"
                    disabled={disabled || uploadState.isUploading}
                />

                {previewUrl ? (
                    <div className="relative w-full h-full min-h-[150px] flex items-center justify-center">
                        <img
                            src={previewUrl}
                            alt="Preview"
                            className="max-w-full max-h-[150px] object-contain rounded-md"
                        />
                        {!uploadState.isUploading && (
                            <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                className="absolute top-2 right-2"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemove();
                                }}
                                disabled={disabled}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        )}
                    </div>
                ) : (
                    <div className="text-center space-y-4">
                        <div className="flex justify-center">
                            {uploadState.isUploading ? (
                                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                            ) : uploadState.success ? (
                                <CheckCircle className="h-12 w-12 text-green-500" />
                            ) : uploadState.error ? (
                                <AlertCircle className="h-12 w-12 text-destructive" />
                            ) : (
                                <div className="relative">
                                    <ImageIcon className="h-12 w-12 text-muted-foreground" />
                                    <Camera className="h-6 w-6 text-primary absolute -bottom-1 -right-1 bg-background rounded-full p-1" />
                                </div>
                            )}
                        </div>
                        
                        <div className="space-y-2">
                            <p className="text-sm font-medium">
                                {uploadState.isUploading 
                                    ? "Uploading..." 
                                    : uploadState.success 
                                    ? "Upload successful!" 
                                    : placeholder
                                }
                            </p>
                            {!uploadState.isUploading && !uploadState.success && (
                                <p className="text-xs text-muted-foreground">
                                    Supports: {acceptedTypes.map(type => type.split("/")[1]).join(", ")} • Max {maxSizeInMB}MB
                                </p>
                            )}
                        </div>

                        {!uploadState.isUploading && !uploadState.success && !uploadState.error && (
                            <Button type="button" variant="outline" size="sm" disabled={disabled}>
                                <Upload className="h-4 w-4 mr-2" />
                                Choose File
                            </Button>
                        )}
                    </div>
                )}
            </div>

            {/* Progress Bar */}
            {uploadState.isUploading && (
                <div className="space-y-2">
                    <Progress value={uploadState.progress} className="h-2" />
                    <p className="text-xs text-center text-muted-foreground">
                        {uploadState.progress}% uploaded
                    </p>
                </div>
            )}

            {/* Error Alert */}
            {uploadState.error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="flex items-center justify-between">
                        <span>{uploadState.error}</span>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={clearError}
                            className="h-auto p-1 text-destructive hover:text-destructive"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </AlertDescription>
                </Alert>
            )}
        </div>
    );
}
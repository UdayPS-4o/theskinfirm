"use client";

import React, { useState, useRef } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Upload, X, Image as ImageIcon, Loader2 } from "lucide-react";
import Image from "next/image";
import { processImage, validateImageFile } from "@/lib/image-utils";

interface ImageUploadProps {
    value?: string;
    onChange: (url: string) => void;
    onStorageIdChange?: (storageId: string | null) => void;
    onError?: (error: string) => void;
    disabled?: boolean;
    className?: string;
    label?: string;
    placeholder?: string;
    maxSize?: number; // in MB
    acceptedFileTypes?: string[];
}

export function ImageUpload({
    value,
    onChange,
    onStorageIdChange,
    onError,
    disabled = false,
    className,
    label = "Upload Image",
    placeholder = "Choose an image file",
    maxSize = 50, // 50MB default
    acceptedFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"],
}: ImageUploadProps) {
    const [isUploading, setIsUploading] = useState(false);
    const [preview, setPreview] = useState<string | null>(value || null);
    const [uploadError, setUploadError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const generateUploadUrl = useMutation(api.services.mutations.generateImageUploadUrl);
    const saveImageAfterUpload = useMutation(api.services.mutations.saveImageAfterUpload);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            handleFileUpload(file);
        }
    };

    const handleFileUpload = async (file: File) => {
        // Clear previous errors
        setUploadError(null);

        // Enhanced validation with security checks
        const validation = await validateImageFile(file, {
            maxSize,
            minSize: 1, // 1KB minimum
            allowedTypes: acceptedFileTypes,
            checkSignature: true,
            maxDimensions: { width: 4000, height: 4000 }
        });

        if (!validation.isValid) {
            const errorMessage = validation.error || "Invalid file";
            setUploadError(errorMessage);
            toast.error(errorMessage);
            onError?.(errorMessage);
            return;
        }

        try {
            setIsUploading(true);

            // For very large files, show additional processing message
            if (file.size > 10 * 1024 * 1024) { // > 10MB
                toast.info("Processing large image, please wait...");
            }

            // Process image (compress and resize)
            const processedFile = await processImage(file, {
                maxWidth: 1200,
                maxHeight: 800,
                quality: 0.85,
                format: file.type.includes('png') ? 'png' : 'jpeg'
            });

            // Create preview URL
            const previewUrl = URL.createObjectURL(processedFile);
            setPreview(previewUrl);

            // Step 1: Generate upload URL
            const uploadUrl = await generateUploadUrl();

            // Step 2: Upload processed file to Convex storage
            const result = await fetch(uploadUrl, {
                method: "POST",
                headers: { "Content-Type": processedFile.type },
                body: processedFile,
            });

            const { storageId } = await result.json();

            if (!result.ok) {
                throw new Error("Failed to upload file");
            }

            // Step 3: Get the file URL from Convex
            const { fileUrl } = await saveImageAfterUpload({ storageId });

            // Update the form with the file URL and storage ID
            onChange(fileUrl || "");
            onStorageIdChange?.(storageId);
            setPreview(fileUrl);

            // Clean up the object URL
            URL.revokeObjectURL(previewUrl);

            toast.success("Image uploaded successfully!");
            setUploadError(null); // Clear any previous errors
        } catch (error) {
            console.error("Upload error:", error);
            const errorMessage = "Failed to upload image. Please try again.";
            setUploadError(errorMessage);
            toast.error(errorMessage);
            onError?.(errorMessage);
            setPreview(value || null);
        } finally {
            setIsUploading(false);
            // Reset file input
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    };

    const handleRemoveImage = () => {
        setPreview(null);
        setUploadError(null); // Clear errors when removing image
        onChange("");
        onStorageIdChange?.(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files?.[0];
        if (file) {
            handleFileUpload(file);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div className={cn("space-y-4", className)}>
            {label && <Label className="text-sm font-medium">{label}</Label>}

            <div className="space-y-4">
                {preview ? (
                    <div className="relative group">
                        <div className="relative w-full h-48 border-2 border-dashed border-gray-300 rounded-lg overflow-hidden">
                            <Image
                                src={preview}
                                alt="Preview"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                                <Button
                                    type="button"
                                    variant="destructive"
                                    size="sm"
                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    onClick={handleRemoveImage}
                                    disabled={disabled || isUploading}
                                >
                                    <X className="size-4 mr-2" />
                                    Remove
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        className={cn(
                            "relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors",
                            "flex flex-col items-center justify-center space-y-4 min-h-48 cursor-pointer",
                            disabled && "opacity-50 cursor-not-allowed"
                        )}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onClick={() => !disabled && !isUploading && fileInputRef.current?.click()}
                    >
                        {isUploading ? (
                            <div className="flex flex-col items-center space-y-2">
                                <Loader2 className="size-8 animate-spin text-primary" />
                                <p className="text-sm text-muted-foreground">Processing and uploading...</p>
                                <p className="text-xs text-muted-foreground">This may take a moment for large files</p>
                            </div>
                        ) : (
                            <>
                                <div className="flex flex-col items-center space-y-2">
                                    <div className="p-3 bg-gray-100 rounded-full">
                                        <ImageIcon className="size-6 text-gray-600" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-medium">Click to upload or drag and drop</p>
                                        <p className="text-xs text-muted-foreground">
                                            {acceptedFileTypes.map(type => type.split('/')[1].toUpperCase()).join(', ')} up to {maxSize}MB
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    disabled={disabled}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        fileInputRef.current?.click();
                                    }}
                                >
                                    <Upload className="size-4 mr-2" />
                                    Choose File
                                </Button>
                            </>
                        )}
                    </div>
                )}

                <Input
                    ref={fileInputRef}
                    type="file"
                    accept={acceptedFileTypes.join(",")}
                    onChange={handleFileSelect}
                    disabled={disabled || isUploading}
                    className="hidden"
                    aria-label={placeholder}
                />

                {/* Error Display */}
                {uploadError && (
                    <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3">
                        <div className="flex items-center space-x-2">
                            <div className="text-destructive text-sm font-medium">Upload Error:</div>
                        </div>
                        <div className="text-destructive text-sm mt-1">{uploadError}</div>
                    </div>
                )}

                {/* URL Input as fallback */}
                <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground">Or enter image URL:</Label>
                    <Input
                        type="url"
                        placeholder="https://example.com/image.jpg"
                        value={value || ""}
                        onChange={(e) => {
                            onChange(e.target.value);
                            setPreview(e.target.value);
                            setUploadError(null); // Clear errors when manually entering URL
                        }}
                        disabled={disabled || isUploading}
                        className="text-xs"
                    />
                </div>
            </div>
        </div>
    );
}

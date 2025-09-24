"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Upload, X, FileText, Loader2, Shield, CheckCircle } from "lucide-react";
import { fileValidation } from "@/lib/validation";

interface DocumentUploadProps {
  value?: string;
  onChange: (url: string) => void;
  onFileChange?: (file: File | null) => void;
  onError?: (error: string) => void;
  disabled?: boolean;
  className?: string;
  label?: string;
  placeholder?: string;
  maxSize?: number; // in MB
  allowedTypes?: string[];
  allowedExtensions?: string[];
  required?: boolean;
  multiple?: boolean;
}

export function DocumentUpload({
  value,
  onChange,
  onFileChange,
  onError,
  disabled = false,
  className,
  label = "Upload Document",
  placeholder = "Choose a document file",
  maxSize = 10, // 10MB default for documents
  allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'text/plain'
  ],
  allowedExtensions = ['pdf', 'doc', 'docx', 'txt'],
  required = false,
  multiple = false,
}: DocumentUploadProps) {
  const [isValidating, setIsValidating] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [validationStatus, setValidationStatus] = useState<'idle' | 'validating' | 'valid' | 'invalid'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileValidation(file);
    }
  };

  const handleFileValidation = async (file: File) => {
    // Clear previous errors and status
    setUploadError(null);
    setValidationStatus('validating');
    setIsValidating(true);

    try {
      // Enhanced document validation with security checks
      const validation = await fileValidation.validateDocument(file, {
        maxSize,
        minSize: 1, // 1KB minimum
        allowedTypes,
        checkSignature: true
      });

      if (!validation.isValid) {
        const errorMessage = validation.error || "Invalid document file";
        setUploadError(errorMessage);
        setValidationStatus('invalid');
        toast.error(errorMessage);
        onError?.(errorMessage);
        setSelectedFile(null);
        onFileChange?.(null);
        return;
      }

      // File is valid
      setSelectedFile(file);
      setValidationStatus('valid');
      onChange(file.name); // For now, just use filename as value
      onFileChange?.(file);
      toast.success("Document validated successfully!");
      
    } catch (error) {
      console.error("Validation error:", error);
      const errorMessage = "Failed to validate document. Please try again.";
      setUploadError(errorMessage);
      setValidationStatus('invalid');
      toast.error(errorMessage);
      onError?.(errorMessage);
      setSelectedFile(null);
      onFileChange?.(null);
    } finally {
      setIsValidating(false);
    }
  };

  const handleRemoveDocument = () => {
    setSelectedFile(null);
    setUploadError(null);
    setValidationStatus('idle');
    onChange("");
    onFileChange?.(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      handleFileValidation(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileTypeDisplay = (type: string): string => {
    const typeMap: Record<string, string> = {
      'application/pdf': 'PDF',
      'application/msword': 'DOC',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'DOCX',
      'text/plain': 'TXT'
    };
    return typeMap[type] || type.split('/')[1]?.toUpperCase() || 'Unknown';
  };

  return (
    <div className={cn("space-y-4", className)}>
      {label && (
        <Label className="text-sm font-medium flex items-center gap-2">
          {label}
          {required && <span className="text-destructive">*</span>}
          <Shield className="size-3 text-green-600" />
        </Label>
      )}

      <div className="space-y-4">
        {selectedFile && validationStatus === 'valid' ? (
          <div className="relative group">
            <div className="border-2 border-green-200 bg-green-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FileText className="size-5 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-green-900 truncate">
                      {selectedFile.name}
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-green-700">
                      <span>{formatFileSize(selectedFile.size)}</span>
                      <span>•</span>
                      <span>{getFileTypeDisplay(selectedFile.type)}</span>
                      <CheckCircle className="size-3 text-green-600" />
                      <span>Validated</span>
                    </div>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleRemoveDocument}
                  disabled={disabled}
                  className="text-green-700 hover:text-green-900 hover:bg-green-100"
                >
                  <X className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={cn(
              "relative border-2 border-dashed rounded-lg p-6 transition-colors",
              "flex flex-col items-center justify-center space-y-4 min-h-32 cursor-pointer",
              validationStatus === 'invalid' ? "border-destructive bg-destructive/5" : "border-gray-300 hover:border-gray-400",
              disabled && "opacity-50 cursor-not-allowed"
            )}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => !disabled && !isValidating && fileInputRef.current?.click()}
          >
            {isValidating ? (
              <div className="flex flex-col items-center space-y-2">
                <Loader2 className="size-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">Validating document...</p>
                <p className="text-xs text-muted-foreground">Checking file signature and security</p>
              </div>
            ) : (
              <>
                <div className="flex flex-col items-center space-y-2">
                  <div className="p-3 bg-gray-100 rounded-full">
                    <FileText className="size-6 text-gray-600" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">
                      {allowedExtensions.map(ext => ext.toUpperCase()).join(', ')} up to {maxSize}MB
                    </p>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <Shield className="size-3 text-green-600" />
                      <span className="text-xs text-green-600">Enhanced Security Validation</span>
                    </div>
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
          accept={allowedTypes.join(",")}
          onChange={handleFileSelect}
          disabled={disabled || isValidating}
          className="hidden"
          aria-label={placeholder}
          multiple={multiple}
        />

        {/* Error Display */}
        {uploadError && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3">
            <div className="flex items-center space-x-2">
              <div className="text-destructive text-sm font-medium">Validation Error:</div>
            </div>
            <div className="text-destructive text-sm mt-1">{uploadError}</div>
          </div>
        )}

        {/* Security Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
          <div className="flex items-start space-x-2">
            <Shield className="size-4 text-blue-600 mt-0.5" />
            <div className="text-blue-800 text-xs">
              <div className="font-medium mb-1">Security Features:</div>
              <ul className="space-y-0.5 text-blue-700">
                <li>• File signature validation</li>
                <li>• Malicious content detection</li>
                <li>• File size and type verification</li>
                <li>• Secure filename validation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { blogService } from '../../services/blogService';
import { toast } from 'react-hot-toast';

interface ImageUploadProps {
  onUpload: (url: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    try {
      const url = await blogService.uploadImage(file);
      onUpload(url);
      toast.success('Image uploaded successfully');
    } catch (error) {
      toast.error('Failed to upload image');
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxFiles: 1
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-coral-500 bg-coral-50' : 'border-gray-300 hover:border-coral-500'}`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">
        {isDragActive
          ? 'Drop the image here'
          : 'Drag and drop an image, or click to select'}
      </p>
    </div>
  );
};

export default ImageUpload;
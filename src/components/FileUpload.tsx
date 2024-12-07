import React from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onFileLoad: (data: string) => void;
}

export function FileUpload({ onFileLoad }: FileUploadProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result as string;
        onFileLoad(text);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex items-center gap-4 mb-6">
      <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
        <Upload size={20} />
        <span>Seleccionar CSV</span>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
    </div>
  );
}
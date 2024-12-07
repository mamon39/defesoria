import React from 'react';
import { Search } from 'lucide-react';

interface DateFilterProps {
  onDateChange: (date: string) => void;
}

export function DateFilter({ onDateChange }: DateFilterProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="flex flex-col">
        <label htmlFor="dateInput" className="text-sm text-gray-600 mb-1">
          Fecha de Partido (YYYY-MM-DD):
        </label>
        <input
          type="date"
          id="dateInput"
          onChange={(e) => onDateChange(e.target.value)}
          className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
    </div>
  );
}
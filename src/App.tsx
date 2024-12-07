import React, { useState } from 'react';
import { FileUpload } from './components/FileUpload';
import { DateFilter } from './components/DateFilter';
import { CasesTable } from './components/CasesTable';
import { parseCSV } from './utils/csvParser';
import { Case } from './types/Case';
import { FileText } from 'lucide-react';

function App() {
  const [cases, setCases] = useState<Case[]>([]);
  const [filteredCases, setFilteredCases] = useState<Case[]>([]);

  const handleFileLoad = (data: string) => {
    const parsedData = parseCSV(data);
    setCases(parsedData);
    setFilteredCases(parsedData);
  };

  const handleDateFilter = (date: string) => {
    const filtered = cases.filter((caseItem) => caseItem.fecha === date);
    setFilteredCases(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">
              Rutificador de Casos por Fecha
            </h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            Seleccione un archivo CSV y busque registros por fecha
          </p>

          <FileUpload onFileLoad={handleFileLoad} />
          <DateFilter onDateChange={handleDateFilter} />
          <CasesTable cases={filteredCases} />
        </div>
      </div>
    </div>
  );
}

export default App;
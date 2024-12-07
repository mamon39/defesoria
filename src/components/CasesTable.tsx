import React from 'react';
import { Case } from '../types/Case';

interface CasesTableProps {
  cases: Case[];
}

export function CasesTable({ cases }: CasesTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha Partido
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              N°
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Organizador
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tipo
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tiempo Sanción (Años)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {cases.map((caseItem, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{caseItem.fecha}</td>
              <td className="px-6 py-4 whitespace-nowrap">{caseItem.numero}</td>
              <td className="px-6 py-4 whitespace-nowrap">{caseItem.organizador}</td>
              <td className="px-6 py-4 whitespace-nowrap">{caseItem.tipo}</td>
              <td className="px-6 py-4 whitespace-nowrap">{caseItem.tiempo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
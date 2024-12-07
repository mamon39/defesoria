import { Case } from '../types/Case';

export function parseCSV(data: string): Case[] {
  const rows = data.split('\n').map((row) => row.split(','));
  return rows
    .slice(1)
    .filter((row) => row.length === 5)
    .map((row) => ({
      fecha: row[0],
      numero: row[1],
      organizador: row[2],
      tipo: row[3],
      tiempo: row[4],
    }));
}
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { COLORS } from "@/app/constants/colors";

interface UserFiltersClientProps {
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  speciality: string;
  setSpeciality: (v: string) => void;
  onClear: () => void;
}

export default function UserFiltersClient({
  searchTerm,
  setSearchTerm,
  speciality,
  setSpeciality,
  onClear,
}: UserFiltersClientProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-8">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="text-sm font-medium block mb-2">
            Buscar trabajador
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              className="pl-10"
              placeholder="Nombre, apellido o email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium block mb-2">
            Especialidad
          </label>
          <select
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="todos">Todas</option>
            <option value="plomeria">Plomería</option>
            <option value="jardineria">Jardinería</option>
            <option value="electricista">Electricista</option>
            <option value="inmobiliaria">Inmobiliaria</option>
          </select>
        </div>

        <div className="flex items-end">
          <Button
            onClick={onClear}
            className="w-full text-white"
            style={{ backgroundColor: COLORS.primary }}
          >
            Limpiar filtros
          </Button>
        </div>
      </div>
    </div>
  );
}

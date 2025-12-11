import { COLORS } from "@/app/constants/colors";
import { UserProfile } from "./types";

const getSpecialityLabel = (speciality?: string) => {
  const labels: Record<string, string> = {
    plomeria: "Plomería",
    jardineria: "Jardinería",
    electricista: "Electricista",
    inmobiliaria: "Inmobiliaria",
  };
  return speciality ? labels[speciality] || speciality : "-";
};

interface WorkerTableClientProps {
  workers: UserProfile[];
}

const formatWhatsAppNumber = (phone?: string) => {
  if (!phone) return null;
  return phone.replace(/\s|\+|-/g, "");
};

const WhatsAppButton = ({ phone, name }: any) => {
  const formatted = formatWhatsAppNumber(phone);
  if (!formatted) return null;

  const message = encodeURIComponent(
    `Hola ${name}, te contacto desde la plataforma`
  );
  return (
    <a
      href={`https://wa.me/${formatted}?text=${message}`}
      target="_blank"
      className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600"
    >
      WhatsApp
    </a>
  );
};

export default function WorkerTableClient({ workers }: WorkerTableClientProps) {
  if (workers.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow p-8 text-center text-gray-500">
        No se encontraron trabajadores
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden mt-8">
      <div className="px-8 py-6 border-b">
        <h2 className="text-2xl font-bold">
          Trabajadores disponibles ({workers.length})
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left">Trabajador</th>
              <th className="px-6 py-4 text-left">Especialidad</th>
              <th className="px-6 py-4 text-left">Contacto</th>
              <th className="px-6 py-4 text-left">Registro</th>
              <th className="px-4 py-2 text-left">Ciudad</th>
              <th className="px-4 py-2 text-left">País</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {workers.map((w) => (
              <tr key={w.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">
                  {w.nombre} {w.apellido}
                </td>

                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                    {getSpecialityLabel(w.speciality)}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm">
                  <WhatsAppButton
                    phone={w.telefono}
                    name={`${w.nombre} ${w.apellido}`}
                  />
                </td>

                <td className="px-6 py-4 text-sm">
                  {new Date(w.created_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">{w.city || "-"}</td>
                <td className="px-4 py-2">{w.country || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

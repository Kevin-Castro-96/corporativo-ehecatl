import { Mail, Edit, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { COLORS } from "@/app/constants/colors";
import { UserProfile, EditFormData } from "./types";

interface PersonalInfoProps {
  user: UserProfile | null;
  editing: boolean;
  editForm: EditFormData;
  setEditForm: (form: EditFormData) => void;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
}

export default function PersonalInfo({
  user,
  editing,
  editForm,
  setEditForm,
  onEdit,
  onSave,
  onCancel,
}: PersonalInfoProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl">
      <div className="flex items-center gap-3 mb-8">
        <Mail className="w-8 h-8" style={{ color: COLORS.primary }} />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Información Personal
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Nombre *
          </label>
          {editing ? (
            <Input
              value={editForm.nombre}
              onChange={(e) =>
                setEditForm({ ...editForm, nombre: e.target.value })
              }
              placeholder="Tu nombre"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
            />
          ) : (
            <div className="px-4 py-3 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-900">{user?.nombre}</p>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Apellido *
          </label>
          {editing ? (
            <Input
              value={editForm.apellido}
              onChange={(e) =>
                setEditForm({ ...editForm, apellido: e.target.value })
              }
              placeholder="Tu apellido"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
            />
          ) : (
            <div className="px-4 py-3 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-900">{user?.apellido}</p>
            </div>
          )}
        </div>

        {editing ? (
          <>
            <input
              type="text"
              className="border p-2 rounded w-full"
              placeholder="Ciudad"
              value={editForm.city || ""}
              onChange={(e) =>
                setEditForm({ ...editForm, city: e.target.value })
              }
            />
            <input
              type="text"
              className="border p-2 rounded w-full"
              placeholder="País"
              value={editForm.country || ""}
              onChange={(e) =>
                setEditForm({ ...editForm, country: e.target.value })
              }
            />
          </>
        ) : (
          <>
            <p className="text-gray-700">
              <label className="block text-sm font-medium text-gray-700">
                Ciudad
              </label>
              {user?.city || "No especificado"}
            </p>

            <p className="text-gray-700">
              <label className="block text-sm font-medium text-gray-700">
                Pais
              </label>
              {user?.country || "No especificado"}
            </p>
          </>
        )}

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-lg text-gray-900">{user?.email}</p>
            <span className="text-xs text-gray-500">
              El email no se puede modificar
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Teléfono *
          </label>
          {editing ? (
            <Input
              value={editForm.telefono}
              onChange={(e) =>
                setEditForm({ ...editForm, telefono: e.target.value })
              }
              placeholder="Tu teléfono"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
            />
          ) : (
            <div className="px-4 py-3 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-900">{user?.telefono}</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-12 pt-8 border-t border-gray-200">
        {editing ? (
          <>
            <Button
              variant="outline"
              onClick={onCancel}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
            >
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
            <Button
              onClick={onSave}
              className="px-6 py-3 text-white font-semibold hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: COLORS.primary }}
            >
              <Save className="w-4 h-4 mr-2" />
              Guardar Cambios
            </Button>
          </>
        ) : (
          <Button
            onClick={onEdit}
            className="px-6 py-3 text-white font-semibold hover:shadow-lg transition-all duration-300"
            style={{ backgroundColor: COLORS.primary }}
          >
            <Edit className="w-4 h-4 mr-2" />
            Editar Perfil
          </Button>
        )}
      </div>
    </div>
  );
}

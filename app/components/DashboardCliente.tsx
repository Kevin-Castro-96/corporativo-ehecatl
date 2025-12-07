"use client";

import { useState, useEffect } from "react";
import { User } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { COLORS } from "@/app/constants/colors";

import { ClientSidebar, PersonalInfo } from "./clientDashboard";
import type { UserProfile, SidebarItem, EditFormData } from "./clientDashboard";
import WorkerTableClient from "./clientDashboard/WorkerTableClient";
import UserFiltersClient from "./clientDashboard/UserFiltersClient";

export default function DashboardCliente() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [workers, setWorkers] = useState<UserProfile[]>([]);
  const [filteredWorkers, setFilteredWorkers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  const [activeSection, setActiveSection] = useState("personal");
  const [searchTerm, setSearchTerm] = useState("");
  const [specialityFilter, setSpecialityFilter] = useState("todos");

  const [editing, setEditing] = useState(false);
  const [editForm, setEditForm] = useState<EditFormData>({
    nombre: "",
    apellido: "",
    telefono: "",
  });

  /* ------------------------
     SIDEBAR
  ------------------------ */
  const sidebarItems: SidebarItem[] = [
    {
      id: "personal",
      label: "Información Personal",
      icon: <User className="w-5 h-5" />,
    },
    {
      id: "trabajadores",
      label: "Buscar Trabajadores",
      icon: <User className="w-5 h-5" />,
    },
  ];

  /* ------------------------
     PERFIL CLIENTE
  ------------------------ */
  const loadUserProfile = async () => {
    try {
      const res = await fetch("/api/auth/session");
      const { session } = await res.json();

      if (!session) {
        window.location.href = "/login";
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error) throw error;

      setUser(data);
      setEditForm({
        nombre: data.nombre,
        apellido: data.apellido,
        telefono: data.telefono,
      });
    } catch (error) {
      toast.error("Error al cargar perfil");
    }
  };

  /* ------------------------
     TRABAJADORES
  ------------------------ */
  const loadWorkers = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select(
          "id, nombre, apellido, email, telefono, speciality, pay, created_at"
        )
        .eq("role", "trabajador")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setWorkers(data || []);
      setFilteredWorkers(data || []);
    } catch (error) {
      toast.error("Error cargando trabajadores");
    } finally {
      setLoading(false);
    }
  };

  /* ------------------------
     FILTROS
  ------------------------ */
  useEffect(() => {
    let result = workers;

    if (searchTerm) {
      result = result.filter(
        (w) =>
          w.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          w.apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
          w.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (specialityFilter !== "todos") {
      result = result.filter((w) => w.speciality === specialityFilter);
    }

    setFilteredWorkers(result);
  }, [searchTerm, specialityFilter, workers]);

  /* ------------------------
     INIT
  ------------------------ */
  useEffect(() => {
    loadUserProfile();
    loadWorkers();
  }, []);

  /* ------------------------
     PERFIL ACTIONS
  ------------------------ */
  const handleSave = async () => {
    if (!user) return;

    const { error } = await supabase
      .from("profiles")
      .update(editForm)
      .eq("id", user.id);

    if (error) {
      toast.error("Error al guardar");
      return;
    }

    setUser({ ...user, ...editForm });
    setEditing(false);
    toast.success("Perfil actualizado");
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  };

  /* ------------------------
     UI
  ------------------------ */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2"
          style={{ borderColor: COLORS.primary }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <ClientSidebar
        user={user}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sidebarItems={sidebarItems}
        onLogout={handleLogout}
      />

      <div className="flex-1 p-8">
        {activeSection === "personal" && (
          <PersonalInfo
            user={user}
            editing={editing}
            editForm={editForm}
            setEditForm={setEditForm}
            onEdit={() => setEditing(true)}
            onSave={handleSave}
            onCancel={() => setEditing(false)}
          />
        )}

        {activeSection === "trabajadores" && (
          <>
            <UserFiltersClient
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              speciality={specialityFilter}
              setSpeciality={setSpecialityFilter}
              onClear={() => {
                setSearchTerm("");
                setSpecialityFilter("todos");
              }}
            />

            <WorkerTableClient workers={filteredWorkers} />
          </>
        )}
      </div>
    </div>
  );
}

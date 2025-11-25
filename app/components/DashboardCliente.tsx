"use client";

import { useState, useEffect } from "react";
import { LogOut, User } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { COLORS } from "@/app/constants/colors";

import { ClientSidebar, PersonalInfo, ClientFooter } from "./clientDashboard";

import type { UserProfile, SidebarItem, EditFormData } from "./clientDashboard";

export default function DashboardCliente() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("personal");
  const [showDropdown, setShowDropdown] = useState(false);
  const [editForm, setEditForm] = useState<EditFormData>({
    nombre: "",
    apellido: "",
    telefono: "",
  });

  const sidebarItems: SidebarItem[] = [
    {
      id: "personal",
      label: "Información Personal",
      icon: <User className="w-5 h-5" />,
    },
    {
      id: "logout",
      label: "Cerrar Sesión",
      icon: <LogOut className="w-5 h-5" />,
    },
    // otras sections
  ];

  const loadUserProfile = async () => {
    try {
      const res = await fetch("/api/auth/session");
      const { session } = await res.json();

      if (!session) {
        window.location.href = "/login";
        return;
      }

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();

      if (error) throw error;

      setUser(profile);
      setEditForm({
        nombre: profile.nombre,
        apellido: profile.apellido,
        telefono: profile.telefono,
      });
    } catch (error) {
      console.error("Error cargando perfil:", error);
      toast.error("Error al cargar perfil");
      window.location.href = "/login";
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      window.location.href = "/login";
      toast.success("Sesión cerrada correctamente");
    } catch (error) {
      console.error("Error cerrando sesión:", error);
      toast.error("Error al cerrar sesión");
    }
  };

  const handleEdit = () => {
    setEditing(true);
    setEditForm({
      nombre: user?.nombre || "",
      apellido: user?.apellido || "",
      telefono: user?.telefono || "",
    });
  };

  const handleSave = async () => {
    try {
      if (!user) return;

      const { error } = await supabase
        .from("profiles")
        .update({
          nombre: editForm.nombre,
          apellido: editForm.apellido,
          telefono: editForm.telefono,
        })
        .eq("id", user.id);

      if (error) throw error;

      setUser({
        ...user,
        nombre: editForm.nombre,
        apellido: editForm.apellido,
        telefono: editForm.telefono,
      });

      setEditing(false);
      toast.success("Perfil actualizado correctamente");
    } catch (error) {
      console.error("Error actualizando perfil:", error);
      toast.error("Error al actualizar perfil");
    }
  };

  const handleCancel = () => {
    setEditing(false);
    setEditForm({
      nombre: user?.nombre || "",
      apellido: user?.apellido || "",
      telefono: user?.telefono || "",
    });
  };

  useEffect(() => {
    loadUserProfile();
  }, []);

  if (loading) {
    return (
      <>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2"
            style={{ borderColor: COLORS.primary }}
          ></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex">
        <ClientSidebar
          user={user}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          sidebarItems={sidebarItems}
          onLogout={handleLogout}
        />

        <div className="flex-1 flex flex-col">
          <div className="bg-white border-b border-gray-200 px-8 py-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              MI <span style={{ color: COLORS.primary }}>PERFIL</span>
            </h1>
            <div
              className="w-32 h-1 rounded-full mt-4"
              style={{
                background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primary}80)`,
              }}
            ></div>
            <p className="text-lg text-gray-600 mt-4">
              Administra tu información personal y configuraciones de cuenta
            </p>
          </div>

          <div className="flex-1 p-8">
            {activeSection === "personal" && (
              <PersonalInfo
                user={user}
                editing={editing}
                editForm={editForm}
                setEditForm={setEditForm}
                onEdit={handleEdit}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

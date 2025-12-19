"use client";

import { useState, useEffect } from "react";
import { Person as User, Work, Assignment } from "@mui/icons-material";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { COLORS } from "@/app/constants/colors";

import { WorkerSidebar, PersonalInfo } from "./workerDashboard";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import type {
  WorkerProfile,
  WorkerSidebarItem,
  WorkerEditFormData,
} from "./workerDashboard";

export default function DashboardTrabajador() {
  const [user, setUser] = useState<WorkerProfile | null>(null);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("personal");
  const [editForm, setEditForm] = useState<WorkerEditFormData>({
    nombre: "",
    apellido: "",
    telefono: "",
  });
  const [loadingMP, setLoadingMP] = useState(false);

  const pagarMercadoPago = async () => {
    try {
      setLoadingMP(true);

      const res = await fetch("/api/mercadopago/create-preference", {
        method: "POST",
      });

      const data = await res.json();

      if (!data.init_point) {
        alert("Error al generar preferencia con Mercado Pago");
        return;
      }

      // Redirige al checkout de Mercado Pago
      window.location.href = data.init_point;
    } catch (err) {
      console.error(err);
      alert("Error procesando pago con Mercado Pago");
    } finally {
      setLoadingMP(false);
    }
  };

  const sidebarItems: WorkerSidebarItem[] = [
    {
      id: "personal",
      label: "Información Personal",
      icon: <User className="w-5 h-5" />,
    },
    {
      id: "jobs",
      label: "Trabajos Disponibles",
      icon: <Work className="w-5 h-5" />,
    },
    {
      id: "payments",
      label: "Mis Pagos",
      icon: <Assignment className="w-5 h-5" />,
    },
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

      if (profile.role !== "trabajador") {
        toast.error("Acceso no autorizado");
        window.location.href = "/dashboard";
        return;
      }

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
        <WorkerSidebar
          user={user}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          sidebarItems={sidebarItems}
          onLogout={handleLogout}
        />

        <div className="flex-1 flex flex-col">
          <div className="bg-white border-b border-gray-200 px-8 py-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              MI{" "}
              <span style={{ color: COLORS.primary }}>PERFIL PROFESIONAL</span>
            </h1>
            <div
              className="w-32 h-1 rounded-full mt-4"
              style={{
                background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primary}80)`,
              }}
            ></div>
            <p className="text-lg text-gray-600 mt-4">
              Gestiona tu información profesional y encuentra nuevas
              oportunidades
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
            {activeSection === "jobs" && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Trabajos Disponibles
                </h2>
                <p className="text-gray-600">
                  Aquí aparecerán los trabajos disponibles para tu especialidad.
                </p>
              </div>
            )}
            {activeSection === "payments" && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Mis Pagos
                </h2>
                <p className="text-gray-600">
                  Utiliza los siguientes medios de pago disponibles para abonar
                  tus servicios.
                </p>
                {/* aca van los metodos de pago */}
                <div className="min-h-screen bg-gray-100 flex justify-center">
                  <div className="w-full max-w-4xl bg-white pt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* LEFT */}
                    <div>
                      <h2 className="text-2xl font-bold mb-6">
                        Resumen de la compra
                      </h2>

                      <div className="border rounded-xl p-4 flex gap-4 items-center mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">
                            Servicio de IA Premium
                          </h3>
                          <p className="text-gray-600 text-sm">
                            Acceso completo a todas las funciones por 30 días.
                          </p>
                          <p className="font-bold text-xl mt-2">$10.00 USD</p>
                        </div>
                      </div>

                      <div className="mt-6 border-t pt-4">
                        <div className="flex justify-between text-lg">
                          <span>Subtotal:</span>
                          <span>$10.00 USD</span>
                        </div>

                        <div className="flex justify-between text-lg">
                          <span>Impuestos:</span>
                          <span>$0.00 USD</span>
                        </div>

                        <div className="flex justify-between text-xl font-bold mt-3">
                          <span>Total:</span>
                          <span>$10.00 USD</span>
                        </div>

                        <p className="text-sm text-gray-500 mt-4">
                          *Pago seguro con PayPal.
                        </p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div>
                      <h2 className="text-2xl font-bold mb-6">
                        Método de pago
                      </h2>

                      <div className="border rounded-xl p-6 shadow-sm">
                        {/* PAYPAL */}
                        <PayPalScriptProvider
                          options={{
                            clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
                          }}
                        >
                          <PayPalButtons
                            style={{
                              layout: "vertical",
                              shape: "rect",
                              height: 45,
                            }}
                            createOrder={async () => {
                              const res = await fetch(
                                "/api/paypal/create-order",
                                {
                                  method: "POST",
                                }
                              );
                              const data = await res.json();
                              return data.id;
                            }}
                            onApprove={async (data) => {
                              const res = await fetch(
                                "/api/paypal/capture-order",
                                {
                                  method: "POST",
                                  body: JSON.stringify({
                                    orderID: data.orderID,
                                  }),
                                }
                              );

                              const payment = await res.json();
							  console.log(payment.status)
                              if (payment.status === "COMPLETED") {
                                try {
                                  const newPayStatus = true;
                                  const { error } = await supabase
                                    .from("profiles")
                                    .update({ pay: newPayStatus })
                                    .eq("id", user?.id);

                                  if (error) throw error;

                                  toast.success(
                                    `Estado de pago ${
                                      newPayStatus ? "activado" : "desactivado"
                                    }`
                                  );
                                } catch (error) {
                                  console.error(
                                    "Error actualizando estado de pago:",
                                    error
                                  );
                                  toast.error(
                                    "Error al actualizar estado de pago"
                                  );
                                }
                              }
                              console.log("Pago completado:", payment);

                              alert("¡Pago realizado exitosamente!");
                            }}
                          />
                        </PayPalScriptProvider>

                        {/* MERCADO PAGO */}

                        {/* <button
                          onClick={pagarMercadoPago}
                          disabled={loadingMP}
                          className="mt-4 w-full bg-[#08BDFE] hover:bg-blue-700 text-white font-semibold py-3 rounded-md"
                        >
                          {loadingMP
                            ? "Procesando..."
                            : "Pagar con Mercado Pago"}
                        </button> */}
                      </div>

                      <div className="text-center mt-4 text-gray-500 text-sm">
                        Pago seguro con PayPal🔒
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

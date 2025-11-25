"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Link from "next/link";

export default function RegisterPage() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false); // <-- NUEVO

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true); // <-- ACTIVAMOS "Registrando..."

    const form = new FormData(e.target);

    const data = {
      nombre: form.get("name"),
      apellido: form.get("lastname"),
      telefono: form.get("phone"),
      email: form.get("email"),
      password: form.get("password"),
      confirmPassword: form.get("confirm"),
    };

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();
    setLoading(false); // <-- DESACTIVAMOS AL TERMINAR

    if (json.error) {
      toast.error(json.error);
      return;
    }

    toast.success("Cuenta creada correctamente");
    window.location.href = "/confirm-email";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto my-12 p-6 border shadow rounded-xl"
    >
      <h1 className="text-2xl font-bold mb-6">Crear Cuenta</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nombre" required />
        <Input name="lastname" placeholder="Apellido" required />
        <Input name="phone" placeholder="Teléfono" required />
        <Input name="email" placeholder="Correo electrónico" type="email" required />

        {/* Password */}
        <div className="relative">
          <Input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Contraseña"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-2 text-gray-500"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <EyeOff /> : <Eye />}
          </button>
        </div>

        {/* Confirm password */}
        <div className="relative">
          <Input
            type={showConfirm ? "text" : "password"}
            name="confirm"
            placeholder="Confirmar contraseña"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-2 text-gray-500"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <EyeOff /> : <Eye />}
          </button>
        </div>

        {/* BOTÓN CON LOADING */}
        <Button className="w-full" disabled={loading}>
          {loading ? "Registrando..." : "Registrarme"}
        </Button>

        <p className="text-sm text-center">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="underline text-blue-600">
            Inicia sesión
          </Link>
        </p>
      </form>
    </motion.div>
  );
}

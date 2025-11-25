// app/login/page.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const form = new FormData(e.target);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.get("email"),
        password: form.get("password"),
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data.error) {
    alert(data.error);
    return;
  }
  
  console.log("Login exitoso:", data.message);
  window.location.href = "/dashboard";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto my-20 p-6 border rounded-xl shadow"
    >
      <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input name="email" placeholder="Email" required />

        <div className="relative">
          <Input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Contraseña"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-2 text-gray-600"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <Button className="w-full">Ingresar</Button>

        <p className="text-center text-sm">
          ¿No tienes cuenta?{" "}
          <Link href="/register" className="underline text-blue-600">
            Regístrate
          </Link>
        </p>
      </form>
    </motion.div>
  );
}

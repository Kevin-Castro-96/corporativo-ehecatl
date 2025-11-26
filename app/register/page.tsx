"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Link from "next/link";
import { 
	Person as PersonIcon,
	Work as WorkIcon,
	Business as BusinessIcon,
	Plumbing as PlumbingIcon,
	Grass as GrassIcon,
	ElectricalServices as ElectricalIcon,
} from "@mui/icons-material";


const specialities = [
	{ value: 'plomeria', label: 'Plomería', icon: <PlumbingIcon className="w-5 h-5" /> },
	{ value: 'jardineria', label: 'Jardinería', icon: <GrassIcon className="w-5 h-5" /> },
	{ value: 'electricista', label: 'Electricista', icon: <ElectricalIcon className="w-5 h-5" /> },
	{ value: 'inmobiliaria', label: 'Inmobiliaria', icon: <BusinessIcon className="w-5 h-5" /> },
];

export default function RegisterPage() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false); // <-- NUEVO
  const [activeTab, setActiveTab] = useState<'cliente' | 'trabajador'>('cliente');
	const [selectedSpeciality, setSelectedSpeciality] = useState('');


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
      role: activeTab,
			...(activeTab === 'trabajador' && { speciality: selectedSpeciality })
    };
    if (activeTab === 'trabajador' && !selectedSpeciality) {
			toast.error('Selecciona una especialidad');
			setLoading(false);
			return;
		}

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

      <div className="flex mb-6 p-1 bg-gray-100 rounded-xl">
				<button
					onClick={() => setActiveTab('cliente')}
					className={`flex-1 flex items-center justify-center gap-3 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
						activeTab === 'cliente'
							? 'bg-black text-white shadow-md' 
							: 'text-gray-600 hover:text-gray-800'
					}`}
				>
					<PersonIcon className="w-5 h-5" />
					Cliente
				</button>
				<button
					onClick={() => setActiveTab('trabajador')}
					className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
						activeTab === 'trabajador'
							? 'bg-black text-white shadow-md'
							: 'text-gray-600 hover:text-gray-800'
					}`}
				>
					<WorkIcon className="w-5 h-5" />
					Profesional
				</button>
			</div>

			<div className="mb-6 p-3 bg-gray-50 rounded-lg">
				{activeTab === 'cliente' ? (
					<p className="text-sm text-gray-700">
						<strong>Cliente:</strong> Publica proyectos y contrata profesionales para tus necesidades del hogar.
					</p>
				) : (
					<p className="text-sm text-gray-700">
						<strong>Profesional:</strong> Ofrece tus servicios y encuentra trabajos en tu área de especialidad.
					</p>
				)}
			</div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nombre" required />
        <Input name="lastname" placeholder="Apellido" required />
        <Input name="phone" placeholder="Teléfono" required />
        <Input name="email" placeholder="Correo electrónico" type="email" required />

{activeTab === 'trabajador' && (
					<div className="space-y-3">
						<label className="block text-sm font-medium text-gray-700">
							Especialidad *
						</label>
						<div className="grid grid-cols-2 gap-3">
							{specialities.map((spec) => (
								<button
									key={spec.value}
									type="button"
									onClick={() => setSelectedSpeciality(spec.value)}
									className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-all duration-200 ${
										selectedSpeciality === spec.value
											? 'border-red-500 bg-red-50 text-red-700'
											: 'border-gray-200 hover:border-gray-300'
									}`}
								>
									{spec.icon}
									<span className="text-sm font-medium">{spec.label}</span>
								</button>
							))}
						</div>
					</div>
				)}

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
					{loading ? "Registrando..." : `Registrarme como ${activeTab}`}
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

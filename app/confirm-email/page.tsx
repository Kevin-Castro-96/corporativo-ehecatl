import Link from "next/link";

const UserRedirect = () => {
  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-2xl font-semibold text-blue-900 mb-4">
        Verifica tu correo electrónico
      </h2>

      <p className="text-gray-700 mb-6">
        Te hemos enviado un enlace de verificación a tu correo.
        Por favor, revisa tu bandeja de entrada (y la carpeta de spam).
      </p>

      <Link
        href="/login"
        className="text-blue-600 hover:text-blue-800 font-medium"
      >
        Volver al inicio de sesión
      </Link>
    </div>
  );
};

export default UserRedirect;

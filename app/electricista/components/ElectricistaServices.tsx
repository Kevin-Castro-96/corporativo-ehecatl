'use client'
import Image from "next/image";
import Link from "next/link";

const LightBulbIcon = () => (
  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464a1 1 0 10-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" />
  </svg>
);

const BoltIcon = () => (
  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
      clipRule="evenodd"
    />
  </svg>
);

const CogIcon = () => (
  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
      clipRule="evenodd"
    />
  </svg>
);

const services = [
  {
    title: "Instalaciones Eléctricas",
    description:
      "Conectamos con electricistas especializados en instalaciones completas para viviendas y comercios.",
    image:
      "https://images.unsplash.com/photo-1660330589693-99889d60181e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: LightBulbIcon,
    features: [
      "Cableado completo",
      "Tableros eléctricos",
      "Iluminación LED",
      "Tomas de corriente",
    ],
  },
  {
    title: "Reparaciones Urgentes",
    description:
      "Red de electricistas disponibles 24/7 para emergencias eléctricas y reparaciones críticas.",
    image:
      "https://images.unsplash.com/photo-1753964724380-2c5ae02512a8?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: BoltIcon,
    features: [
      "Cortocircuitos",
      "Apagones localizados",
      "Interruptores defectuosos",
      "Emergencias 24/7",
    ],
  },
  {
    title: "Mantenimiento Preventivo",
    description:
      "Profesionales certificados para mantenimiento regular y prevención de problemas eléctricos.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: CogIcon,
    features: [
      "Revisión de sistemas",
      "Actualización de códigos",
      "Medición de cargas",
      "Informes técnicos",
    ],
  },
];

export default function ElectricistaServices() {
  const whatsappNumber = "5217716040985";
  const defaultMessage = encodeURIComponent(
    "¡Hola! Me interesa obtener información sobre los servicios de Corporativo Ehécatl."
  );
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4" id="services">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Conectamos con los Mejores Electricistas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestra plataforma te conecta con electricistas certificados y
            experimentados en tu área. Cada profesional ha sido verificado y
            cumple con los más altos estándares de seguridad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <service.icon />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/register">
                  <button className="mt-6 w-full bg-linear-to-r from-yellow-600 to-orange-600 text-white py-3 rounded-xl font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                    Encontrar Electricistas Cerca
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-linear-to-r from-yellow-600 to-orange-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Problema Eléctrico Urgente?
          </h3>
          <p className="text-xl mb-8 text-yellow-100">
            Te conectamos con electricistas certificados en tu zona en minutos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleWhatsAppClick} className="flex items-center justify-center bg-white text-yellow-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              <PhoneIcon />
              <span className="ml-2">Emergencia Ahora</span>
            </button>
			<Link href="/register">
            <button className="flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              <ClockIcon />
              <span className="ml-2">Agendar Revisión</span>
            </button>
			</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

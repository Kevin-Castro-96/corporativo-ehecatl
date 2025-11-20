"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { COLORS } from "@/app/constants/colors";
import Image from "next/image";

export default function MainHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1531765408077-9a1f85f90df1?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  // Auto-slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const serviceCards = [
    {
      id: 1,
      title: "IMPLEMENTACIÓN CON IA",
      frontImage:
        "https://images.unsplash.com/photo-1734597949889-f8e2ec87c8ea?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      backText: [
        "Integración de inteligencia artificial para optimizar procesos empresariales.",
        "• Automatización de tareas repetitivas con IA",
        "• Análisis predictivo para toma de decisiones",
        "• Chatbots inteligentes personalizados",
        "• Procesamiento de datos en tiempo real",
      ],
    },
    {
      id: 2,
      title: "CHATBOT",
      frontImage:
        "https://images.unsplash.com/photo-1659018966820-de07c94e0d01?q=80&w=1198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      backText: [
        "Proporciona una atención al cliente instantánea y disponible las 24 hrs.",
        "• Enlace con Calendly para organizar reuniones",
        "• La recopilación de datos en tiempo real a través de interacciones con los usuarios",
        "• Respuestas automáticas personalizadas",
      ],
    },
    {
      id: 3,
      title: "DOMÓTICA",
      frontImage: "/hero/domotica.jpg",
      backText: [
        "Contamos con los servicios necesarios para que puedas optimizar y mejorar la manera en la que vives:",
        "• Luces inteligentes",
        "• Puertas con apertura y cierre automático",
        "• Cámaras inteligentes",
        "• Control remoto total desde tu smartphone",
      ],
    },
    {
      id: 4,
      title: "CAMPAÑAS PARA REDES SOCIALES",
      frontImage: "/hero/socialmedia.jpg",
      backText: [
        "Manejo de redes sociales para campañas online, para todo tipo de negocio o imagen pública.",
        "• Creación de contenido atractivo",
        "• Redacción de mensajes de marketing",
        "• Actualización semanal programada",
        "• Mensajes masivos de WhatsApp y SMS",
        "• Análisis de métricas y engagement",
      ],
    },
  ];

  return (
    <>
      {/* SECCIÓN DE IMÁGENES CON TÍTULO */}
      <section
        className="relative h-[500px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImages[currentSlide]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.8s ease-in-out",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20 bg-opacity-65"></div>

        {/* INDICADORES */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>

        {/* TÍTULO SOBRE LAS IMÁGENES */}
        <div className="relative z-10 text-center text-white text-shadow-md text-shadow-black">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            El futuro en <br />
            <span style={{ color: COLORS.primary }}>tu mano</span>
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* TEXTO PRINCIPAL */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              CONOCE NUESTRO{" "}
              <span style={{ color: COLORS.primary }}>TRABAJO</span>
            </h2>

            <div className="flex justify-center mb-8">
              <div
                className="w-36 h-1 rounded-full absolute"
                style={{
                  background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primary}80)`,
                  left: "calc(40% - 200px)",
                }}
              ></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Somos una empresa mexicana líder en servicios de domótica,
              posicionamiento, telefonía IP y más. Ofrecemos soluciones
              innovadoras y de alta calidad respaldadas por un soporte
              personalizado. Nuestra misión es llevar tu hogar o negocio al
              siguiente nivel. Descubre cómo podemos ayudarte a alcanzar tus
              metas.
            </p>
          </div>

          {/* TARJETAS SERVICIOS CON FLIP */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {serviceCards.map((card) => (
              <div key={card.id} className="flip-card h-80">
                <div className="flip-card-inner">
                  {/* FRENTE */}
                  <div className="flip-card-front">
                    <div
                      className="w-full h-full relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                      style={{
                        backgroundImage: `url(${card.frontImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-black/20 bg-opacity-40"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-xl font-bold text-center">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* DORSO */}
                  <div className="flip-card-back">
                    <div
                      className="w-full h-full p-6 rounded-xl shadow-lg flex flex-col justify-center text-white cursor-pointer"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      <div className="text-center space-y-3">
                        {card.backText.map((text, index) => (
                          <p
                            key={index}
                            className={`${
                              index === 0
                                ? "text-lg font-semibold mb-4"
                                : "text-sm"
                            }`}
                          >
                            {text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SECCIÓN LOGOS  */}
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              CONOCE MÁS{" "}
              <span style={{ color: COLORS.primary }}>DE NOSOTROS</span>
            </h3>

            <div className="flex justify-center mb-8">
              <div
                className="w-36 h-1 rounded-full absolute"
                style={{
                  background: `linear-gradient(to right, ${COLORS.primary}, ${COLORS.primary}80)`,
                  left: "calc(40% - 200px)",
                }}
              ></div>
            </div>

            {/* LOGO PRINCIPAL - GRUPO */}
            <div className="flex justify-center mb-8">
              <Link
                href="https://linkr.bio/GrupoBeta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-32 h-32 relative cursor-pointer hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/logos/grupo.png"
                    alt="Grupo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* LOGOS SECUNDARIOS */}
            <div className="flex flex-wrap justify-center items-center gap-20 max-w-4xl mx-auto">
              <Link
                href="https://www.facebook.com/profile.php?id=61552386080299"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-24 h-24 relative cursor-pointer hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/logos/uni.jpg"
                    alt="Universidad"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link
                href="https://javierbazan.mx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-24 h-24 relative cursor-pointer hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/logos/logo.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link
                href="https://desarrollemosmexico.org.mx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-24 h-24 relative cursor-pointer hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/logos/fundacion.webp"
                    alt="Fundación"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link
                href="https://feshi.desarrollemosmexico.org.mx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-24 h-24 relative cursor-pointer hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/logos/feshi.jpg"
                    alt="Feshi"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ESTILOS FLIP */}
      <style jsx>{`
        .flip-card {
          background-color: transparent;
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        /* Efecto de sombra mejorado en hover */
        .flip-card:hover {
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
        }
      `}</style>
    </>
  );
}

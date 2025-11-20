"use client";
import React from "react";
import Link from "next/link";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { COLORS } from "@/app/constants/colors";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/corporativo.webp"
                  alt="Corporativo Ehécatl Logo"
                  className="h-16 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold">Corporativo</h3>
                  <p className="text-sm text-gray-300">Ehécatl</p>
                </div>
              </div>
            </Link>

            <p className="text-gray-300 mb-6">
              Somos una empresa mexicana especializada en servicios de domótica,
              posicionamiento y telefonía IP. Destacamos por ofrecer soluciones
              innovadoras y de alta calidad.
            </p>

            <div className="flex gap-3">
              <a
                href="https://facebook.com/corporativoehecatl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FacebookIcon fontSize="small" />
              </a>
              <a
                href="https://linkedin.com/company/corporativo-ehecatl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <LinkedInIcon fontSize="small" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-white transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/residential-services"
                  className="hover:text-white transition-colors"
                >
                  Servicios Residenciales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">
                Domótica Residencial
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Telefonía IP Empresarial
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Redes y Infraestructura
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Videovigilancia
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Automatización Industrial
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300 mb-6">
              <div className="flex items-center gap-3">
                <PhoneIcon fontSize="small" style={{ color: COLORS.primary }} />
                <span>771 771 604 0985</span>
              </div>
              <div className="flex items-center gap-3">
                <EmailIcon fontSize="small" style={{ color: COLORS.primary }} />
                <span>contacto@corporativoehecatl.com.mx</span>
              </div>
              <div className="flex items-start gap-3">
                <LocationOnIcon
                  fontSize="small"
                  style={{ color: COLORS.primary }}
                />
                <span>
                  Pachuca, Hidalgo
                  <br />
                  México
                </span>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">
                Horarios de atención:
              </p>
              <p className="text-sm text-gray-300">
                Lun - Vie: 9:00 AM - 6:00 PM
              </p>
              <p className="text-sm text-gray-300">Sáb: 9:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Corporativo Ehécatl. Todos los
              derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const res = await fetch("/api/auth/session");
      const { session } = await res.json();
      setIsLoggedIn(!!session);
    } catch {
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const getLinkClasses = (path: string) => {
    const base = "block py-3 px-4 transition-colors";
    return isActive(path)
      ? `${base} text-red-600 font-semibold`
      : `${base} text-gray-700 hover:text-red-600`;
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/corporativo.webp" className="h-12" alt="Logo" />
          <div>
            <h1 className="font-bold text-gray-800">Corporativo</h1>
            <p className="text-sm text-gray-500 -mt-1">Ehécatl</p>
          </div>
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden lg:flex gap-8 font-medium">
          <li>
            <Link href="/about-us" className={getLinkClasses("/about-us")}>
              SOBRE NOSOTROS
            </Link>
          </li>
          <li>
            <Link href="/products" className={getLinkClasses("/products")}>
              PRODUCTOS
            </Link>
          </li>
          <li>
            <Link href="/contact" className={getLinkClasses("/contact")}>
              CONTACTO
            </Link>
          </li>
          <li>
            <Link
              href="/residential-services"
              className={getLinkClasses("/residential-services")}
            >
              SERVICIOS
            </Link>
          </li>
          <li>
            {!loading &&
              (isLoggedIn ? (
                <Link
                  href="/dashboard"
                  className={getLinkClasses("/dashboard")}
                >
                  MI CUENTA
                </Link>
              ) : (
                <Link href="/login" className={getLinkClasses("/login")}>
                  INICIAR SESIÓN
                </Link>
              ))}
          </li>
        </ul>

        {/* BOTÓN HAMBURGUESA */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* MENU MOBILE */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/about-us"
            className={getLinkClasses("/about-us")}
          >
            SOBRE NOSOTROS
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/products"
            className={getLinkClasses("/products")}
          >
            PRODUCTOS
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/contact"
            className={getLinkClasses("/contact")}
          >
            CONTACTO
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/residential-services"
            className={getLinkClasses("/residential-services")}
          >
            SERVICIOS
          </Link>

          {!loading &&
            (isLoggedIn ? (
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/dashboard"
                className={getLinkClasses("/dashboard")}
              >
                MI CUENTA
              </Link>
            ) : (
              <Link
                onClick={() => setIsMenuOpen(false)}
                href="/login"
                className={getLinkClasses("/login")}
              >
                INICIAR SESIÓN
              </Link>
            ))}
        </div>
      )}
    </header>
  );
}

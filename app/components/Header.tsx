"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BusinessIcon from "@mui/icons-material/Business";
import { COLORS } from "@/app/constants/colors";

export default function Header() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const res = await fetch("/api/auth/session");
      const { session } = await res.json();
      setIsLoggedIn(!!session);
    } catch (error) {
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = "transition-colors cursor-pointer py-2 px-1 border-b-2";

    if (isActive(path)) {
      return `${baseClasses} text-red-600 border-red-600`;
    }

    return `${baseClasses} text-gray-600 border-transparent hover:text-red-600 hover:border-red-600`;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/corporativo.webp"
              alt="Corporativo Ehécatl Logo"
              className="h-16 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800">Corporativo</h1>
              <p className="text-sm text-gray-500 -mt-1">Ehécatl</p>
            </div>
          </Link>
        </div>

        <ul className="hidden lg:flex items-center gap-8 font-medium">
          {/* <li>
						<Link href='/' className={getLinkClasses('/')}>
							INICIO
						</Link>
					</li> */}
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
              SERVICIOS RESIDENCIALES
            </Link>
          </li>
          <li>
            {!loading &&
              (isLoggedIn ? (
                <Link
                  href="/dashboard"
				  className={getLinkClasses("/login")}
                >
                  MI CUENTA
                </Link>
              ) : (
                <Link
                  href="/login"
				  className={getLinkClasses("/login")}
                >
                  INICIAR SESION
                </Link>
              ))}
          </li>
        </ul>

        <div className="lg:hidden">
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg
              className="w-6 h-6 text-gray-600"
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
        </div>
      </nav>
    </header>
  );
}

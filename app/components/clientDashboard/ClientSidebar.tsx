import { ChevronDown, LogOut, User } from "lucide-react";
import { COLORS } from "@/app/constants/colors";
import { SidebarItem, UserProfile } from "./types";

interface ClientSidebarProps {
  user: UserProfile | null;
  showDropdown: boolean;
  setShowDropdown: (show: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  sidebarItems: SidebarItem[];
  onLogout: () => void;
}

export default function ClientSidebar({
  user,
  showDropdown,
  setShowDropdown,
  activeSection,
  setActiveSection,
  sidebarItems,
  onLogout,
}: ClientSidebarProps) {
  return (
    <div className="w-80 bg-white shadow-xl border-r border-gray-200">
      <div className="p-6 border-b border-gray-200 relative">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="w-full flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors"
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${COLORS.primary}20` }}
          >
            <User className="w-6 h-6" style={{ color: COLORS.primary }} />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-gray-900">
              {user?.nombre} {user?.apellido}
            </h3>
            <span
              className="text-sm px-2 py-1 rounded-full"
              style={{
                backgroundColor: `${COLORS.primary}20`,
                color: COLORS.primary,
              }}
            >
              Cliente
            </span>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform ${
              showDropdown ? "rotate-180" : ""
            }`}
          />
        </button>

        {showDropdown && (
          <div className="absolute top-full left-6 right-6 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>

      <nav className="p-6">
        <div className="space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === "logout") {
                  onLogout(); // ejecuta logout real
                  return;
                }
                setActiveSection(item.id);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                activeSection === item.id
                  ? "text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              style={{
                backgroundColor:
                  activeSection === item.id ? COLORS.primary : undefined,
              }}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

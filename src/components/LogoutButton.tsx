"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const { logout } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogout = async () => {
    try {
      setLoading(true);
      setMessage("Cerrando sesión...");
      await logout();
      setMessage("Sesión cerrada correctamente ✅");

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (error: any) {
      console.error("Error al cerrar sesión:", error);
      setMessage(error.response?.data?.message || "Error al cerrar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-end space-y-3">
      <button
        onClick={handleLogout}
        disabled={loading}
        className={`
          px-4 py-2 rounded-lg font-medium transition-all duration-300
          ${loading
            ? 'bg-destructive/80 cursor-not-allowed'
            : 'bg-destructive hover:bg-destructive/90 hover:-translate-y-0.5 shadow-lg hover:shadow-xl'
          }
          text-destructive-foreground border border-destructive/20
        `}
      >
        {loading ? "Cerrando..." : "Cerrar sesión"}
      </button>

      {message && (
        <p className={`text-sm font-medium ${loading ? 'text-muted-foreground' : 'text-secondary'} transition-colors duration-300`}>
          {message}
        </p>
      )}
    </div>
  );
}

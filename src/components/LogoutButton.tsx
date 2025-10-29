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

      // Espera 1.5 segundos antes de redirigir
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
    <div style={{ marginTop: 16 }}>
      <button
        onClick={handleLogout}
        disabled={loading}
        style={{
          padding: "8px 16px",
          backgroundColor: loading ? "#f87171" : "#ef4444",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: loading ? "not-allowed" : "pointer",
          transition: "background-color 0.3s",
        }}
      >
        {loading ? "Cerrando..." : "Cerrar sesión"}
      </button>

      {message && (
        <p style={{ marginTop: 10, color: loading ? "#555" : "#16a34a" }}>
          {message}
        </p>
      )}
    </div>
  );
}

"use client";

import { ReactNode, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";
import Toast from "@/components/Toast";

type PrivateLayoutProps = {
  children: ReactNode;
};

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [toastMessage, setToastMessage] = useState("");

  // Redirigir si no está autenticado
  if (!loading && !user) {
    router.push("/login");
    return null;
  }

  if (loading) return <p>Cargando...</p>;

  return (
    <>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          background: "#1976d2",
          color: "#fff",
        }}
      >
        <span>Bienvenido, {user?.name}</span>
        <LogoutButton />
      </nav>

      {/* Contenido */}
      <main style={{ padding: 20 }}>{children}</main>

      {/* Toast */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
    </>
  );
}

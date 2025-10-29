"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LogoutButton from "@/components/LogoutButton";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <p className="p-4">Cargando...</p>;

  // Evita error si user es null
  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <nav className="flex justify-between items-center bg-blue-700 text-white p-4 rounded-lg shadow">
        <h1 className="text-lg font-semibold">Bienvenido, {user.name}</h1>
        <LogoutButton />
      </nav>
      <main className="mt-6">
        <p className="text-gray-700">Este es tu panel de control.</p>
      </main>
    </div>
  );
}

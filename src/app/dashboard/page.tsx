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

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="card-modern text-center space-y-4">
          <div className="animate-pulse">
            <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto mb-4"></div>
          </div>
          <p className="text-lg font-medium text-primary">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Modern Header with Gradient */}
      <header className="nav-modern shadow-3d">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center shadow-3d-secondary">
                <span className="text-white font-bold text-lg">U</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary-foreground">
                  Bienvenido, <span className="text-gradient-secondary">{user.name}</span>
                </h1>
                <p className="text-sm text-primary-foreground/80">UGEL Andahuaylas - Dashboard</p>
              </div>
            </div>
            <LogoutButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="card-accent mb-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gradient-primary">
              Sistema de Actualización de Datos Docentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gestiona y actualiza la información del personal docente de manera eficiente y moderna.
            </p>
          </div>
        </section>

        {/* Dashboard Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Docentes Card */}
          <div className="card-modern card-hover">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-3d">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Docentes</h3>
                <p className="text-sm text-muted-foreground">Gestión de personal</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Administra la información completa del personal docente de la UGEL.
            </p>
            <button className="w-full bg-[#00d2d3] hover:bg-[#00d2d3]/90 text-[#192a56] font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 px-4 py-2 rounded-lg">
              Ver Docentes
            </button>
          </div>

          {/* Reportes Card */}
          <div className="card-modern card-hover">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center shadow-3d-accent">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Reportes</h3>
                <p className="text-sm text-muted-foreground">Estadísticas y análisis</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Genera reportes detallados y estadísticas del personal docente.
            </p>
            <button className="w-full bg-gradient-to-r from-[#2e86de] to-[#00d2d3] text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 px-4 py-2 rounded-lg">
              Ver Reportes
            </button>
          </div>

          {/* Configuración Card */}
          <div className="card-modern card-hover">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center shadow-3d-secondary">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Configuración</h3>
                <p className="text-sm text-muted-foreground">Ajustes del sistema</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Configura parámetros y preferencias del sistema.
            </p>
            <button className="w-full bg-[#00d2d3] hover:bg-[#00d2d3]/90 text-[#192a56] font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5 px-4 py-2 rounded-lg">
              Configurar
            </button>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card-modern text-center">
            <div className="text-3xl font-bold text-gradient-primary mb-2">150</div>
            <div className="text-sm text-muted-foreground">Total Docentes</div>
          </div>
          <div className="card-modern text-center">
            <div className="text-3xl font-bold text-gradient-secondary mb-2">25</div>
            <div className="text-sm text-muted-foreground">Instituciones</div>
          </div>
          <div className="card-modern text-center">
            <div className="text-3xl font-bold text-gradient-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Datos Actualizados</div>
          </div>
          <div className="card-modern text-center">
            <div className="text-3xl font-bold text-gradient-secondary mb-2">12</div>
            <div className="text-sm text-muted-foreground">Reportes Este Mes</div>
          </div>
        </section>
      </main>
    </div>
  );
}

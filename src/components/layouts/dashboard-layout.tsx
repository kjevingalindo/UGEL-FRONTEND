"use client"

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import type { ReactNode } from "react"

interface DashboardLayoutProps {
  children: ReactNode
  role: "admin" | "director"
  onChangeRole: () => void
}

export function DashboardLayout({ children, role, onChangeRole }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <Sidebar className="border-r-0 bg-gradient-to-b from-[#192a56] to-[#192a56]/95">
          <SidebarHeader className="border-b border-[#192a56]/30 pb-4 bg-gradient-to-r from-[#192a56] to-[#192a56]/90">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00d2d3] to-[#2e86de] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">SU</span>
              </div>
              <div>
                <h2 className="font-bold text-white text-sm">SAD-UGEL</h2>
                <p className="text-xs text-white/80">Sistema de Datos</p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            {role === "admin" && <AdminSidebarNav />}
            {role === "director" && <DirectorSidebarNav />}
          </SidebarContent>

          <SidebarFooter className="border-t border-[#192a56]/30 pt-4 bg-gradient-to-t from-[#192a56]/90 to-[#192a56]">
            <div className="text-center text-white/60 text-xs">
              <p>© 2024 UGEL Andahuaylas</p>
              <p className="mt-1">Sistema de Datos Docentes</p>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <div className="bg-gradient-to-r from-[#192a56] via-[#192a56] to-[#2e86de] border-b border-[#192a56]/20 sticky top-0 z-40 shadow-lg">
            <div className="flex items-center justify-between px-4 py-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="md:hidden text-white" />
                <div>
                  <h1 className="text-xl font-bold text-white">
                    {role === "admin" ? "Panel Administrador UGEL" : "Panel Director - IE San Martín"}
                  </h1>
                  <p className="text-white/80 text-sm mt-1">
                    {role === "admin"
                      ? "Gestión centralizada de información docente"
                      : "Gestión de información docente de tu institución"
                    }
                  </p>
                </div>
              </div>
              <Button
                onClick={onChangeRole}
                className="bg-[#00d2d3] hover:bg-[#00d2d3]/90 text-[#192a56] font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Cambiar rol
              </Button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </SidebarProvider>
  )
}

function AdminSidebarNav() {
  return (
    <>
      {/* Gestión Principal */}
      <SidebarGroup>
        <SidebarGroupLabel className="text-[#00d2d3]/90">Gestión Principal</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Panel principal con KPIs y estadísticas"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">📊</span>
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Validar información docente enviada"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">✅</span>
                <span>Validaciones</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Gestionar instituciones educativas"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">🏫</span>
                <span>Instituciones</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarSeparator className="bg-[#192a56]/30" />

      {/* Gestión de Usuarios */}
      <SidebarGroup>
        <SidebarGroupLabel className="text-[#00d2d3]/90">Gestión de Usuarios</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Crear y gestionar cuentas de directores"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">👥</span>
                <span>Directores</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Gestionar permisos y roles"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">🔐</span>
                <span>Permisos</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarSeparator className="bg-[#192a56]/30" />

      {/* Información Docente */}
      <SidebarGroup>
        <SidebarGroupLabel className="text-[#00d2d3]/90">Información Docente</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Ver todos los docentes registrados"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">📋</span>
                <span>Docentes</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Historial de cambios y actualizaciones"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">🕒</span>
                <span>Historial</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarSeparator className="bg-[#192a56]/30" />

      {/* Reportes */}
      <SidebarGroup>
        <SidebarGroupLabel className="text-[#00d2d3]/90">Reportes</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Reportes por institución"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">📈</span>
                <span>Por Institución</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Reportes por categoría docente"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">📊</span>
                <span>Por Categoría</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Reportes por estado de validación"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">📑</span>
                <span>Por Estado</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Exportar datos en Excel, PDF o CSV"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">💾</span>
                <span>Exportar</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  )
}

function DirectorSidebarNav() {
  return (
    <>
      {/* Gestión Principal */}
      <SidebarGroup>
        <SidebarGroupLabel className="text-[#00d2d3]/90">Gestión Principal</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Panel principal de tu institución"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">📊</span>
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Ver estado de validaciones UGEL"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">⏳</span>
                <span>Mis Solicitudes</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarSeparator className="bg-[#192a56]/30" />

      {/* Registro de Docentes */}
      <SidebarGroup>
        <SidebarGroupLabel className="text-[#00d2d3]/90">Registro de Docentes</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Registrar nuevo docente"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">➕</span>
                <span>Nuevo Docente</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Ver y editar docentes registrados"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">📋</span>
                <span>Mis Docentes</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Importar docentes desde archivo"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">📥</span>
                <span>Importar</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarSeparator className="bg-[#192a56]/30" />

      {/* Validación y Envío */}
      <SidebarGroup>
        <SidebarGroupLabel className="text-[#00d2d3]/90">Validación y Envío</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Revisar datos antes de enviar"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">🔍</span>
                <span>Revisar Datos</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Enviar información para validación UGEL"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">📤</span>
                <span>Enviar para Validar</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarSeparator className="bg-[#192a56]/30" />

      {/* Documentos */}
      <SidebarGroup>
        <SidebarGroupLabel className="text-[#00d2d3]/90">Documentos</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Adjuntar resoluciones y contratos"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">📎</span>
                <span>Adjuntos</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Ver historial de cambios"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">🕒</span>
                <span>Historial</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <SidebarSeparator className="bg-[#192a56]/30" />

      {/* Reportes */}
      <SidebarGroup>
        <SidebarGroupLabel className="text-[#00d2d3]/90">Reportes</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Reporte de docentes por categoría"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">📊</span>
                <span>Por Categoría</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Reporte de docentes por nivel"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">📈</span>
                <span>Por Nivel</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Exportar datos en Excel o PDF"
                className="text-white/90 hover:text-white hover:bg-[#00d2d3]/20 transition-colors"
              >
                <span className="text-lg">💾</span>
                <span>Exportar</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  )
}

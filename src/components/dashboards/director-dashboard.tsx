"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { LogOut, Plus, CheckCircle2, Clock } from "lucide-react"

interface DirectorDashboardProps {
  onChangeRole: () => void
}

const categoryData = [
  { name: "Nombrado", value: 28, fill: "#192a56" },
  { name: "Contratado", value: 15, fill: "#2e86de" },
  { name: "Auxiliar", value: 12, fill: "#00d2d3" },
]

const statusData = [
  { month: "Ene", registrados: 30, validados: 28, pendientes: 2 },
  { month: "Feb", registrados: 35, validados: 33, pendientes: 2 },
  { month: "Mar", registrados: 40, validados: 38, pendientes: 2 },
  { month: "Abr", registrados: 45, validados: 42, pendientes: 3 },
  { month: "May", registrados: 55, validados: 52, pendientes: 3 },
]

const recentDocentes = [
  {
    id: 1,
    nombre: "Juan Pérez García",
    categoria: "Nombrado",
    nivel: "Secundaria",
    estado: "validado",
    fecha: "2024-10-25",
  },
  {
    id: 2,
    nombre: "María López Rodríguez",
    categoria: "Contratado",
    nivel: "Primaria",
    estado: "pendiente",
    fecha: "2024-10-24",
  },
  {
    id: 3,
    nombre: "Carlos Mendoza Silva",
    categoria: "Auxiliar",
    nivel: "Inicial",
    estado: "validado",
    fecha: "2024-10-23",
  },
  {
    id: 4,
    nombre: "Ana García Flores",
    categoria: "Nombrado",
    nivel: "Secundaria",
    estado: "validado",
    fecha: "2024-10-22",
  },
]

export function DirectorDashboard({ onChangeRole }: DirectorDashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f5f5] via-[#f5f5f5] to-[#e8f4f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white border-0 shadow-3d transition-all duration-300 hover:shadow-3d-secondary hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-[#192a56]">Total Docentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#192a56]">55</div>
              <p className="text-xs text-[#2f3640] mt-1">En tu institución</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-3d transition-all duration-300 hover:shadow-3d-secondary hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-[#2e86de]">Validados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#2e86de]">52</div>
              <p className="text-xs text-[#2f3640] mt-1">94.5% completado</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-3d transition-all duration-300 hover:shadow-3d-secondary hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-[#ff4757]">Rechazados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#ff4757]">1</div>
              <p className="text-xs text-[#2f3640] mt-1">Requiere revisión</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-3d transition-all duration-300 hover:shadow-3d-secondary hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-[#00d2d3]">Últimas Actualizaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#00d2d3]">12</div>
              <p className="text-xs text-[#2f3640] mt-1">Este mes</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Category Distribution */}
          <Card className="bg-white border-0 shadow-3d">
            <CardHeader>
              <CardTitle className="text-[#192a56]">Distribución por Categoría</CardTitle>
              <CardDescription className="text-[#2f3640]">Docentes por tipo de contrato</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #e0e0e0", borderRadius: "8px" }}
                    labelStyle={{ color: "#192a56" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Status Trend */}
          <Card className="bg-white border-0 shadow-3d">
            <CardHeader>
              <CardTitle className="text-[#192a56]">Tendencia de Registros</CardTitle>
              <CardDescription className="text-[#2f3640]">Últimos 5 meses</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={statusData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="month" stroke="#2f3640" />
                  <YAxis stroke="#2f3640" />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #e0e0e0", borderRadius: "8px" }}
                    labelStyle={{ color: "#192a56" }}
                  />
                  <Legend />
                  <Bar dataKey="validados" fill="#2e86de" />
                  <Bar dataKey="pendientes" fill="#00d2d3" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Docentes */}
        <Card className="bg-white border-0 shadow-3d">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-[#192a56]">Docentes Registrados</CardTitle>
              <CardDescription className="text-[#2f3640]">Últimas actualizaciones</CardDescription>
            </div>
            <Button className="bg-[#00d2d3] hover:bg-[#00d2d3]/90 text-[#192a56] font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <Plus className="w-4 h-4 mr-2" />
              Registrar Docente
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-[#192a56] font-medium">Docente</th>
                    <th className="text-left py-3 px-4 text-[#192a56] font-medium">Categoría</th>
                    <th className="text-left py-3 px-4 text-[#192a56] font-medium">Nivel</th>
                    <th className="text-left py-3 px-4 text-[#192a56] font-medium">Estado</th>
                    <th className="text-left py-3 px-4 text-[#192a56] font-medium">Fecha</th>
                    <th className="text-left py-3 px-4 text-[#192a56] font-medium">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {recentDocentes.map((docente) => (
                    <tr key={docente.id} className="border-b border-border hover:bg-muted transition-colors">
                      <td className="py-3 px-4 text-[#192a56]">{docente.nombre}</td>
                      <td className="py-3 px-4 text-[#2f3640]">{docente.categoria}</td>
                      <td className="py-3 px-4 text-[#2f3640]">{docente.nivel}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant="outline"
                          className={
                            docente.estado === "validado"
                              ? "border-accent text-[#2e86de] bg-accent/10"
                              : "border-destructive text-[#ff4757] bg-destructive/10"
                          }
                        >
                          {docente.estado === "validado" ? (
                            <>
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              Validado
                            </>
                          ) : (
                            <>
                              <Clock className="w-3 h-3 mr-1" />
                              Pendiente
                            </>
                          )}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-[#2f3640]">{docente.fecha}</td>
                      <td className="py-3 px-4">
                        <Button size="sm" variant="ghost" className="text-[#192a56] hover:text-[#192a56]/80 hover:bg-muted">
                          Editar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

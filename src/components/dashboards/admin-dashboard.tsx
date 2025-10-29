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
  LineChart,
  Line,
} from "recharts"
import { LogOut, Plus, CheckCircle2, AlertCircle, Building2 } from "lucide-react"

interface AdminDashboardProps {
  onChangeRole: () => void
}

const validationData = [
  { month: "Ene", validadas: 120, pendientes: 45, rechazadas: 12 },
  { month: "Feb", validadas: 150, pendientes: 38, rechazadas: 8 },
  { month: "Mar", validadas: 180, pendientes: 25, rechazadas: 5 },
  { month: "Abr", validadas: 210, pendientes: 32, rechazadas: 10 },
  { month: "May", validadas: 240, pendientes: 28, rechazadas: 7 },
]

const institutionStats = [
  { name: "IE San Martín", docentes: 45, validados: 42, pendientes: 3 },
  { name: "IE Los Andes", docentes: 38, validados: 35, pendientes: 3 },
  { name: "IE Primavera", docentes: 52, validados: 48, pendientes: 4 },
  { name: "IE Horizonte", docentes: 41, validados: 39, pendientes: 2 },
]

const pendingRequests = [
  { id: 1, docente: "Juan Pérez García", ie: "IE San Martín", categoria: "Nombrado", fecha: "2024-10-25" },
  { id: 2, docente: "María López Rodríguez", ie: "IE Los Andes", categoria: "Contratado", fecha: "2024-10-24" },
  { id: 3, docente: "Carlos Mendoza Silva", ie: "IE Primavera", categoria: "Auxiliar", fecha: "2024-10-23" },
]

export function AdminDashboard({ onChangeRole }: AdminDashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f5f5] via-[#f5f5f5] to-[#e8f4f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white border-0 shadow-3d transition-all duration-300 hover:shadow-3d-secondary hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-[#192a56]">Total Docentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#192a56]">1,247</div>
              <p className="text-xs text-[#2f3640] mt-1">+12 esta semana</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-3d transition-all duration-300 hover:shadow-3d-secondary hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-[#2e86de]">Validados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#2e86de]">1,089</div>
              <p className="text-xs text-[#2f3640] mt-1">87.3% del total</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-3d transition-all duration-300 hover:shadow-3d-secondary hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-[#ff4757]">Rechazados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#ff4757]">30</div>
              <p className="text-xs text-[#2f3640] mt-1">2.4% del total</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-3d transition-all duration-300 hover:shadow-3d-secondary hover:scale-105">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-[#00d2d3]">Instituciones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#00d2d3]">24</div>
              <p className="text-xs text-[#2f3640] mt-1">Todas activas</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Validation Trend */}
          <Card className="bg-white border-0 shadow-3d">
            <CardHeader>
              <CardTitle className="text-[#192a56]">Tendencia de Validaciones</CardTitle>
              <CardDescription className="text-[#2f3640]">Últimos 5 meses</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={validationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="month" stroke="#2f3640" />
                  <YAxis stroke="#2f3640" />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #e0e0e0", borderRadius: "8px" }}
                    labelStyle={{ color: "#192a56" }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="validadas" stroke="#2e86de" strokeWidth={2} />
                  <Line type="monotone" dataKey="pendientes" stroke="#2f3640" strokeWidth={2} />
                  <Line type="monotone" dataKey="rechazadas" stroke="#ff4757" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Institution Status */}
          <Card className="bg-white border-0 shadow-3d">
            <CardHeader>
              <CardTitle className="text-[#192a56]">Estado por Institución</CardTitle>
              <CardDescription className="text-[#2f3640]">Docentes validados vs pendientes</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={institutionStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="name" stroke="#2f3640" angle={-45} textAnchor="end" height={80} />
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

        {/* Pending Requests */}
        <Card className="bg-white border-0 shadow-3d">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-[#192a56]">Solicitudes Pendientes de Validación</CardTitle>
              <CardDescription className="text-[#2f3640]">Últimas actualizaciones docentes</CardDescription>
            </div>
            <Button className="bg-[#00d2d3] hover:bg-[#00d2d3]/90 text-[#192a56] font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              <Plus className="w-4 h-4 mr-2" />
              Ver todas
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-muted to-muted/50 rounded-lg border border-border hover:border-secondary transition-all"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <AlertCircle className="w-5 h-5 text-[#ff4757]" />
                      <h3 className="font-medium text-[#192a56]">{request.docente}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#2f3640]">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-4 h-4" />
                        {request.ie}
                      </span>
                      <Badge variant="outline" className="border-primary text-[#192a56]">
                        {request.categoria}
                      </Badge>
                      <span>{request.fecha}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-[#00d2d3] hover:bg-[#00d2d3]/90 text-[#192a56] font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      Aprobar
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#e0e0e0] text-[#192a56] hover:bg-[#e8f4f5] bg-white"
                    >
                      Rechazar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building2 } from "lucide-react";

interface RoleSelectorProps {
  onSelectRole: (role: "admin" | "director") => void;
}

export function RoleSelector({ onSelectRole }: RoleSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f5f5] via-[#f5f5f5] to-[#e8f4f5] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[#192a56] via-[#192a56] to-[#2e86de] rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">SU</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-[#192a56] mb-2">SAD-UGEL</h1>
          <p className="text-[#2e86de] font-semibold text-lg">
            Sistema de Actualización de Datos Docentes
          </p>
          <p className="text-[#2f3640] text-base mt-3">
            UGEL Andahuaylas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Admin Card */}
          <Card
            className="bg-white border-0 shadow-3d transition-all duration-300 cursor-pointer group hover:shadow-3d-secondary hover:scale-105"
            onClick={() => onSelectRole("admin")}
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-gradient-to-br from-[#192a56]/10 to-[#2e86de]/10 rounded-lg group-hover:from-[#192a56]/20 group-hover:to-[#2e86de]/20 transition-all">
                  <Users className="w-6 h-6 text-[#192a56]" />
                </div>
                <CardTitle className="text-[#192a56]">
                  Administrador UGEL
                </CardTitle>
              </div>
              <CardDescription className="text-[#2f3640]">
                Gestiona instituciones, directores y valida información docente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => onSelectRole("admin")}
                className="w-full bg-[#00d2d3] hover:bg-[#00d2d3]/90 text-[#192a56] font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Acceder como Administrador
              </Button>
            </CardContent>
          </Card>

          {/* Director Card */}
          <Card
            className="bg-white border-0 shadow-3d transition-all duration-300 cursor-pointer group hover:shadow-3d-secondary hover:scale-105"
            onClick={() => onSelectRole("director")}
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-gradient-to-br from-[#00d2d3]/10 to-[#2e86de]/10 rounded-lg group-hover:from-[#00d2d3]/20 group-hover:to-[#2e86de]/20 transition-all">
                  <Building2 className="w-6 h-6 text-[#192a56]" />
                </div>
                <CardTitle className="text-[#192a56]">Director de IE</CardTitle>
              </div>
              <CardDescription className="text-[#2f3640]">
                Registra y actualiza información de docentes de tu institución
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => onSelectRole("director")}
                className="w-full bg-gradient-to-r from-[#2e86de] to-[#00d2d3] text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Acceder como Director
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

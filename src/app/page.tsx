"use client"

import { useState } from "react"
import { AdminDashboard } from "@/components/dashboards/admin-dashboard"
import { DirectorDashboard } from "@/components/dashboards/director-dashboard"
import { RoleSelector } from "@/components/role-selector"
import { DashboardLayout } from "@/components/layouts/dashboard-layout"

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<"admin" | "director" | null>(null)

  if (!selectedRole) {
    return <RoleSelector onSelectRole={setSelectedRole} />
  }

  return (
    <DashboardLayout role={selectedRole} onChangeRole={() => setSelectedRole(null)}>
      {selectedRole === "admin" && <AdminDashboard onChangeRole={() => setSelectedRole(null)} />}
      {selectedRole === "director" && <DirectorDashboard onChangeRole={() => setSelectedRole(null)} />}
    </DashboardLayout>
  )
}

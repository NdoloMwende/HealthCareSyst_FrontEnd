// src/components/common/sidebar-links.ts
import type { UserRole } from "../../store/auth.store";

export interface SidebarLink {
  label: string;
  path: string;
  icon?: string;   // optional icon class/name
  roles: UserRole[]; // who can see it
}

export const sidebarLinks: SidebarLink[] = [
  // Admin
  { label: "Dashboard", path: "/admin/dashboard", roles: ["admin"] },
  { label: "Users", path: "/admin/users", roles: ["admin"] },
  { label: "Analytics", path: "/admin/analytics", roles: ["admin"] },

  // Doctor
  { label: "Dashboard", path: "/doctor/dashboard", roles: ["doctor"] },
  { label: "Appointments", path: "/doctor/appointments", roles: ["doctor"] },
  { label: "Patients", path: "/doctor/patients", roles: ["doctor"] },

  // Patient
  { label: "Dashboard", path: "/patient/dashboard", roles: ["patient"] },
  { label: "My Appointments", path: "/patient/appointments", roles: ["patient"] },
  { label: "Profile", path: "/patient/profile", roles: ["patient"] },
];

// src/components/dashboard/PatientStatsCard.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";

interface PatientStatsCardProps {
  label: string;
  value: string;
  status: "normal" | "stable" | "warning";
  icon: LucideIcon;
}

export default function PatientStatsCard({ label, value, status, icon: Icon }: PatientStatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <Icon className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <Badge variant="secondary" className="mt-2 text-xs">
          {status === "normal" ? "Normal" : status === "stable" ? "Stable" : "Needs Review"}
        </Badge>
      </CardContent>
    </Card>
  );
}
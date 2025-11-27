// src/components/dashboard/DoctorStatsCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface DoctorStatsCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: LucideIcon;
}

export default function DoctorStatsCard({ title, value, change, positive, icon: Icon }: DoctorStatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground flex items-center mt-1">
          {positive ? (
            <span className="text-green-600 mr-1">↑</span>
          ) : (
            <span className="text-red-600 mr-1">↓</span>
          )}
          <span className={positive ? "text-green-600" : "text-red-600"}>{change}</span> from last week
        </p>
      </CardContent>
    </Card>
  );
}
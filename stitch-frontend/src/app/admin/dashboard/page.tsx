// src/app/admin/dashboard/page.tsx
import DoctorStatsCard from "@/components/dashboard/DoctorStatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Stethoscope, Calendar, DollarSign, Activity, UserPlus, AlertCircle } from "lucide-react";

const stats = [
  { title: "Total Patients", value: "8,429", change: "+18%", positive: true, icon: Users },
  { title: "Active Doctors", value: "142", change: "+5", positive: true, icon: Stethoscope },
  { title: "Appointments Today", value: "289", change: "+23", positive: true, icon: Calendar },
  { title: "Revenue This Month", value: "$124.8k", change: "+12.5%", positive: true, icon: DollarSign },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here's how the hospital is doing today</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <DoctorStatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Activity + Alerts */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" /> Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* You can extract this to NotificationCard later */}
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <UserPlus className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">New patient registered: Maria Garcia</p>
                  <p className="text-xs text-muted-foreground">5 min ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" /> System Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-yellow-200 bg-yellow-50 p-3">
                <p className="text-sm">Low stock: Paracetamol</p>
                <Badge variant="outline" className="h-5 text-xs">Restock</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Quick Actions</CardTitle></CardHeader>
            <CardContent className="grid gap-3">
              <Button variant="secondary" className="w-full justify-start"><UserPlus className="mr-2 h-4 w-4" /> Register Doctor</Button>
              <Button variant="secondary" className="w-full justify-start"><Users className="mr-2 h-4 w-4" /> Manage Staff</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
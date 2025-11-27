import DoctorStatsCard from "@/components/dashboard/DoctorStatsCard";
import AppointmentCard from "@/components/dashboard/AppointmentCard";
import { Calendar, Users, Clock, Activity } from "lucide-react";

const stats = [
  { title: "Total Patients", value: "1,248", change: "+12%", positive: true, icon: Users },
  { title: "Today's Appointments", value: "18", change: "+3", positive: true, icon: Calendar },
  { title: "Avg. Wait Time", value: "12 min", change: "-2 min", positive: true, icon: Clock },
  { title: "Patient Satisfaction", value: "98%", change: "+2%", positive: true, icon: Activity },
];

const appointments = [
  { patient: "Sarah Johnson", time: "10:30 AM", type: "Check-up", avatar: "SJ" },
  { patient: "Michael Chen", time: "11:15 AM", type: "Follow-up", avatar: "MC" },
  { patient: "Emma Williams", time: "02:00 PM", type: "New Patient", avatar: "EW" },
];

export default function DoctorDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, Doctor!</h1>
        <p className="text-muted-foreground">Here's your day at a glance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <DoctorStatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Calendar className="h-5 w-5" /> Today's Schedule
          </h2>
          {appointments.map((appt) => (
            <AppointmentCard key={appt.patient} {...appt} />
          ))}
        </div>

        <div className="bg-card border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          {/* Add QuickActionsCard later */}
        </div>
      </div>
    </div>
  );
}
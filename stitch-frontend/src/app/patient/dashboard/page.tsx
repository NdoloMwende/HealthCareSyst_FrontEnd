// src/app/patient/dashboard/page.tsx  
import PatientStatsCard from "@/components/dashboard/PatientStatsCard";
import AppointmentCard from "@/components/dashboard/AppointmentCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Activity, Pill, FileText, MessageSquare, Phone, ArrowRight } from "lucide-react";

const healthMetrics = [
  { label: "Blood Pressure", value: "118/76", status: "normal" as const, icon: Activity },
  { label: "Heart Rate",      value: "72 bpm", status: "normal" as const, icon: Heart },
  { label: "Blood Glucose",   value: "98 mg/dL", status: "normal" as const, icon: Activity },
  { label: "Weight",          value: "68 kg",   status: "stable" as const, icon: Activity },
];

const appointments = [
  { patient: "Dr. Michael Chen", time: "10:00 AM", type: "Cardiology Check-up", avatar: "MC" },
  { patient: "Dr. Sarah Lee",     time: "02:30 PM", type: "Follow-up",           avatar: "SL" },
];

const medications = [
  { name: "Amlodipine", dosage: "5mg",   time: "Morning", taken: true },
  { name: "Metformin",  dosage: "500mg", time: "Evening", taken: false },
];

export default function PatientDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex!</h1>
        <p className="text-muted-foreground">Your health overview — everything looks great</p>
      </div>

      {/* Health Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {healthMetrics.map((metric) => (
          <PatientStatsCard key={metric.label} {...metric} />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Appointments */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Calendar className="h-5 w-5" /> Upcoming Appointments
          </h2>
          {appointments.map((appt) => (
            <AppointmentCard
              key={appt.patient}
              patient={appt.patient}
              time={appt.time}
              type={appt.type}
              avatar={appt.avatar}
            />
          ))}
          <Button className="w-full">
            Book New Appointment <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Medications */}
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Pill className="h-5 w-5" /> Today's Medications
            </h2>
            <div className="space-y-3">
              {medications.map((med) => (
                <div key={med.name} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{med.name}</p>
                    <p className="text-xs text-muted-foreground">{med.dosage} • {med.time}</p>
                  </div>
                  <Badge variant={med.taken ? "default" : "secondary"}>
                    {med.taken ? "Taken" : "Pending"}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid gap-3">
              <Button variant="secondary" className="w-full justify-start"><FileText className="mr-2 h-4 w-4" /> View Records</Button>
              <Button variant="secondary" className="w-full justify-start"><MessageSquare className="mr-2 h-4 w-4" /> Message Doctor</Button>
              <Button variant="secondary" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                <Phone className="mr-2 h-4 w-4" /> Emergency Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

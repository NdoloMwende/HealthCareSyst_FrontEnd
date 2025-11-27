// src/app/doctor/appointments/page.tsx
import AppointmentCard from "@/components/dashboard/AppointmentCard";
import  EmptyState  from "@/components/common/EmptyState";

const mockAppointments = [
  // Laban will replace this with real data
  { patient: "Sarah Johnson", time: "10:30 AM", type: "Check-up", avatar: "SJ" },
];

export default function DoctorAppointmentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Appointments</h1>

      {mockAppointments.length === 0 ? (
        <EmptyState
          title="No appointments"
          description="You have no upcoming appointments today"
        />
      ) : (
        <div className="space-y-4">
          {mockAppointments.map((appt) => (
            <AppointmentCard key={appt.patient} {...appt} />
          ))}
        </div>
      )}
    </div>
  );
}
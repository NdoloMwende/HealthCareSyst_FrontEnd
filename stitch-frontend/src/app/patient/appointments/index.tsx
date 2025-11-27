// src/app/patient/appointments/index.tsx
import EmptyState from "@/components/common/EmptyState";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function PatientAppointmentsPage() {
  const appointments: any[] = []; // Laban will fill this

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Appointments</h1>
        <Button asChild>
          <a href="/patient/appointments/new">
            <Plus className="mr-2 h-4 w-4" /> New Appointment
          </a>
        </Button>
      </div>

      {appointments.length === 0 ? (
        <EmptyState
          title="No appointments booked"
          description="You haven't scheduled any appointments yet"
          actionLabel="Book Appointment"
          onAction={() => window.location.href = "/patient/appointments/new"}
        />
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          Appointments will appear here
        </div>
      )}
    </div>
  );
}
// src/app/patient/appointments/new.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export default function NewAppointmentPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Book New Appointment</h1>
        <p className="text-muted-foreground">Select a doctor and preferred time</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" /> Choose Date & Time
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center py-12 text-muted-foreground">
            <p>Calendar picker will be integrated here</p>
            <p className="text-sm mt-2">Laban will connect real availability</p>
          </div>
          <div className="flex gap-3 justify-end">
            <Button variant="outline">Cancel</Button>
            <Button>Confirm Booking</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
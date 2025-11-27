// src/app/patient/profile/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function PatientProfilePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Profile</h1>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>Alex Thompson</CardTitle>
              <p className="text-muted-foreground">Patient ID: PT-00421</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          <p>Profile information will appear here once connected to backend.</p>
        </CardContent>
      </Card>
    </div>
  );
}
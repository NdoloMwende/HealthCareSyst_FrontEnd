// src/components/dashboard/AppointmentCard.tsx
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface AppointmentCardProps {
  patient: string;
  time: string;
  type: string;
  avatar: string;
}

export default function AppointmentCard({ patient, time, type, avatar }: AppointmentCardProps) {
  return (
    <Card className="p-4 hover:bg-accent/50 transition">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>{avatar}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{patient}</p>
            <p className="text-sm text-muted-foreground">{type}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-medium">{time}</p>
          <Badge variant="secondary" className="mt-1">
            30 min
          </Badge>
        </div>
      </div>
    </Card>
  );
}
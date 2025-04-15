import { Calendar, MessageSquare, Video, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Therapist } from "@/types/therapist";

interface TherapistCardProps {
  therapist: Therapist;
  onBook: () => void;
  onMessage: () => void;
}

export function TherapistCard({
  therapist,
  onBook,
  onMessage,
}: TherapistCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="space-y-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={therapist.avatar} alt={therapist.name} />
            <AvatarFallback>
              {therapist.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="font-semibold">{therapist.name}</h3>
            <p className="text-sm text-muted-foreground">
              {therapist.licenseType} · {therapist.yearsOfExperience} years
              experience
            </p>
            <p className="text-sm text-muted-foreground">
              {therapist.languages.join(", ")}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {therapist.specialties.map((specialty) => (
              <Badge key={specialty} variant="outline">
                {specialty}
              </Badge>
            ))}
          </div>
          <p className="text-sm">{therapist.introduction}</p>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <div className="flex gap-2">
              {therapist.sessionInfo.modes.includes("video") && (
                <Video className="h-4 w-4" />
              )}
              {therapist.sessionInfo.modes.includes("phone") && (
                <Phone className="h-4 w-4" />
              )}
            </div>
            <span className="text-muted-foreground">
              ${therapist.sessionInfo.cost}/session
            </span>
          </div>

          <div className="flex gap-2">
            <Button onClick={onBook} className="flex-1">
              <Calendar className="mr-2 h-4 w-4" />
              Book Session
            </Button>
            <Button variant="outline" onClick={onMessage}>
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

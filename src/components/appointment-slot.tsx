import { Clock, MapPin, User,Calendar } from "lucide-react";
export type AppointmentTimeSlotProps = {
  vetName: string;
  locationName: string;
  startTime: string;
  endTime: string;
  scheduleGroup: string;
};
export function AppointmentTimeSlot({
  vetName,
  locationName,
  startTime,
  endTime,
  scheduleGroup
}: AppointmentTimeSlotProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm space-y-2">
      <div className="flex items-center text-sm text-gray-600">
        <User className="size-4 text-green-600 mr-2" />
        <span>{vetName}</span>
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <MapPin className="size-4 text-green-600 mr-2" />
        <span>{locationName}</span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="size-4 text-green-600 mr-2" />
          <span>
            {startTime} - {endTime}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="size-4 text-green-600 mr-2" />
          <span>{scheduleGroup.replaceAll(",",", ")}</span>
        </div>
      </div>
    </div>
  );
}

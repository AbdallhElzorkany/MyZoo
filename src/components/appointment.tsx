import { Calendar, MapPin, User } from "lucide-react";
import { format } from "date-fns";
export type AppointmentCardProps = {
  appointmentDate: string;
  purpose: string;
  status: string;
  vet: string;
  location: string;
};

export function AppointmentCard({
  appointmentDate,
  purpose,
  status,
  vet,
  location,
}: AppointmentCardProps) {
  return (
    <div className="border border-gray-100 rounded-md p-4 bg-white shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="w-full">
          <div className="flex justify-between items-center gap-2 mb-2">
            <h3 className="text-lg font-medium text-gray-900">{purpose}</h3>
            <p className="py-1 px-2 border-1 rounded-full text-sm text-green-600">
              {status}
            </p>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <Calendar className="text-green-600 mr-1.5 h-4 w-4 flex-shrink-0 " />
              <span>
                {format(appointmentDate, "MMMM d, yyyy")}{" "}
                {format(appointmentDate, "h:mm a")}
              </span>
            </div>

            <div className="flex items-center mt-1 text-sm text-gray-500">
              <User className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span>{vet}</span>
            </div>

            <div className="flex items-center mt-1 text-sm text-gray-500">
              <MapPin className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { format } from "date-fns";
import { Bell, Clock, User, PawPrint } from "lucide-react";

export type NotificationCardProps = {
  title: string;
  message: string;
  createdAt: string;
  notificationType: string;
  stat: string;
  vet: string;
  patient: string;
};

export function NotificationCard({
  title,
  message,
  createdAt,
  notificationType,
  stat,
  vet,
  patient,
}: NotificationCardProps) {
  return (
    <div className={`rounded-md mb-2 border p-4 bg-gray-50 border-gray-100`}>
      <div className="flex items-start">
        <div className="p-1 rounded-full bg-green-100">
          <Bell className="text-green-600 not-sm:size-5" />
        </div>
        <div className="ml-3  flex-1">
          <div className="flex justify-between">
            <h3 className="text-sm font-medium text-gray-900">{title}</h3>
            <span
              className={`text-green-600 border  rounded-full px-2.5 py-0.5 text-xs font-medium`}
            >
              {stat}
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-600">{message}</p>

          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {patient && (
              <div className="flex items-center text-xs text-gray-500">
                <PawPrint className="mr-1 h-3 w-3" />
                <span className="font-medium">Patient:</span> {patient}
              </div>
            )}
            {vet && (
              <div className="flex items-center text-xs text-gray-500">
                <User className="mr-1 h-3 w-3" />
                <span className="font-medium">Vet:</span> {vet}
              </div>
            )}
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="mr-1 h-3 w-3" />
              <span className="font-medium">Created:</span>{" "}
              {format(createdAt, "MMMM d, yyyy")} at{" "}
              {format(createdAt, "h:mm a")}
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <Bell className="mr-1 h-3 w-3" />
              <span className="font-medium">Type:</span> {notificationType}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

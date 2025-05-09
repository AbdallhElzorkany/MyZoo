"use client";
import { format } from "date-fns";
import { Pill, Calendar } from "lucide-react";

export type PrescriptionCardProps = {
  medicationName: string;
  dosage: string;
  frequency: string;
  instructions: string;
  startDate: string;
  endDate: string;
  patient: string;
};

export function PrescriptionCard({
  medicationName,
  dosage,
  frequency,
  instructions,
  startDate,
  endDate,
  patient,
}: PrescriptionCardProps) {
  return (
    <div className="border border-gray-100 rounded-md p-4 bg-white shadow-sm">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Pill className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-medium text-gray-900">
              {medicationName}
            </h3>
          </div>
          <p className="text-sm text-gray-500 mb-3">For {patient}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-3">
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-1">Dosage:</span> {dosage}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium mr-1">Frequency:</span> {frequency}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span className="font-medium mr-1">Start Date:</span>
              {format(startDate, "MMMM d, yyyy")}
              {" at "}
              {format(startDate, "h:mm a")}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span className="font-medium mr-1">End Date:</span>
              {format(endDate, "MMMM d, yyyy")}
              {" at "}
              {format(endDate, "h:mm a")}
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-md mb-3">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Instructions: </span>
              {instructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

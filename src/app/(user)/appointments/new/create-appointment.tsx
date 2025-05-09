"use client";
import { useActionState } from "react";
import Link from "next/link";
import { createAppointment, FormState } from "@/actions/appointment";
import Form from "next/form";
import { LoadingAuth } from "@/app/(auth)/loadingAuth";
type props = {
  vetName: string;
  locationName: string;
  startTime: string;
  endTime: string;
  scheduleGroup: string;
};
export default function NewAppointmentForm({
  id,
  data,
}: {
  id: string;
  data: props[];
}) {
  const initialState: FormState = {
    errors: {},
  };
  const [state, FormAction, isPending] = useActionState(
    createAppointment,
    initialState
  );
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className=" px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl text-center font-semibold text-gray-900">
            Appointment Details
          </h2>
        </div>
        <Form action={FormAction}>
          <div className="p-6 space-y-6">
            {state?.errors.failed ? (
              <div className="rounded-md  bg-red-50 text-center p-3 text-sm text-red-500">
                {state?.errors.failed}
              </div>
            ) : null}
            {/* Purpose */}
            <input type="hidden" name="id" value={id} />
            <div className="space-y-2">
              <label
                htmlFor="purpose"
                className="block text-sm font-medium text-gray-700"
              >
                Purpose <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="purpose"
                name="purpose"
                className={`w-full rounded-md border ${
                  state?.errors.purpose ? "border-red-500" : "border-gray-300"
                } px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
              />

              {state?.errors.purpose && (
                <p className="text-sm text-red-500">{state.errors.purpose}</p>
              )}
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="appointmentDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="appointmentDate"
                    type="date"
                    name="appointmentDate"
                    className={`w-full rounded-md border ${
                      state?.errors.appointmentDate
                        ? "border-red-500"
                        : "border-gray-300"
                    } pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                    min={new Date().toISOString().split("T")[0]}
                  />
                  {state?.errors.appointmentDate && (
                    <p className="text-sm text-red-500 col-span-2">
                      {state.errors.appointmentDate}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="appointmentTime"
                  className="block text-sm font-medium text-gray-700"
                >
                  Time <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="appointmentTime"
                    type="time"
                    name="appointmentTime"
                    className={`w-full rounded-md border ${
                      state?.errors.appointmentTime
                        ? "border-red-500"
                        : "border-gray-300"
                    } pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
                  />
                </div>
                {state?.errors.appointmentTime && (
                  <p className="text-sm text-red-500 col-span-2">
                    {state.errors.appointmentTime}
                  </p>
                )}
              </div>
            </div>

            {/* Veterinarian */}
            <div className="space-y-2">
              <label
                htmlFor="vetName"
                className="block text-sm font-medium text-gray-700"
              >
                Vet <span className="text-red-500">*</span>
              </label>
              <select
                id="vetName"
                name="vetName"
                className={`w-full rounded-md border ${
                  state?.errors.locationName
                    ? "border-red-500"
                    : "border-gray-300"
                } px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
              >
                <option value="">Select vet name</option>
                {data.map((obj, index: number) => (
                  <option key={index} value={obj.vetName}>
                    {obj.vetName}
                  </option>
                ))}
              </select>
              {state?.errors.vetName && (
                <p className="text-sm text-red-500">{state.errors.vetName}</p>
              )}
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label
                htmlFor="locationName"
                className="block text-sm font-medium text-gray-700"
              >
                Location <span className="text-red-500">*</span>
              </label>
              <select
                id="locationName"
                name="locationName"
                className={`w-full rounded-md border ${
                  state?.errors.locationName
                    ? "border-red-500"
                    : "border-gray-300"
                } px-3 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent`}
              >
                <option value="">Select location</option>
                {data.map((obj, index: number) => (
                  <option key={index} value={obj.locationName}>
                    {obj.locationName}
                  </option>
                ))}
              </select>
              {state?.errors.locationName && (
                <p className="text-sm text-red-500">
                  {state.errors.locationName}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-between p-6 border-t border-gray-200">
            <Link
              href="/appointments"
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className={`px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700 w-52   ${
                isPending ? "opacity-75 cursor-not-allowed" : ""
              }`}
              disabled={isPending}
            >
              {isPending ? <LoadingAuth /> : "Schedule Appointment"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

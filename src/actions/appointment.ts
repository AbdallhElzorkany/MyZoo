"use server";
import { redirect } from "next/navigation";
import { format } from "date-fns";
export type Errors = {
  appointmentDate?: string;
  appointmentTime?: string;
  purpose?: string;
  vetName?: string;
  locationName?: string;
  failed?: string;
};
export type FormState = {
  errors: Errors;
};
export async function createAppointment(
  prevState: FormState | undefined,
  formData: FormData
) {
  const id = formData.get("id") as string;
  const appointmentDates = formData.get("appointmentDate") as string;
  const appointmentTime = formData.get("appointmentTime") as string;
  const purpose = formData.get("purpose") as string;
  const vetName = formData.get("vetName") as string;
  const locationName = formData.get("locationName") as string;
  const errors: Errors = {};
  const idNumber = parseInt(id);
  const appointmentDate = `${format(
    new Date(`${appointmentDates} ${appointmentTime}`),
    "MM-dd-yyyy"
  )} ${format(
    new Date(`${appointmentDates} ${appointmentTime}`).toISOString(),
    "hh:mm a"
  )}`;

  console.log(JSON.stringify({
    id: idNumber,
    appointmentDate,
    purpose,
    vetName,
    locationName,
  }));
  if (!appointmentDates) {
    errors.appointmentDate = "Appointment Date is required";
  }
  if (!appointmentTime) {
    errors.appointmentTime = "Appointment Time is required";
  }
  if (!purpose) {
    errors.purpose = "Purpose is required";
  }
  if (!vetName) {
    errors.vetName = "Vet Name is required";
  }
  if (!locationName) {
    errors.locationName = "Location Name is required";
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const req = await fetch(
    "https://rahmanx.runasp.net/api/v1/Appointments/CreateAppointment-v2",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: idNumber,
        appointmentDate,
        purpose,
        vetName,
        locationName,
      }),
    }
  );
  
  if (!req.ok) {
    errors.failed = "Failed to create appointment";
    return { errors };
  }
  
  if (req.status === 201) {
    redirect("/appointments");
  }
}

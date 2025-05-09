import Header from "../../Header";
import NewAppointmentForm from "./create-appointment";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import {
  AppointmentTimeSlot,
  AppointmentTimeSlotProps,
} from "@/components/appointment-slot";
const CreatingAppointmentPage = async () => {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
  const id = session.user?.id as string;
  const req = await fetch(
    "https://rahmanx.runasp.net/api/v1/ScheduleTime/available"
  );
  const data = await req.json();
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mt-2">
            Schedule New Appointment
          </h1>
          <p className="text-gray-600">
            Fill out the form below to schedule an appointment for your pet
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <div className="grid grid-cols-3 not-xl:grid-cols-2 content-start gap-4">
            {data.map((slot: AppointmentTimeSlotProps, index: number) => (
              <AppointmentTimeSlot
                key={index}
                vetName={slot.vetName}
                locationName={slot.locationName}
                startTime={slot.startTime}
                endTime={slot.endTime}
                scheduleGroup={slot.scheduleGroup}
              />
            ))}
          </div>
          <NewAppointmentForm id={id} data={data} />
        </div>
      </main>
    </div>
  );
};

export default CreatingAppointmentPage;

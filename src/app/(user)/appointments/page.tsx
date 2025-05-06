import Header from "../Header";
import Link from "next/link";
import {
  AppointmentCard,
  AppointmentCardProps,
} from "@/components/appointment";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
const AppointmentsPage = async () => {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
  const Appointments = await fetch(
    `https://rahmanx.runasp.net/api/v1/patients/${session.user?.id}/upcoming-appointments`
  );
  const AppointmentsArray: AppointmentCardProps[] = await Appointments.json();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="lg:max-w-7/12 not-lg:container mx-auto px-4 py-8">
        <div className="flex not-md:flex-col not-md:text-center  flex-wrap justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              My Appointments
            </h1>
            <p className="text-gray-600">Manage your pet&apos;s appointments</p>
          </div>
          <Link
            href="/appointments/new"
            className="rounded-md text-center not-md:mt-2 bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Book New Appointment
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="space-y-4">
              {AppointmentsArray.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">
                    You don&apos;t have any upcoming appointments.
                  </p>
                  <Link
                    href="/appointments/new"
                    className="mt-2 inline-block text-sm font-medium text-green-600 hover:text-green-700"
                  >
                    Book an appointment
                  </Link>
                </div>
              ) : (
                AppointmentsArray.map((appointment, index) => (
                  <AppointmentCard
                    key={index}
                    appointmentDate={appointment.appointmentDate}
                    purpose={appointment.purpose}
                    status={appointment.status}
                    vet={appointment.vet}
                    location={appointment.location}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppointmentsPage;

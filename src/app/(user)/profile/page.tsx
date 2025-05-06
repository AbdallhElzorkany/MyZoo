import Link from "next/link";
import { Bell, Calendar, Pill, Phone, Mail } from "lucide-react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Header from "../Header";
import Footer from "@/components/Footer";
export default async function ProfilePage() {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
  const req = await fetch(
    `https://rahmanx.runasp.net/api/v1/patients/${session?.user?.id}`
  );
  const { fullName, email, address, phoneNumber, isActive } = await req.json();
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7/12 not-lg:max-w-11/12 mx-auto px-4 py-8">
        <div className="mb-6 ml-1">
          <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600">Welcome back, {fullName}</p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium mb-4 text-gray-900">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-3">
                <div>
                  <p className="text-sm font-medium text-gray-500">Name</p>
                  <p className="mt-1">{fullName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="mt-1">{email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="mt-1">{phoneNumber}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Address</p>
                  <p className="mt-1">{address}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Active</p>
                  <p className="mt-1">{isActive ? "Yes" : "No"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">ID</p>
                  <p className="mt-1">{session.user?.id}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Quick Links
              </h2>

              <div className="space-y-3">
                <Link
                  href="/appointments"
                  className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <Calendar className="text-green-600 size" />
                  </div>
                  <div>
                    <h3 className="font-medium">Appointments</h3>
                    <p className="text-sm text-gray-500">
                      View and manage appointments
                    </p>
                  </div>
                </Link>

                <Link
                  href="/prescriptions"
                  className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Pill className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Prescriptions</h3>
                    <p className="text-sm text-gray-500">
                      View and refill prescriptions
                    </p>
                  </div>
                </Link>

                <Link
                  href="/notifications"
                  className="flex items-center p-3 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <Bell className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Notifications</h3>
                    <p className="text-sm text-gray-500">
                      View your notifications and alerts
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Need Help?
              </h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="text-green-600 mr-1" />
                  <span className="text-sm mr-1">Call us:</span>
                  <span className="text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-green-600 mr-1" />
                  <span className="text-sm mr-1">Email us:</span>
                  <span className="text-sm">support@myzoovet.com</span>
                </div>
                <div className="mt-3">
                  <Link
                    href="mailto:support@myzoovet.com"
                    className="block w-full text-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

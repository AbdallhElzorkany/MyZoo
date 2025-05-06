import Header from "../Header";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import {
  NotificationCard,
  NotificationCardProps,
} from "@/components/notification";
const NotificationsPage = async () => {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
  const req = await fetch(
    `https://rahmanx.runasp.net/api/v1/patients/${session.user?.id}/with-notifications`
  );
  const data = await req.json();
  const { notifications }: { notifications: NotificationCardProps[] } = data;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="lg:max-w-7/12 not-lg:container mx-auto px-4 py-8">
        <div className="mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
            <p className="text-gray-600">
              Stay updated with important information about your pets
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            {notifications.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  You don&apos;t have any notifications.
                </p>
              </div>
            ) : (
              notifications.map((notification, index) => (
                <NotificationCard
                  key={index}
                  title={notification.title}
                  message={notification.message}
                  createdAt={notification.createdAt}
                  notificationType={notification.notificationType}
                  stat={notification.stat}
                  vet={notification.vet}
                  patient={notification.patient}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotificationsPage;

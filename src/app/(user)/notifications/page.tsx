import Header from "../Header";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
const NotificationsPage =async () => {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
  return (
    <div>
      <Header />
      <main></main>
    </div>
  );
};

export default NotificationsPage;

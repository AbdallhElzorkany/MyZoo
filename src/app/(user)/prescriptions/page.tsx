import Header from "../Header";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import {
  PrescriptionCard,
  PrescriptionCardProps,
} from "@/components/prescription";
const PrescriptionsPage = async () => {
  const session = await auth();
  if (!session) {
    redirect("/signin");
  }
  const prescriptionsReq = await fetch(
    `https://rahmanx.runasp.net/api/v1/patients/${session.user?.id}/with-prescriptions`
  );
  const prescriptionsData = await prescriptionsReq.json();
  const { prescriptions }: { prescriptions: PrescriptionCardProps[] } =
    prescriptionsData;
  return (
    <div>
      <Header />
      <main className="lg:max-w-7/12 not-lg:container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">My Prescriptions</h1>
          <p className="text-gray-600">
            Manage your pet&apos;s medications and refills
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="space-y-4">
              {prescriptions.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">
                    You don&apos;t have any prescriptions.
                  </p>
                </div>
              ) : (
                prescriptions.map((prescription, index) => (
                  <PrescriptionCard
                    key={index}
                    medicationName={prescription.medicationName}
                    dosage={prescription.dosage}
                    frequency={prescription.frequency}
                    instructions={prescription.instructions}
                    startDate={prescription.startDate}
                    endDate={prescription.endDate}
                    patient={prescription.patient}
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

export default PrescriptionsPage;

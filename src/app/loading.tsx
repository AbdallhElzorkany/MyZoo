import { PawPrint } from "lucide-react";
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <PawPrint className="animate-spin text-green-600 size-32" />
    </div>
  );
}

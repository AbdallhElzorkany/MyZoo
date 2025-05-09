import { PawPrint } from "lucide-react";
export function LoadingAuth() {
  return (
    <div className="flex items-center justify-center">
      <PawPrint className="animate-spin text-white mr-2 size-6" />
    </div>
  );
}

import { PawPrint } from "lucide-react";
const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-8">
      <div className="container flex items-center gap-4 px-4 md:px-6 md:flex-row justify-between m-auto">
        <div className="flex items-center text-green-600 gap-2">
          <PawPrint className="size-8" />
          <span className="text-xl font-bold">MyZoo</span>
        </div>
        <p className="text-center text-sm text-gray-500 md:text-left">
          &copy; {new Date().getFullYear()} MyZoo Veterinary Clinic. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import { PawPrint } from "lucide-react";
const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 border-green-600 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between m-auto">
        <div className="flex items-center text-green-600 gap-2">
          {/* paw */}
          <PawPrint className="size-8" />
          <span className="text-xl font-bold">MyZoo</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#services"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="#team"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Our Team
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-green-600 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

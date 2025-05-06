import Link from "next/link";
import { PawPrint, CircleUserRound } from "lucide-react";
import { auth } from "@/auth";
import SignOut from "./SignOut";
const Header = async () => {
  const session = await auth();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 border-green-600 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between m-auto">
        <div className="flex items-center ml-1 text-green-600 gap-2">
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
        <div className="flex items-center not-lg:mr-2 gap-4 not-md:gap-1">
          {session?.user?.name ? (
            <>
              <Link
                href="/profile"
                className="p-1 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-bold hover:from-green-600 hover:to-green-800 focus:outline-none transition-all"
              >
                <CircleUserRound className="size-6" />
              </Link>
              <SignOut />
            </>
          ) : (
            <Link
              className="px-4 py-1 rounded-full bg-gradient-to-r text-sm from-green-500 to-green-700 text-white font-semibold hover:from-green-600 hover:to-green-800 transition-all"
              href="/signin"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

import SignOut from "@/components/SignOut";
import { CircleUserRound, PawPrint } from "lucide-react";
import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex text-lg font-bold text-green-600 items-center gap-2"
          >
            <PawPrint className="size-8" />
            <span>MyZoo</span>
          </Link>
          <div className="flex items-center not-lg:mr-2 gap-4 not-md:gap-1">
            <Link
              href="/profile"
              className="p-1 rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white font-bold hover:from-green-600 hover:to-green-800 focus:outline-none transition-all "
            >
              <CircleUserRound className="size-6" />
            </Link>
            <SignOut />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header
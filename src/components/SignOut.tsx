import { signOut } from "@/auth";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="px-4 font-semibold py-1 text-sm rounded-full bg-gradient-to-r from-green-500 to-green-700 text-white cursor-pointer hover:from-green-600 hover:to-green-800 focus:outline-none transition-all">
        Sign Out
      </button>
    </form>
  );
}

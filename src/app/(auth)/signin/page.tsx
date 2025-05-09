"use client";
import Link from "next/link";
import Form from "next/form";
import { PawPrint } from "lucide-react";
import { useActionState } from "react";
import { signInUser, SignInFormState } from "@/actions/auth";
import { LoadingAuth } from "../loadingAuth";
export default function SignInPage() {
  const initialState: SignInFormState = {
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    signInUser,
    initialState
  );
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container flex justify-center mx-auto px-4 py-4 re">
          <div className="flex  text-green-600 w-fit items-center gap-2">
            <PawPrint className="size-8" />
            <span className="text-lg font-bold">MyZoo SignIn</span>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
            <p className="mt-2 text-gray-600">
              Please sign in to your account to continue.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-md">
            <Form action={formAction} className="space-y-4">
              {state?.errors.failed ? (
                <div className="rounded-md bg-red-50 text-center p-3 text-sm text-red-500">
                  {state?.errors.failed}
                </div>
              ) : null}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`mt-1 block w-full rounded-md border ${
                    state?.errors.email ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500`}
                  placeholder="john.doe@example.com"
                />
                {state?.errors.email ? (
                  <p className="mt-1 text-xs text-red-500">
                    {state?.errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={`mt-1 block w-full rounded-md border ${
                    state?.errors.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500`}
                  placeholder="••••••••"
                />
                {state?.errors.password ? (
                  <p className="mt-1 text-xs text-red-500">
                    {state?.errors.password}
                  </p>
                ) : null}
              </div>

              <div>
                <button
                  disabled={isPending}
                  type="submit"
                  className="w-full rounded-md bg-green-600 px-4 py-2 text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-75"
                >
                  {isPending ? <LoadingAuth /> : "Sign in"}
                </button>
              </div>
            </Form>

            <div className="mt-6 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-medium text-green-600 hover:underline"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

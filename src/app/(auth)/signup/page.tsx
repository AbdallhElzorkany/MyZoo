"use client";
import Link from "next/link";
import Form from "next/form";
import { PawPrint } from "lucide-react";
import { useActionState } from "react";
import { signUpUser, FormState } from "@/actions/auth";
import { LoadingAuth } from "../loadingAuth";
export default function SignUpPage() {
  const initialState: FormState = {
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    signUpUser,
    initialState
  );
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container flex justify-center mx-auto px-4 py-4 re">
          <div className="flex  text-green-600 w-fit items-center gap-2">
            <PawPrint className="size-8" />
            <span className="text-lg font-bold">MyZoo SignUp</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-4">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Create an Account
          </h1>
          <p className="mt-1 text-gray-600">
            Join us to manage your pet&apos;s health and wellness easily.
          </p>
        </div>
        <div className="mx-auto max-w-md">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <Form action={formAction} className="space-y-4">
              {state?.errors.failed ? (
                <div className="rounded-md bg-red-50 text-center p-3 text-sm text-red-500">
                  {state?.errors.failed}
                </div>
              ) : null}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`mt-1 block w-full rounded-md border ${
                      state?.errors.firstName
                        ? "border-red-500"
                        : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500`}
                    placeholder="John"
                  />
                  <p className="text-red-500 ml-1 text-sm">
                    {state?.errors.firstName}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`mt-1 block w-full rounded-md border ${
                      state?.errors.lastName
                        ? "border-red-500"
                        : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500`}
                    placeholder="Doe"
                  />
                  <p className="text-red-500 ml-1 text-sm">
                    {state?.errors.lastName}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="displayName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Display Name
                  </label>
                  <input
                    type="text"
                    id="displayName"
                    name="displayName"
                    className={`mt-1 block w-full rounded-md border ${
                      state?.errors.displayName
                        ? "border-red-500"
                        : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500`}
                    placeholder="JohnDoe"
                  />
                  <p className="text-red-500 ml-1 text-sm">
                    {state?.errors.displayName}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className={`mt-1 block w-full rounded-md border ${
                      state?.errors.phoneNumber
                        ? "border-red-500"
                        : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500`}
                    placeholder="(123) 456-7890"
                  />
                  <p className="text-red-500 ml-1 text-sm">
                    {state?.errors.phoneNumber}
                  </p>
                </div>
              </div>

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
                <p className="text-red-500 ml-1 text-sm">
                  {state?.errors.email}
                </p>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
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
                <p className="text-red-500 ml-1 text-sm">
                  {state?.errors.password}
                </p>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className={`mt-1 block w-full rounded-md border ${
                    state?.errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500`}
                  placeholder="••••••••"
                />
                <p className="text-red-500 ml-1 text-sm">
                  {state?.errors.confirmPassword}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className={`mt-1 block w-full rounded-md border ${
                      state?.errors.country
                        ? "border-red-500"
                        : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500`}
                    placeholder="Egypt"
                  />
                  <p className="text-red-500 ml-1 text-sm">
                    {state?.errors.country}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className={`mt-1 block w-full rounded-md border ${
                      state?.errors.city ? "border-red-500" : "border-gray-300"
                    } px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500`}
                    placeholder="Cairo"
                  />
                  <p className="text-red-500 ml-1 text-sm">
                    {state?.errors.city}
                  </p>
                </div>
              </div>
              <div>
                <label
                  htmlFor="street"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street
                </label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  className={`mt-1 block w-full rounded-md border ${
                    state?.errors.street ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500`}
                  placeholder="123 Main St"
                />
                <p className="text-red-500 ml-1 text-sm">
                  {state?.errors.street}
                </p>
              </div>

              <div>
                <button
                  disabled={isPending}
                  type="submit"
                  className="w-full rounded-md bg-green-600 px-4 py-2 text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-75"
                >
                  {isPending ? <LoadingAuth /> : "Create Account"}
                </button>
              </div>
            </Form>

            <div className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="font-medium text-green-600 hover:underline"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

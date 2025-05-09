"use server";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
export type Errors = {
  email?: string;
  password?: string;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  street?: string;
  city?: string;
  country?: string;
  phoneNumber?: string;
  confirmPassword?: string;
  failed?: string;
};
export type FormState = {
  errors: Errors;
};
export async function signUpUser(prevState: FormState | undefined, formData: FormData) {
  "use server";
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const displayName = formData.get("displayName") as string;
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const street = formData.get("street") as string;
  const city = formData.get("city") as string;
  const country = formData.get("country") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const errors: Errors = {};
  if (!email) {
    errors.email = "Email is required";
  }
  if (!password) {
    errors.password = "Password is required";
  }
  if (
    password.match(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
    ) === null &&
    password.length > 0
  ) {
    errors.password =
      "Password must be 8-16 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
  }
  if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
  if (!displayName) {
    errors.displayName = "Display Name is required";
  }
  if (!firstName) {
    errors.firstName = "First Name is required";
  }
  if (!lastName) {
    errors.lastName = "Last Name is required";
  }
  if (!street) {
    errors.street = "Street is required";
  }
  if (!city) {
    errors.city = "City is required";
  }
  if (!country) {
    errors.country = "Country is required";
  }
  if (!phoneNumber) {
    errors.phoneNumber = "Phone Number is required";
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  const signup = await fetch(
    "https://rahmanx.runasp.net/api/v1/Account/register-Patient",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        displayName,
        firstName,
        lastName,
        street,
        city,
        country,
        phoneNumber,
      }),
    }
  );
  if (!signup.ok) {
    errors.failed = "Failed to sign up";
    return { errors };
  }
  if (signup.status === 200) {
    redirect("/signin");
  }
}
export type SignInErrors = {
  email?: string;
  password?: string;
  failed?: string;
};
export type SignInFormState = {
  errors: SignInErrors;
};

export async function signInUser(
  prevState: SignInFormState | undefined,
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const errors: SignInErrors = {};
  if (!email) {
    errors.email = "Email is required";
  }
  if (!password) {
    errors.password = "Password is required";
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  try {
    await signIn("credentials", {
      email,
      password,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      errors.failed = "Invalid email or password";
    } else {
      redirect("/profile");
    }
    return { errors };
  }
}

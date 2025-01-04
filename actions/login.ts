"use server";

import z from "zod";

import { LoginSchema } from "@/schemas/index";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "invalid fields" };
  }

  const { email, password } = validatedFields.data;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return { success: "Yes its true" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: error?.message };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};

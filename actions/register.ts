"use server";

import z from "zod";

import { RegisterSchema } from "@/schemas/index";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validated = RegisterSchema.safeParse(values);
  if (!validated) {
    return { error: "invalid fields" };
  }
  return { success: "Email sent!" };
};

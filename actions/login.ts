"use server";

import z from "zod";

import { LoginSchema } from "@/schemas/index";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validated = LoginSchema.safeParse(values);
  if (!validated) {
    return { error: "invalid fields" };
  }
  return { success: "Email sent!" };
};

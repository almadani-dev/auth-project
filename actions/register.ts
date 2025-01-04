"use server";

import z from "zod";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas/index";
import { getUserByEmail } from "@/data/user";
import { prisma } from "@/lib/db";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validated = RegisterSchema.safeParse(values);
  if (!validated.success) {
    return { error: "invalid fields" };
  }

  const { email, password, name } = validated.data!;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  //todo : send verification token email
  return { success: "User created!" };
};

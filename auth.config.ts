import Credentials from "next-auth/providers/credentials";
import { CredentialsSignin, type NextAuthConfig } from "next-auth";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "./data/user";
import bcrypt from "bcryptjs";

class CustomError extends CredentialsSignin {
  constructor(code: string) {
    super();
    this.code = code;
    this.message = code;
    this.stack = undefined;
  }
}

export default {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);

          if (!user || !user.password) throw new CustomError("User Not Found");

          const passwordMatched = await bcrypt.compare(password, user.password);

          if (passwordMatched) return user;
        }
        throw new CustomError("Password Error");
      },
    }),
  ],
} satisfies NextAuthConfig;

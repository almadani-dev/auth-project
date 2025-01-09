import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  console.log("Enter the function");

  const session = useSession();
  return session.data?.user;
};

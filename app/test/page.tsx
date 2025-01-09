"use client";
import { useSession } from "next-auth/react";

const MyComponent = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>User not found</div>;
  }

  return <div>Welcome, {session.user.name}!</div>;
};

export default MyComponent;

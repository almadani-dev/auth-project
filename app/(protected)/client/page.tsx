"use client";
import { UserInfo } from "@/components/userInfo";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useEffect } from "react";

const ClientPage = () => {
  const user = useCurrentUser();

  useEffect(() => {
    if (!user) {
      window.location.reload();
    }
  }, [user]);

  if (!user) {
    return <div>User not found</div>;
  }

  return <UserInfo user={user} label="💻 Client Component" />;
};
export default ClientPage;

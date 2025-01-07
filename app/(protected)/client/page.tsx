"use client";
import { UserInfo } from "@/components/userInfo";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
  const user = useCurrentUser();

  if (!user) {
    return <div>User not found</div>;
  }

  return <UserInfo user={user} label="💻 Client Component" />;
};
export default ClientPage;

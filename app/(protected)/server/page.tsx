import { UserInfo } from "@/components/userInfo";
import { currentUser } from "@/lib/get-user";

const ServerPage = async () => {
  
  const user = await currentUser();

  if (!user) {
    return <div>User not found</div>;
  }

  return <UserInfo user={user} label="🖥 Server Component" />;
};
export default ServerPage;

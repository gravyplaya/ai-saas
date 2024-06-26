import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/api-limit";
import { auth } from "@clerk/nextjs";

import { getUserSubscription, getUserApiLimit } from "@/lib/nocodb";
import { UserSubscription } from "@/lib/types/UserSubscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
  const isPro = await getUserSubscription(userId).then((userSubscription) => {
    return userSubscription && userSubscription.Status === "active";
  });

  const apiLimitCount = (await getUserApiLimit(userId)) || 0; // Assign a default value of 0 if getUserApiLimit() returns void

  return (
    
    <div className="h-full relative ">

      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72 pb-10 ">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

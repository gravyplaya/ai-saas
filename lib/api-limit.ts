import { auth } from "@clerk/nextjs";
import { getUserApiLimit } from "@/lib/nocodb";
import { MAX_FREE_COUNTS } from "@/constants";

export const incrementApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await getUserApiLimit(userId);

  //TODO
  // if (userApiLimit) {
  //   await prismadb.userApiLimit.update({
  //     where: { userId: userId },
  //     data: { count: userApiLimit + 1 },
  //   });
  // } else {
  //   await prismadb.userApiLimit.create({
  //     data: { userId: userId, count: 1 },
  //   });
  // }
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  let userApiLimit: any = await getUserApiLimit(userId);

  console.log("checkuserApiLimit", userApiLimit <= MAX_FREE_COUNTS);

  return userApiLimit <= MAX_FREE_COUNTS;
};

export const getApiLimitCount = async () => {
  const { userId } = auth();
  if (!userId) {
    return 0;
  }
  const userApiLimit = await getUserApiLimit(userId);
  if (!userApiLimit) {
    return 0;
  }
  return userApiLimit;
};

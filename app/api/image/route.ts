import Replicate from "replicate";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse(
        "Free trial has expired. Please upgrade to pro.",
        { status: 403 }
      );
    }
    // split resolution by x and create a new object with width and height  properties
    const [width, height] = resolution
      .split("x")
      .map((x: any) => parseInt(x, 10));

    const response = await replicate.run(
      "stability-ai/sdxl:d830ba5dabf8090ec0db6c10fc862c6eb1c929e1a194a5411852d25fd954ac82",
      {
        input: {
          prompt: prompt,
          height: height,
          width: width,
          num_outputs: parseInt(amount, 10),
        },
      }
    );

    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(response);
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

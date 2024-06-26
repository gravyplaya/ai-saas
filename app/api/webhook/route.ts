import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { api } from "@/lib/nocodb";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === "checkout.session.completed") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );
    console.log("checkout.session.completed", subscription);
    if (!session?.metadata?.userId) {
      return new NextResponse("User id is required", { status: 400 });
    }

    await api.dbViewRow.create(
      "noco",
      "pxfm1r0dydv8c29",
      "m7locaqms45qixf",
      "vw1aslyail8emtyo",
      {
        UserId: session?.metadata?.userId,
        StripeSubscriptionId: subscription.id,
        StripeCustomerId: subscription.customer as string,
        StripePriceId: subscription.items.data[0].price.id,
        StripeCurrentPeriodEnd: new Date(
          subscription.current_period_end * 1000
        ),
      }
    );

    // await prismadb.userSubscription.create({
    //   data: {
    //     userId: session?.metadata?.userId,
    //     stripeSubscriptionId: subscription.id,
    //     stripeCustomerId: subscription.customer as string,
    //     stripePriceId: subscription.items.data[0].price.id,
    //     stripeCurrentPeriodEnd: new Date(
    //       subscription.current_period_end * 1000
    //     ),
    //   },
    // })
  }

  if (event.type === "invoice.payment_succeeded") {
    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );
    console.log("invoice.payment_succeeded", subscription);
    const subUpdate = await api.dbViewRow.update(
      "noco",
      "pxfm1r0dydv8c29",
      "m7locaqms45qixf",
      "vw1aslyail8emtyo",
      "data",
      {
        UserId: session?.metadata?.userId,
        StripeSubscriptionId: subscription.id,
        StripeCustomerId: subscription.customer as string,
        StripePriceId: subscription.items.data[0].price.id,
        StripeCurrentPeriodEnd: new Date(
          subscription.current_period_end * 1000
        ),
      }
    );
    console.log("subUpdate", subUpdate);
    // await prismadb.userSubscription.update({
    //   where: {
    //     stripeSubscriptionId: subscription.id,
    //   },
    //   data: {
    //     stripePriceId: subscription.items.data[0].price.id,
    //     stripeCurrentPeriodEnd: new Date(
    //       subscription.current_period_end * 1000
    //     ),
    //   },
    // });
  }

  return new NextResponse(null, { status: 200 });
}

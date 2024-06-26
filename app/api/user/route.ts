import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(res: any) {
  const { userId } = await auth();
  return NextResponse.json(userId);
}

export async function POST(req: any, res: any) {
  // Handle POST request
}

export async function PUT(req: any, res: any) {
  // Handle PUT request
}

export async function DELETE(req: any, res: any) {
  // Handle DELETE request
}

import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_URL!;

export async function POST(req: NextRequest) {
  console.log("starting");

  const body = await req.json(); // <-- parse JSON here

  const { name, email, message } = body;

  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await response.json();

    if (data.status === "success") {
      return NextResponse.json({ message: "Email sent successfully" });
    } else {
      return NextResponse.json(
        { message: "Failed to send email via GAS", error: data.message },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error: (error as Error).message },
      { status: 500 }
    );
  }
}

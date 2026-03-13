import { NextResponse } from "next/server";
import { reservationSubmissionSchema } from "@/lib/validators";

type ReservationPayload = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time:
    | "8:00 AM"
    | "8:30 AM"
    | "9:00 AM"
    | "9:30 AM"
    | "10:00 AM"
    | "10:30 AM"
    | "11:00 AM"
    | "11:30 AM"
    | "12:00 PM"
    | "12:30 PM"
    | "1:00 PM"
    | "1:30 PM";
  partySize: 1 | 2 | 3 | 4 | 5 | 6;
  notes?: string;
};

async function sendReservationNotification(payload: ReservationPayload) {
  const bakeryEmail = process.env.BAKERY_RESERVATIONS_EMAIL || "hello@sunrisebakerypdx.com";
  const emailProviderApiKey = process.env.EMAIL_PROVIDER_API_KEY;

  if (!emailProviderApiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[DEV] Reservation submission:", { to: bakeryEmail, ...payload });
    }
    return { delivered: false, mode: "log-only" as const };
  }

  // Placeholder for provider integration.
  // Example: Resend, SendGrid, Postmark, SES, etc.
  // Keep this as a no-op success until provider is configured.
  return { delivered: true, mode: "provider" as const };
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = reservationSubmissionSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid request body",
          issues: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const result = await sendReservationNotification(parsed.data);

    return NextResponse.json(
      {
        success: true,
        message: "Reservation request received.",
        delivery: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/reservations error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}

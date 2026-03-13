import { NextResponse } from "next/server";
import { contactSubmissionSchema } from "@/lib/validators";

type ContactPayload = {
  intent: "Pickup request" | "Allergy question" | "Catering inquiry" | "General question" | "Newsletter signup";
  name: string;
  email: string;
  phone?: string;
  message: string;
};

async function sendContactNotification(payload: ContactPayload) {
  const bakeryEmail = process.env.BAKERY_CONTACT_EMAIL || "hello@sunrisebakerypdx.com";
  const emailProviderApiKey = process.env.EMAIL_PROVIDER_API_KEY;

  if (!emailProviderApiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[DEV] Contact submission:", { to: bakeryEmail, ...payload });
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
    const parsed = contactSubmissionSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid request body",
          issues: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const result = await sendContactNotification(parsed.data);

    return NextResponse.json(
      {
        success: true,
        message: "Contact request received.",
        delivery: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}

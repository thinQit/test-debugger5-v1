import { z } from "zod";

const contactIntents = [
  "Pickup request",
  "Allergy question",
  "Catering inquiry",
  "General question",
  "Newsletter signup",
] as const;

const reservationTimes = [
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
] as const;

export const contactSubmissionSchema = z.object({
  intent: z.enum(contactIntents),
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Valid email is required"),
  phone: z
    .string()
    .trim()
    .max(30, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  message: z.string().trim().min(5, "Message must be at least 5 characters").max(2000, "Message is too long"),
});

export const reservationSubmissionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  phone: z.string().trim().min(7, "Phone is required").max(30, "Phone number is too long"),
  email: z.string().trim().email("Valid email is required"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  time: z.enum(reservationTimes),
  partySize: z.coerce.number().int().min(1).max(6),
  notes: z.string().trim().max(1000, "Notes are too long").optional().or(z.literal("")),
});

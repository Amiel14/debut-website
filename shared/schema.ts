import { z } from "zod";

// Event Details Schema
export const eventDetailsSchema = z.object({
  debutanteName: z.string(),
  eventDate: z.string(),
  eventTime: z.string(),
  venueName: z.string(),
  venueAddress: z.string(),
  mapEmbedUrl: z.string(),
  theme: z.string(),
  dressCode: z.string(),
  dressCodeDetails: z.string(),
});

export type EventDetails = z.infer<typeof eventDetailsSchema>;

// Tradition Participant Schema
export const participantSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.string().optional(),
});

export type Participant = z.infer<typeof participantSchema>;

// Traditions Schema
export const traditionsSchema = z.object({
  treasures: z.array(participantSchema),
  roses: z.array(participantSchema),
  candles: z.array(participantSchema),
});

export type Traditions = z.infer<typeof traditionsSchema>;

// FAQ Schema
export const faqItemSchema = z.object({
  id: z.number(),
  question: z.string(),
  answer: z.string(),
});

export type FAQItem = z.infer<typeof faqItemSchema>;

// Transportation Tip Schema
export const transportTipSchema = z.object({
  id: z.number(),
  mode: z.string(),
  icon: z.string(),
  description: z.string(),
});

export type TransportTip = z.infer<typeof transportTipSchema>;

// RSVP Schema (for form validation only, no database storage)
export const rsvpFormSchema = z.object({
  guestName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  attending: z.enum(["yes", "no", "maybe"], {
    required_error: "Please let us know if you're attending",
  }),
  guestCount: z.number().min(1).max(10).default(1),
  mealPreference: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  message: z.string().optional(),
});

export type RsvpFormData = z.infer<typeof rsvpFormSchema>;

import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

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

// RSVP Schema
export const rsvps = pgTable("rsvps", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  guestName: text("guest_name").notNull(),
  email: text("email").notNull(),
  attending: text("attending").notNull(),
  guestCount: integer("guest_count").notNull().default(1),
  mealPreference: text("meal_preference"),
  dietaryRestrictions: text("dietary_restrictions"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertRsvpSchema = createInsertSchema(rsvps).omit({
  id: true,
  createdAt: true,
});

export type InsertRsvp = z.infer<typeof insertRsvpSchema>;
export type Rsvp = typeof rsvps.$inferSelect;

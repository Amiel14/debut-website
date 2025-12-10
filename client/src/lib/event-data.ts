import type { EventDetails, Participant, FAQItem, TransportTip } from "@shared/schema";

export const eventDetails: EventDetails = {
  debutanteName: "Maria Isabella",
  eventDate: "2025-03-15",
  eventTime: "6:00 PM",
  venueName: "The Grand Ballroom",
  venueAddress: "123 Celebration Avenue, Makati City, Metro Manila, Philippines 1200",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.802259253319!2d121.01460657580858!3d14.554729185953898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90264a0ed01%3A0x2b066ed57830cace!2sMakati%20City%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sus!4v1702000000000!5m2!1sen!2sus",
  theme: "A Night Under the Stars",
  dressCode: "Formal / Semi-Formal Attire",
  dressCodeDetails: "Ladies are encouraged to wear elegant gowns or cocktail dresses. Gentlemen should wear suits or barong tagalog. The color palette for the evening is burgundy, gold, and champagne. Please avoid wearing white as it is reserved for the debutante.",
};

export const treasures: Participant[] = [
  { id: 1, name: "Grandmother Elena", role: "Wisdom" },
  { id: 2, name: "Grandfather Jose", role: "Strength" },
  { id: 3, name: "Aunt Patricia", role: "Grace" },
  { id: 4, name: "Uncle Roberto", role: "Courage" },
  { id: 5, name: "Aunt Maria", role: "Kindness" },
  { id: 6, name: "Uncle Carlos", role: "Perseverance" },
  { id: 7, name: "Cousin Angela", role: "Joy" },
  { id: 8, name: "Cousin Miguel", role: "Faith" },
  { id: 9, name: "Godmother Carmen", role: "Love" },
  { id: 10, name: "Godfather Antonio", role: "Honor" },
  { id: 11, name: "Family Friend Liza", role: "Hope" },
  { id: 12, name: "Family Friend Marco", role: "Patience" },
  { id: 13, name: "Teacher Ms. Santos", role: "Knowledge" },
  { id: 14, name: "Mentor Dr. Cruz", role: "Guidance" },
  { id: 15, name: "Neighbor Tita Rose", role: "Generosity" },
  { id: 16, name: "Church Elder Fr. Garcia", role: "Spirituality" },
  { id: 17, name: "Best Friend's Mom Tita Ana", role: "Compassion" },
  { id: 18, name: "Mother Rosario", role: "Unconditional Love" },
];

export const roses: Participant[] = [
  { id: 1, name: "Father Ricardo" },
  { id: 2, name: "Brother Gabriel" },
  { id: 3, name: "Grandfather Jose" },
  { id: 4, name: "Uncle Roberto" },
  { id: 5, name: "Uncle Carlos" },
  { id: 6, name: "Cousin Miguel" },
  { id: 7, name: "Godfather Antonio" },
  { id: 8, name: "Family Friend Marco" },
  { id: 9, name: "Best Friend's Dad Tito Ben" },
  { id: 10, name: "Neighbor Tito Jun" },
  { id: 11, name: "Classmate Joshua" },
  { id: 12, name: "Classmate Daniel" },
  { id: 13, name: "Childhood Friend Mark" },
  { id: 14, name: "Church Friend Paolo" },
  { id: 15, name: "Teammate Luis" },
  { id: 16, name: "Cousin Andres" },
  { id: 17, name: "Family Friend Tito Ray" },
  { id: 18, name: "Special Someone David" },
];

export const candles: Participant[] = [
  { id: 1, name: "Mother Rosario" },
  { id: 2, name: "Sister Sofia" },
  { id: 3, name: "Grandmother Elena" },
  { id: 4, name: "Aunt Patricia" },
  { id: 5, name: "Aunt Maria" },
  { id: 6, name: "Cousin Angela" },
  { id: 7, name: "Godmother Carmen" },
  { id: 8, name: "Best Friend Sarah" },
  { id: 9, name: "Best Friend Emma" },
  { id: 10, name: "Childhood Friend Mia" },
  { id: 11, name: "Classmate Nicole" },
  { id: 12, name: "Classmate Ashley" },
  { id: 13, name: "Church Friend Grace" },
  { id: 14, name: "Teammate Julia" },
  { id: 15, name: "Neighbor Ate Joy" },
  { id: 16, name: "Cousin Isabel" },
  { id: 17, name: "Mentor Teacher Ms. Reyes" },
  { id: 18, name: "Special Friend Olivia" },
];

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What time should I arrive?",
    answer: "Please arrive by 5:30 PM for cocktails and registration. The program will begin promptly at 6:00 PM. Early arrival is appreciated to ensure you don't miss any of the special moments.",
  },
  {
    id: 2,
    question: "Is there a parking area at the venue?",
    answer: "Yes, the Grand Ballroom has a spacious parking lot that can accommodate up to 200 vehicles. Valet parking is also available for your convenience at no additional charge.",
  },
  {
    id: 3,
    question: "Can I bring a plus one?",
    answer: "Due to venue capacity, we kindly ask that you only bring guests who are included in your invitation. If you have questions about your guest list, please contact us directly.",
  },
  {
    id: 4,
    question: "Will there be food accommodations for dietary restrictions?",
    answer: "Yes, we will have vegetarian, halal, and gluten-free options available. Please inform us of any dietary restrictions when you RSVP so we can make appropriate arrangements.",
  },
  {
    id: 5,
    question: "What is the gift-giving etiquette?",
    answer: "Your presence is the greatest gift! However, if you wish to give a gift, monetary gifts or gift cards are appreciated. A gift table will be available at the reception.",
  },
  {
    id: 6,
    question: "Is photography allowed during the event?",
    answer: "We have hired a professional photographer and videographer for the event. Personal photos are welcome during the reception, but we kindly ask that you refrain from using flash photography during the ceremonies.",
  },
  {
    id: 7,
    question: "How long will the event last?",
    answer: "The event is expected to conclude around 11:00 PM. The program includes cocktails, dinner, traditional ceremonies, and dancing.",
  },
];

export const transportTips: TransportTip[] = [
  {
    id: 1,
    mode: "By Car",
    icon: "car",
    description: "From EDSA, take the Makati Avenue exit. Continue straight for 2km, then turn right at Celebration Avenue. The venue is on your left.",
  },
  {
    id: 2,
    mode: "By Public Transport",
    icon: "bus",
    description: "Take the MRT to Ayala Station. From there, take a jeepney or Grab to Celebration Avenue, Makati City. The ride is approximately 10 minutes.",
  },
  {
    id: 3,
    mode: "By Taxi/Grab",
    icon: "taxi",
    description: "Simply input 'The Grand Ballroom, 123 Celebration Avenue, Makati City' in your app. The venue is well-known to most drivers in the area.",
  },
];

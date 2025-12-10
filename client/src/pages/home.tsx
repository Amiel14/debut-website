import { useQuery } from "@tanstack/react-query";
import { CountdownTimer } from "@/components/countdown-timer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Sparkles, Heart, Flame, Gift, Car, Bus, Navigation } from "lucide-react";
import { HeroSkeleton, EventDetailsSkeleton, TraditionsSkeleton, FAQSkeleton } from "@/components/skeleton-sections";
import type { EventDetails, Participant, FAQItem, TransportTip } from "@shared/schema";
import heroImage from "@assets/stock_images/elegant_debut_party__e4c843c4.jpg";

interface DebutData {
  event: EventDetails;
  traditions: {
    treasures: Participant[];
    roses: Participant[];
    candles: Participant[];
  };
  faq: FAQItem[];
  transport: TransportTip[];
}

export default function Home() {
  const { data, isLoading, error } = useQuery<DebutData>({
    queryKey: ["/api/debut-data"],
  });

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-2">Something went wrong</p>
          <p className="text-muted-foreground text-sm">Please refresh the page</p>
        </div>
      </div>
    );
  }

  const formattedDate = data 
    ? new Date(data.event.eventDate).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen bg-background">
      {data && <CountdownTimer targetDate={data.event.eventDate} />}
      
      <main className="pt-16">
        {isLoading ? (
          <>
            <HeroSkeleton />
            <EventDetailsSkeleton />
            <TraditionsSkeleton />
            <FAQSkeleton />
          </>
        ) : data ? (
          <>
            <HeroSection debutanteName={data.event.debutanteName} date={formattedDate} />
            <EventDetailsSection 
              date={formattedDate}
              time={data.event.eventTime}
              venueName={data.event.venueName}
              venueAddress={data.event.venueAddress}
              mapEmbedUrl={data.event.mapEmbedUrl}
            />
            <ThemeSection 
              theme={data.event.theme}
              dressCode={data.event.dressCode}
              dressCodeDetails={data.event.dressCodeDetails}
            />
            <TraditionsSection 
              treasures={data.traditions.treasures} 
              roses={data.traditions.roses} 
              candles={data.traditions.candles} 
            />
            <DirectionsSection tips={data.transport} />
            <FAQSection items={data.faq} />
            <Footer debutanteName={data.event.debutanteName} />
          </>
        ) : null}
      </main>
    </div>
  );
}

function HeroSection({ debutanteName, date }: { debutanteName: string; date: string }) {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center"
      data-testid="hero-section"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-white/80">
            You are cordially invited to
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight drop-shadow-lg">
            {debutanteName}'s
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 md:w-24 bg-white/40" />
            <span className="font-serif text-2xl md:text-4xl text-white font-semibold">18th Birthday</span>
            <div className="h-px w-12 md:w-24 bg-white/40" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Debut Celebration
          </h2>
          <p className="text-lg md:text-xl text-white/90 mt-8">{date}</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Sparkles className="w-5 h-5 text-white/80" />
            <span className="text-sm text-white/70 italic">A night of tradition, love, and celebration</span>
            <Sparkles className="w-5 h-5 text-white/80" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function EventDetailsSection({ 
  date, 
  time, 
  venueName, 
  venueAddress, 
  mapEmbedUrl 
}: { 
  date: string; 
  time: string; 
  venueName: string; 
  venueAddress: string; 
  mapEmbedUrl: string;
}) {
  return (
    <section className="py-16 md:py-20 bg-card" data-testid="event-details-section">
      <div className="container mx-auto px-4">
        <SectionHeading title="Event Details" subtitle="When & Where" />
        
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1" data-testid="text-event-date-label">Date</h3>
                  <p className="text-muted-foreground" data-testid="text-event-date">{date}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1" data-testid="text-event-time-label">Time</h3>
                  <p className="text-muted-foreground" data-testid="text-event-time">{time}</p>
                  <p className="text-sm text-muted-foreground mt-1">Cocktails begin at 5:30 PM</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1" data-testid="text-venue-name">{venueName}</h3>
                  <p className="text-muted-foreground" data-testid="text-venue-address">{venueAddress}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="h-[300px] lg:h-auto min-h-[400px]">
            <div className="w-full h-full rounded-lg overflow-hidden border border-border">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event venue location"
                data-testid="map-embed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThemeSection({ 
  theme, 
  dressCode, 
  dressCodeDetails 
}: { 
  theme: string; 
  dressCode: string; 
  dressCodeDetails: string;
}) {
  return (
    <section className="py-16 md:py-20 bg-background" data-testid="theme-section">
      <div className="container mx-auto px-4">
        <SectionHeading title="Theme & Dress Code" subtitle="What to Wear" />
        
        <div className="max-w-3xl mx-auto mt-12 text-center space-y-8">
          <div>
            <Badge variant="outline" className="mb-4 text-sm px-4 py-1">Theme</Badge>
            <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground" data-testid="text-theme">
              {theme}
            </h3>
          </div>
          
          <div className="pt-8 border-t border-border">
            <Badge variant="outline" className="mb-4 text-sm px-4 py-1">Dress Code</Badge>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4" data-testid="text-dress-code">
              {dressCode}
            </h3>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-dress-code-details">
              {dressCodeDetails}
            </p>
          </div>
          
          <div className="flex justify-center gap-3 pt-4 flex-wrap">
            <ColorSwatch color="bg-red-900" label="Burgundy" />
            <ColorSwatch color="bg-amber-500" label="Gold" />
            <ColorSwatch color="bg-amber-100" label="Champagne" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ColorSwatch({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-6 h-6 rounded-full ${color} border border-border`} />
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

function TraditionsSection({ 
  treasures, 
  roses, 
  candles 
}: { 
  treasures: Participant[]; 
  roses: Participant[]; 
  candles: Participant[];
}) {
  return (
    <section className="py-16 md:py-20 bg-card" data-testid="traditions-section">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Celebrating Traditions" 
          subtitle="18 Treasures, 18 Roses, 18 Candles" 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <TraditionCard 
            title="18 Treasures" 
            icon={<Gift className="w-6 h-6" />}
            participants={treasures}
            description="Meaningful gifts from 18 special people"
          />
          <TraditionCard 
            title="18 Roses" 
            icon={<Heart className="w-6 h-6" />}
            participants={roses}
            description="18 gentlemen for the rose dance"
          />
          <TraditionCard 
            title="18 Candles" 
            icon={<Flame className="w-6 h-6" />}
            participants={candles}
            description="18 ladies sharing wishes and wisdom"
          />
        </div>
      </div>
    </section>
  );
}

function TraditionCard({ 
  title, 
  icon, 
  participants, 
  description 
}: { 
  title: string; 
  icon: React.ReactNode; 
  participants: Participant[]; 
  description: string;
}) {
  return (
    <Card className="h-full" data-testid={`card-${title.toLowerCase().replace(/\s/g, '-')}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-primary/10 text-primary">
            {icon}
          </div>
          <div>
            <CardTitle className="font-serif text-xl">{title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ol className="space-y-2 mt-4">
          {participants.map((participant, index) => (
            <li 
              key={participant.id} 
              className="flex items-baseline gap-3 text-sm"
              data-testid={`participant-${title.toLowerCase().replace(/\s/g, '-')}-${index + 1}`}
            >
              <span className="font-serif text-primary font-semibold w-6 text-right">
                {index + 1}.
              </span>
              <span className="text-foreground">{participant.name}</span>
              {participant.role && (
                <span className="text-muted-foreground text-xs ml-auto">
                  — {participant.role}
                </span>
              )}
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

function DirectionsSection({ tips }: { tips: TransportTip[] }) {
  const getIcon = (mode: string) => {
    switch (mode.toLowerCase()) {
      case 'by car':
        return <Car className="w-5 h-5" />;
      case 'by public transport':
        return <Bus className="w-5 h-5" />;
      default:
        return <Navigation className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-16 md:py-20 bg-background" data-testid="directions-section">
      <div className="container mx-auto px-4">
        <SectionHeading title="Getting There" subtitle="Transportation Tips" />
        
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {tips.map((tip) => (
            <Card key={tip.id} data-testid={`card-transport-${tip.id}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    {getIcon(tip.mode)}
                  </div>
                  <h3 className="font-semibold">{tip.mode}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <section className="py-16 md:py-20 bg-card" data-testid="faq-section">
      <div className="container mx-auto px-4">
        <SectionHeading title="Frequently Asked Questions" subtitle="Everything You Need to Know" />
        
        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={`item-${item.id}`}
                className="border border-border rounded-lg px-6 data-[state=open]:bg-background"
                data-testid={`faq-item-${item.id}`}
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function Footer({ debutanteName }: { debutanteName: string }) {
  return (
    <footer className="py-12 bg-primary text-primary-foreground" data-testid="footer">
      <div className="container mx-auto px-4 text-center">
        <p className="font-serif text-2xl mb-2">{debutanteName}</p>
        <p className="text-sm opacity-80">18th Birthday Debut Celebration</p>
        <div className="flex justify-center gap-2 mt-4">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm">See you there!</span>
          <Sparkles className="w-4 h-4" />
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-primary mb-2">{subtitle}</p>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">{title}</h2>
    </div>
  );
}

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-3"
      data-testid="countdown-banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 md:gap-6">
          <span className="text-sm md:text-base font-medium hidden sm:inline">Countdown to the Celebration</span>
          <div className="flex items-center gap-2 md:gap-4">
            <TimeBlock value={formatNumber(timeLeft.days)} label="Days" />
            <Separator />
            <TimeBlock value={formatNumber(timeLeft.hours)} label="Hours" />
            <Separator />
            <TimeBlock value={formatNumber(timeLeft.minutes)} label="Min" />
            <Separator />
            <TimeBlock value={formatNumber(timeLeft.seconds)} label="Sec" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimeBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center" data-testid={`countdown-${label.toLowerCase()}`}>
      <span className="text-xl md:text-2xl font-serif font-bold tracking-wider">{value}</span>
      <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-80">{label}</span>
    </div>
  );
}

function Separator() {
  return <span className="text-xl md:text-2xl font-light opacity-60">:</span>;
}

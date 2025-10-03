import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  duration: number;
  onComplete: () => void;
}

export const Timer = ({ duration, onComplete }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onComplete]);

  const percentage = (timeLeft / duration) * 100;

  return (
    <div className="flex items-center gap-3">
      <Clock className="w-5 h-5 text-primary" />
      <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-2xl font-bold tabular-nums min-w-[3ch]">
        {timeLeft}s
      </span>
    </div>
  );
};
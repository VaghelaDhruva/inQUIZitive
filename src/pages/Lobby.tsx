import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadGameState } from '@/utils/gameState';
import { Button } from '@/components/ui/button';
import { Users, Zap } from 'lucide-react';

export default function Lobby() {
  const navigate = useNavigate();
  const [teams, setTeams] = useState<string[]>([]);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const state = loadGameState();
      if (state) {
        setTeams(state.teams.map(t => t.name));
        
        if (state.isActive && state.currentRound) {
          setIsStarted(true);
          navigate(`/quiz/${state.currentRound}`);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Zap className="w-16 h-16 mx-auto mb-4 text-primary animate-pulse-neon" />
          <h1 className="text-4xl font-black gradient-text mb-2">
            WAITING FOR QUIZ TO START
          </h1>
          <p className="text-muted-foreground">
            Get ready for the ultimate tech challenge
          </p>
        </div>

        <div className="card-glow rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold">
              Teams Joined ({teams.length})
            </h2>
          </div>

          <div className="space-y-3 mb-8">
            {teams.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                No teams yet. Be the first!
              </p>
            ) : (
              teams.map((team, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-muted rounded-lg border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <span className="font-semibold text-lg">{team}</span>
                </div>
              ))
            )}
          </div>

          {!isStarted && (
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  Waiting for host to start...
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
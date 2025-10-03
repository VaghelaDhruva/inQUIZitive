import { useEffect } from 'react';
import { loadGameState, getLeaderboard } from '@/utils/gameState';
import { Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Leaderboard() {
  const state = loadGameState();
  const teams = state ? getLeaderboard(state.teams) : [];

  useEffect(() => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background to-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Trophy className="w-20 h-20 mx-auto mb-4 text-accent animate-glow" />
          <h1 className="text-5xl font-black gradient-text">LEADERBOARD</h1>
        </div>

        <div className="space-y-4">
          {teams.map((team, idx) => (
            <div key={team.id} className={`card-glow p-6 rounded-2xl flex items-center gap-6 ${idx === 0 ? 'border-2 border-accent' : ''}`}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl font-black ${
                idx === 0 ? 'bg-accent text-accent-foreground' :
                idx === 1 ? 'bg-muted' : 'bg-card'
              }`}>
                {idx + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold">{team.name}</h3>
              </div>
              <div className="text-4xl font-black gradient-text">{team.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
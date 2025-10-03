import { useState, useEffect } from 'react';
import { loadGameState, saveGameState, updateTeamScore, markTeamDQ } from '@/utils/gameState';
import { Button } from '@/components/ui/button';
import { Play, Pause, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Host() {
  const navigate = useNavigate();
  const [state, setState] = useState(loadGameState());

  const startRound = (round: 'round1' | 'round2' | 'round3') => {
    const newState = { ...state!, currentRound: round, isActive: true, currentQuestionIndex: 0 };
    saveGameState(newState);
    setState(newState);
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background via-background to-muted">
      <h1 className="text-4xl font-black gradient-text mb-8">HOST CONTROL PANEL</h1>
      
      <div className="grid gap-6 max-w-4xl">
        <div className="card-glow p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Start Rounds</h2>
          <div className="flex gap-4">
            <Button onClick={() => startRound('round1')} className="bg-primary">
              <Play className="mr-2" /> Round 1
            </Button>
            <Button onClick={() => startRound('round2')} className="bg-secondary">
              <Play className="mr-2" /> Round 2
            </Button>
            <Button onClick={() => startRound('round3')} className="bg-accent">
              <Play className="mr-2" /> Round 3
            </Button>
          </div>
        </div>

        <div className="card-glow p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Teams ({state?.teams.length || 0})</h2>
          <div className="space-y-2">
            {state?.teams.map((team) => (
              <div key={team.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <span className="font-bold">{team.name}</span>
                <span className="text-xl">Score: {team.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
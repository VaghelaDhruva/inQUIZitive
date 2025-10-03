import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { loadGameState, saveGameState, initializeGameState, addTeam } from '@/utils/gameState';
import { Zap, Users } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState('');
  const [role, setRole] = useState<'host' | 'player'>('player');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!teamName.trim()) {
      setError('Please enter a team name');
      return;
    }

    let gameState = loadGameState();
    
    if (!gameState) {
      gameState = initializeGameState();
    }

    if (role === 'player') {
      const teamExists = gameState.teams.some(
        t => t.name.toLowerCase() === teamName.toLowerCase()
      );

      if (teamExists) {
        setError('Team name already taken');
        return;
      }

      gameState = addTeam(gameState, teamName);
      const team = gameState.teams[gameState.teams.length - 1];
      sessionStorage.setItem('currentTeamId', team.id);
      sessionStorage.setItem('currentTeamName', team.name);
    }

    sessionStorage.setItem('userRole', role);
    saveGameState(gameState);

    if (role === 'host') {
      navigate('/host');
    } else {
      navigate('/lobby');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-12 h-12 text-primary animate-glow" />
          </div>
          <h1 className="text-5xl font-black gradient-text mb-2">
            TECH QUIZ
          </h1>
          <p className="text-muted-foreground text-lg">
            3 Rounds. 1 Winner. Pure Tech Battle.
          </p>
        </div>

        <div className="card-glow rounded-2xl p-8 space-y-6">
          <div>
            <label className="text-sm font-semibold text-foreground mb-2 block">
              Team Name
            </label>
            <Input
              type="text"
              placeholder="Enter team name"
              value={teamName}
              onChange={(e) => {
                setTeamName(e.target.value);
                setError('');
              }}
              className="h-12 text-lg bg-muted border-border"
              maxLength={30}
            />
            {error && (
              <p className="text-destructive text-sm mt-2">{error}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground mb-3 block">
              Select Role
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setRole('player')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  role === 'player'
                    ? 'border-primary bg-primary/10 shadow-[0_0_20px_hsl(var(--primary)/0.3)]'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="font-bold text-foreground">Player</p>
              </button>
              <button
                onClick={() => setRole('host')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  role === 'host'
                    ? 'border-secondary bg-secondary/10 shadow-[0_0_20px_hsl(var(--secondary)/0.3)]'
                    : 'border-border bg-card hover:border-secondary/50'
                }`}
              >
                <Zap className="w-6 h-6 mx-auto mb-2 text-secondary" />
                <p className="font-bold text-foreground">Host</p>
              </button>
            </div>
          </div>

          <Button
            onClick={handleLogin}
            className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            size="lg"
          >
            Enter Quiz Arena
          </Button>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6">
          Round 1: MCQs • Round 2: Buzzer • Round 3: Rapid Fire
        </p>
      </div>
    </div>
  );
}
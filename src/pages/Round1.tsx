import { useState, useEffect } from 'react';
import { demoQuestions } from '@/data/demoQuestions';
import { Timer } from '@/components/Timer';
import { Button } from '@/components/ui/button';
import { loadGameState, saveGameState, updateTeamScore } from '@/utils/gameState';
import { setupAntiCheat } from '@/utils/antiCheat';

export default function Round1() {
  const [currentQ, setCurrentQ] = useState(0);
  const questions = demoQuestions.filter(q => q.round === 'round1');
  const question = questions[currentQ];
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const cleanup = setupAntiCheat(
      (reason) => console.log('Infraction:', reason),
      () => alert('Disqualified!')
    );
    return cleanup;
  }, []);

  const handleNext = () => {
    if (selected === question.answer) {
      const state = loadGameState()!;
      const teamId = sessionStorage.getItem('currentTeamId')!;
      const newState = updateTeamScore(state, teamId, 1);
      saveGameState(newState);
    }
    
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected('');
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background to-muted">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Timer duration={question.timeLimit || 15} onComplete={handleNext} />
        </div>

        <div className="card-glow p-8 rounded-2xl">
          <p className="text-sm text-muted-foreground mb-2">Question {currentQ + 1} of {questions.length}</p>
          <h2 className="text-2xl font-bold mb-6">{question.question}</h2>

          <div className="grid gap-3">
            {question.options?.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  selected === opt.id
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {opt.text}
              </button>
            ))}
          </div>

          <Button onClick={handleNext} className="w-full mt-6" disabled={!selected}>
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
}
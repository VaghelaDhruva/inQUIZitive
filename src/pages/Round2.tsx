import { useState } from 'react';
import { demoQuestions } from '@/data/demoQuestions';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

export default function Round2() {
  const [buzzed, setBuzzed] = useState(false);
  const questions = demoQuestions.filter(q => q.round === 'round2');
  const [currentQ] = useState(0);
  const question = questions[currentQ];

  return (
    <div className="min-h-screen p-8 flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="max-w-2xl w-full text-center">
        <div className="card-glow p-8 rounded-2xl mb-8">
          <h2 className="text-3xl font-bold mb-6">{question.question}</h2>
          {question.type === 'code' && (
            <pre className="bg-muted p-4 rounded-lg text-left mb-6">
              <code>{question.mediaUrl}</code>
            </pre>
          )}
        </div>

        <Button
          size="lg"
          onClick={() => setBuzzed(true)}
          disabled={buzzed}
          className="w-64 h-64 rounded-full text-4xl font-black bg-gradient-to-r from-primary to-secondary animate-pulse-neon disabled:opacity-50"
        >
          <Zap className="w-20 h-20" />
        </Button>
        <p className="mt-6 text-muted-foreground">
          {buzzed ? 'BUZZED! Wait for host...' : 'Press to BUZZ!'}
        </p>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { demoQuestions } from '@/data/demoQuestions';
import { Timer } from '@/components/Timer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Round3() {
  const questions = demoQuestions.filter(q => q.round === 'round3');
  const [answers, setAnswers] = useState<Record<number, string>>({});

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background to-muted">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Timer duration={60} onComplete={() => console.log('Time up!')} />
        </div>

        <div className="space-y-4">
          {questions.map((q, idx) => (
            <div key={q.id} className="card-glow p-6 rounded-xl">
              <h3 className="font-bold mb-3">{idx + 1}. {q.question}</h3>
              {q.isTrueFalse ? (
                <div className="flex gap-3">
                  <Button onClick={() => setAnswers({...answers, [idx]: 'true'})}>True</Button>
                  <Button onClick={() => setAnswers({...answers, [idx]: 'false'})}>False</Button>
                </div>
              ) : q.options ? (
                <div className="grid gap-2">
                  {q.options.map(opt => (
                    <button key={opt.id} onClick={() => setAnswers({...answers, [idx]: opt.id})} className="p-3 bg-muted rounded-lg text-left hover:bg-primary/10">{opt.text}</button>
                  ))}
                </div>
              ) : (
                <Input placeholder="Type answer" onChange={(e) => setAnswers({...answers, [idx]: e.target.value})} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
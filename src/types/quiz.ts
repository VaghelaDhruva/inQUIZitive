export type QuestionType = 'text' | 'image' | 'audio' | 'code';
export type QuizRound = 'round1' | 'round2' | 'round3';
export type Role = 'host' | 'player';

export interface MCQOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  round: QuizRound;
  type: QuestionType;
  question: string;
  options?: MCQOption[];
  answer: string;
  points: number;
  timeLimit?: number; // seconds
  mediaUrl?: string; // for image/audio
  isTrueFalse?: boolean;
}

export interface Team {
  id: string;
  name: string;
  score: number;
  infractions: number;
  isDQ: boolean;
  powerUpUsed: boolean;
  timeTaken: number; // for tiebreaker
  answers: Record<string, string>;
}

export interface BuzzerState {
  isActive: boolean;
  lockedTeamId: string | null;
  currentQuestionId: string | null;
}

export interface GameState {
  currentRound: QuizRound | null;
  currentQuestionIndex: number;
  isActive: boolean;
  teams: Team[];
  buzzer: BuzzerState;
  infractions: { teamId: string; timestamp: number; reason: string }[];
}

export type PowerUpType = 'double' | 'skip';

export interface PowerUp {
  type: PowerUpType;
  name: string;
  description: string;
}
import { GameState, Team } from '@/types/quiz';

const STORAGE_KEY = 'tech-quiz-state';

export const loadGameState = (): GameState | null => {
  try {
    const data = sessionStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const saveGameState = (state: GameState): void => {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const initializeGameState = (): GameState => {
  return {
    currentRound: null,
    currentQuestionIndex: 0,
    isActive: false,
    teams: [],
    buzzer: {
      isActive: false,
      lockedTeamId: null,
      currentQuestionId: null,
    },
    infractions: [],
  };
};

export const addTeam = (state: GameState, teamName: string): GameState => {
  const newTeam: Team = {
    id: crypto.randomUUID(),
    name: teamName,
    score: 0,
    infractions: 0,
    isDQ: false,
    powerUpUsed: false,
    timeTaken: 0,
    answers: {},
  };

  return {
    ...state,
    teams: [...state.teams, newTeam],
  };
};

export const updateTeamScore = (state: GameState, teamId: string, points: number): GameState => {
  return {
    ...state,
    teams: state.teams.map(team =>
      team.id === teamId ? { ...team, score: team.score + points } : team
    ),
  };
};

export const markTeamDQ = (state: GameState, teamId: string): GameState => {
  return {
    ...state,
    teams: state.teams.map(team =>
      team.id === teamId ? { ...team, isDQ: true } : team
    ),
  };
};

export const addInfraction = (state: GameState, teamId: string, reason: string): GameState => {
  const team = state.teams.find(t => t.id === teamId);
  if (!team) return state;

  const newInfractionCount = team.infractions + 1;
  
  return {
    ...state,
    teams: state.teams.map(t =>
      t.id === teamId ? { ...t, infractions: newInfractionCount } : t
    ),
    infractions: [
      ...state.infractions,
      { teamId, timestamp: Date.now(), reason }
    ],
  };
};

export const getLeaderboard = (teams: Team[]): Team[] => {
  return [...teams]
    .filter(t => !t.isDQ)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.timeTaken - b.timeTaken;
    });
};

export const getTopTeams = (teams: Team[], count: number): Team[] => {
  return getLeaderboard(teams).slice(0, count);
};
export interface Team {
  logoUrl: string;
  teamName: string;
}

export interface Match {
  team1: Team;
  team2: Team;
  score?: string;
}

export interface NormalizedMatch {
  team1: string;
  team2: string;
  score: string;
}

export interface NormalizedData {
  teams: {
    [key: string]: Team;
  };
  rounds: {
    [number: string]: {
      buckets?: {
        [number: string]: {
          matches: NormalizedMatch[];
        };
      };
    };
  };
}

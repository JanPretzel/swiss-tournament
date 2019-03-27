export interface Team {
  logoUrl: string;
  teamName: string;
}

export interface Match {
  team1: Team;
  team2: Team;
  score?: string;
}

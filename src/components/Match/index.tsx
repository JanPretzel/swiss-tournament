import React from 'react';

import { TeamContainer, Score, MatchContainer } from './styles';
import Team from '../Team';
import { Team as TeamProps, Match as Props } from '../../types';

const renderTeam = (team: TeamProps) => (
  <TeamContainer>
    <Team logoUrl={team.logoUrl} teamName={team.teamName} />
  </TeamContainer>
);

const Match: React.FC<Props> = ({ team1, team2, score }) => {
  return (
    <MatchContainer>
      {renderTeam(team1)}
      <Score>{score ? score : 'vs.'}</Score>
      {renderTeam(team2)}
    </MatchContainer>
  );
};

export default Match;

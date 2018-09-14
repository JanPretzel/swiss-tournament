import React from 'react';
import PropTypes from 'prop-types';

import { TeamContainer, Score, MatchContainer } from './styles';
import Team from '../Team';

const renderTeam = team => (
  <TeamContainer>
    <Team logoUrl={team.logoUrl} teamName={team.teamName} />
  </TeamContainer>
);

const Match = ({ team1, team2, score }) => {
  return (
    <MatchContainer>
      {renderTeam(team1)}
      <Score>{score ? score : 'vs.'}</Score>
      {renderTeam(team2)}
    </MatchContainer>
  );
};

export const TeamShape = PropTypes.shape({
  logoUrl: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
});

Match.propTypes = {
  team1: TeamShape.isRequired,
  team2: TeamShape.isRequired,
  score: PropTypes.string,
};

export default Match;

import React from 'react';
import PropTypes from 'prop-types';

import Team from '../Team';

const renderTeam = team => <Team logoUrl={team.logoUrl} teamName={team.teamName} />;

const Match = ({ team1, team2, score }) => {
  return (
    <div>
      {renderTeam(team1)}
      {score ? score : 'vs.'}
      {renderTeam(team2)}
    </div>
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

import React from 'react';
import PropTypes from 'prop-types';

import { BucketContainer } from './styles';
import Match, { TeamShape } from '../Match';

const renderMatch = match => (
  <Match
    // faking a key here, since there won't be any updates to the props this should be fine
    key={match.team1.teamName + match.score + match.team2.teamName}
    team1={match.team1}
    team2={match.team2}
    score={match.score}
  />
);

const Bucket = ({ matches }) => {
  return <BucketContainer>{matches.map(match => renderMatch(match))}</BucketContainer>;
};

export const MatchShape = PropTypes.shape({
  team1: TeamShape.isRequired,
  team2: TeamShape.isRequired,
  score: PropTypes.string,
});

Bucket.propTypes = {
  matches: PropTypes.arrayOf(MatchShape).isRequired,
};

export default Bucket;

import React from 'react';

import { BucketContainer } from './styles';
import Match from '../Match';
import { Match as MatchProps } from '../../types';

const renderMatch = (match: MatchProps) => (
  <Match
    // faking a key here, since there won't be any updates to the props this should be fine
    key={match.team1.teamName + match.score + match.team2.teamName}
    team1={match.team1}
    team2={match.team2}
    score={match.score}
  />
);

interface Props {
  matches: MatchProps[];
}

class Bucket extends React.Component<Props> {
  render() {
    const { matches } = this.props;
    return <BucketContainer>{matches.map(match => renderMatch(match))}</BucketContainer>;
  }
}

export default Bucket;

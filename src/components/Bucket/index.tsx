import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull, faTrophy, faGamepad } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

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
    return (
      <BucketContainer>
        <Badge>
          <StyledIcon icon={faGamepad} size="sm" color="#fcebea" />
          <span>Eliminated</span>
        </Badge>
        {matches.map(match => renderMatch(match))}
      </BucketContainer>
    );
  }
}

const StyledIcon = styled(FontAwesomeIcon)`
  background-color: #ef5753;
  padding: 5px;
  border-radius: 9999px;
  margin-right: 5px;
  font-size: 0.75rem;
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;
  border-radius: 9999px;
  background-color: #fcebea;
  border: 1px solid #f9acaa;
  color: #cc1f1a;
  font-size: 0.875rem;
  margin-bottom: 12px;
  font-weight: 400;
`;

export default Bucket;

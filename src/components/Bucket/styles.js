import styled from 'styled-components';

import { MatchContainer } from '../Match/styles';

export const BucketContainer = styled.div`
  display: inline-block;
  background-color: #e3e3e3;
  padding: ${props => props.theme.bucketPadding}px;

  & ${MatchContainer}:not(:last-child) {
    padding-bottom: ${props => props.theme.matchPadding}px;
  }
`;

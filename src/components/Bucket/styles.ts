import styled from 'styled-components';

import { MatchContainer } from '../Match/styles';

export const BucketContainer = styled.div`
  display: inline-block;
  background-color: #f8fafc;
  padding: ${props => props.theme.bucketPadding}px;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08);
  border-radius: 0.25rem;
  border: 1px solid #dae1e7;

  & ${MatchContainer}:not(:last-child) {
    padding-bottom: ${props => props.theme.matchPadding}px;
  }
`;

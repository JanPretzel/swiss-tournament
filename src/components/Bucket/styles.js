import styled from 'styled-components';

import { MatchContainer } from '../Match/styles';

const padding = '15px';

export const BucketContainer = styled.div`
  display: inline-block;
  background-color: #e3e3e3;
  padding: ${padding};

  & ${MatchContainer}:not(:last-child) {
    padding-bottom: ${padding};
  }
`;

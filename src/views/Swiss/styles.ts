import styled from 'styled-components';

import { BucketContainer } from '../../components/Bucket/styles';

export const SwissContainer = styled.div`
  display: flex;
`;

export const RoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 80px;

  &:first-child {
    margin-left: 40px;
  }

  & ${BucketContainer}:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const SvgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -10;
`;

export const Line = styled.line`
  stroke-width: 6px;
  stroke: red;
  color: red;
`;

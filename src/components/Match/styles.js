import styled from 'styled-components';

export const MatchContainer = styled.div`
  display: flex;
  width: ${props => props.theme.matchWidth}px;
  height: ${props => props.theme.matchHeight}px;
  align-items: center;
`;

export const TeamContainer = styled.div`
  width: ${props => props.theme.teamDimensions}px;
  max-height: ${props => props.theme.teamDimensions}px;
`;

export const Score = styled.div`
  flex: 1;
  text-align: center;
`;

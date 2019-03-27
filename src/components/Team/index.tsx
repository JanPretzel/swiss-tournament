import React from 'react';

import { TeamImage } from './styles';

interface Props {
  logoUrl: string;
  teamName: string;
}

const Team: React.FC<Props> = ({ logoUrl, teamName }) => {
  return <TeamImage src={logoUrl} alt={teamName} />;
};

export default Team;

import React from 'react';

import { TeamImage } from './styles';
import { Team as Props } from '../../types';

const Team: React.FC<Props> = ({ logoUrl, teamName }) => {
  return <TeamImage draggable={false} src={logoUrl} alt={teamName} />;
};

export default Team;

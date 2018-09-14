import React from 'react';
import PropTypes from 'prop-types';

import { TeamImage } from './styles';

const Team = ({ logoUrl, teamName }) => {
  return <TeamImage src={logoUrl} alt={teamName} />;
};

Team.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  teamName: PropTypes.string.isRequired,
};

export default Team;

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Match } from '../components';

storiesOf('Match', module)
  .add('without score', () => (
    <Match
      team1={{ logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' }}
      team2={{ logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' }}
    />
  ))
  .add('with score', () => (
    <Match
      team1={{ logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' }}
      team2={{ logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' }}
      score="16:1"
    />
  ));

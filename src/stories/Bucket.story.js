import React from 'react';
import { storiesOf } from '@storybook/react';

import { Bucket } from '../components';

storiesOf('Bucket', module).add('default', () => (
  <Bucket
    matches={[
      {
        team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
        team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
      },
      {
        team1: { logoUrl: 'https://static.hltv.org/images/team/logo/4411', teamName: 'NiP' },
        team2: { logoUrl: 'https://static.hltv.org/images/team/logo/4608', teamName: 'Navi' },
        score: '16:14',
      },
    ]}
  />
));

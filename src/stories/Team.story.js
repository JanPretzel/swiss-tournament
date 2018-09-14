import React from 'react';
import { storiesOf } from '@storybook/react';

import { Team } from '../components';

storiesOf('Team', module).add('default', () => (
  <Team logoUrl="https://static.hltv.org/images/team/logo/4411" teamName="Nip" />
));

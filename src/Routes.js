import React from 'react';
import { Route, Switch } from 'react-router';

import Swiss from './views/Swiss';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Swiss} />
      </Switch>
    );
  }
}

export default Routes;

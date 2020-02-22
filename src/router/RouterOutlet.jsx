import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../app/components/Home'

class RouterOutlet extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact={true}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RouterOutlet;

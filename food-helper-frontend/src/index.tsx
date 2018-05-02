import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route path="/:restaurantId" component={App}/>
        <Route path="/" component={App}/>
      </Switch>
    </BrowserRouter>
  ),
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();

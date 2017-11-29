import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Jugadores from './Jugadores';
import Jugador from './Jugador';

ReactDOM.render(
<Router>
  <div>
    <Route exact path="/" component={App} />
    <Route path="/jugadores" component={Jugadores} />
    <Route path="/jugador/:numero" component={Jugador} />
    <Route path="/versus" component={App} />
  </div>
</Router>
, document.getElementById('root'));

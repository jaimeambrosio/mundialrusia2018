import React, { Component } from 'react';
import JugadorIcon from './components/jugador/icon';

import demoJugadores from './demo/jugadores';

class Jugadores extends Component {
  render() {
    return (
      <div className="app" id="app-main">
        <div className="campo">
          <img src="imagenes/campo.jpeg" className="campo-imagen" />
          { demoJugadores.map((jugador, i) => {
            return <div key={i} className="jugador-position">
              <JugadorIcon jugador={jugador} />
            </div>
          }) }
        </div>
      </div>
    );
  }
}

export default Jugadores;

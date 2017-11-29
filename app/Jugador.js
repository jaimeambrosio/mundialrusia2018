import React, { Component } from 'react';
import JugadorIcon from './components/jugador/icon';

import demoJugadores from './demo/jugadores';

class Jugador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jugadorActual: demoJugadores[0]
    }
  }

  render() {
    return (
      <div className="app fondo-1" id="app-main">
        <div className="jugadores-lista">
          { demoJugadores.map((jugador) => {
            return <JugadorIcon jugador={jugador} />
          }) }
        </div>
        <div className="jugador-contenido">
          <header className="descripcion-jugador">
            <h1>{ this.state.jugadorActual.nombre }</h1>
            <h2>{ this.state.jugadorActual.perfil.posicion }</h2>
          </header>
          <div className="main-jugador">
            <div className="col-3">
              <div className="imagen-jugador">
                <span className="numero">{ this.state.jugadorActual.numero }</span>
                <img src={ this.state.jugadorActual.perfil.imagen } />
              </div>
            </div>
            <div className="col-5">
              <div className="info-jugador">
              <h2>Actualidad</h2>
              <p>José Paolo Guerrero Gonzáles (Lima, 1 de enero de 1984) es un futbolista peruano que juega como delantero en el Clube de Regatas do Flamengo. También es internacional con la selección peruana de fútbol, de la cual es capitán y máximo goleador histórico.</p>

              <h2>Historia</h2>
              <p>Inició su carrera deportiva en las divisiones menores del club Alianza Lima para luego pasar a las menores del Bayern Múnich, debutando profesionalmente con este equipo en el 2004. Con los bávaros logró el campeonato en 2 Bundesligas y 2 Copas Alemanas. En el 2006 fichó por el Hamburgo consiguiendo la Copa Intertoto en el 2007. Pasó, en el 2012, a fichar con el Corinthians con el que consiguió un Campeonato Paulista, una Copa Mundial de Clubes, donde fue premiado como el mejor delantero recibiendo el Balón de Bronce, logró también el título de la Recopa Sudamericana, convirtiéndose así en el máximo goleador extranjero de la historia del Timão con 54 goles siendo reconocido como el mejor delantero del año 2014 en Brasil.</p>

              </div>
            </div>
            <div className="col-3">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jugador;

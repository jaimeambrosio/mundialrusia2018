import React, { Component } from 'react';

class JugadorIcon extends Component {
  render() {
    const { jugador } = this.props;
    return (
      <div className="miniatura-jugador">
        <div className="imagen-perfil" style={{ backgroundImage: "url(" + jugador.imagen + ")" }}></div>
      </div>
    );
  }
}

export default JugadorIcon;

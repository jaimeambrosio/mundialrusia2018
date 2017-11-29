import React, { Component } from 'react';
import Card from '../card/card';

class Mensaje extends Component {
  render(){
      const { mensaje, addCard } = this.props;
      return(
        <div className={"respuesta  _respuesta-" + mensaje.who}>
          { mensaje.noticia ? <Card card={mensaje} addCard={addCard} />
          : <div className={"respuesta-contenido respuesta-" + mensaje.who}>
            <span dangerouslySetInnerHTML={{__html: mensaje.mensaje}}></span>
          </div> }
        </div>
      )
  }
}

export default Mensaje;

import React, { Component } from 'react';
import Mensaje from './mensaje';

import demoMensajes from '../../demo/mensajes.json';

class Chat extends Component {
  constructor(props){
    super(props);
    this.state = {
      mensajes: demoMensajes
    }
    this.enviarMensaje = this.enviarMensaje.bind(this);
  }

  enviarMensaje(e){
    var text = e.target.value;
    if (e.key === 'Enter' && text) {
      let mensaje = { mensaje: e.target.value, who: "persona" }
      this.setState({
        mensajes: [...this.state.mensajes, mensaje]
      });
      e.target.value = "";
    }
  }

  render() {
      const { addCard } = this.props;
      return(
        <div className="chat" id="chat-conversation">
          <div className="body-conversation">
            <div className="box-conversation">
              { this.state.mensajes && this.state.mensajes.length ? this.state.mensajes.map((msg, i) =>
                <Mensaje key={i} mensaje={msg} addCard={addCard} />
              ) : null }
            </div>
            <div className="box-input-conversation">
              <input type="text" className="input-conversation" placeholder="Hazme una pregunta..."
                onKeyPress={ this.enviarMensaje } />
            </div>
          </div>
        </div>
      )
  }
}

export default Chat;

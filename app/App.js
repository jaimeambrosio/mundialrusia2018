import React, { Component } from 'react';
import Chat from './components/chat/chat';
import Card from './components/card/card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fondos: 2,
      fondoActual: 1,
      cards: []
    }
    this.cambiarFondo = this.cambiarFondo.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  addCard( card ){
    this.setState({
      cards: [...this.state.cards, card]
    });
  }

  cambiarFondo(){
    let _this = this;
    let siguienteFondo = _this.state.fondoActual + 1;
    setTimeout(function () {
      _this.setState({
        fondoActual: siguienteFondo > _this.state.fondos ? 1 : siguienteFondo
      });
    }, 10000);
  }

  render() {
    this.cambiarFondo();
    return (
      <div className={"app fondo-" + this.state.fondoActual} id="app-main">
        <div className="cards-panel">
          { this.state.cards && this.state.cards.length ? this.state.cards.map((card, i) =>
            <Card key={i} card={card.card} />
          ) : null }
        </div>
        <Chat addCard={this.addCard} />
      </div>
    );
  }
}

export default App;

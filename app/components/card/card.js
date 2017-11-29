import React, { Component } from 'react';
import NoticiaCard from './noticia';

class Card extends Component {
  constructor(props){
    super(props);
    this.state = { open: false, esconder: false }
    this.openCard = this.openCard.bind(this);
  }

  openCard(){
    if( this.state.open ) return;
    this.setState({ open: true })

    var _this = this;

    setTimeout(function () {
      _this.setState({ esconder: true });

      console.log( _this.props );

      _this.props.addCard(_this.props);
    }, 1000);
  }

  render(){
    const { card } = this.props;
    return(
      <div className={ (this.state.open ? "card open" : "card" ) + " " + ( this.state.esconder ? "esconder" : "" )  } onClick={this.openCard}>
        <NoticiaCard titulo={card.noticia.titulo} imagen={card.noticia.imagen} resumen={card.noticia.resumen} />
      </div>
    )
  }
}

export default Card;

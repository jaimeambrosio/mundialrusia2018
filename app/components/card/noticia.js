import React, { Component } from 'react';

class NoticiaCard extends Component {
  render(){
    const { titulo, resumen, imagen } = this.props;
    return(
      <div>
        <div className="card-header">
          <h2>{ titulo }</h2>
        </div>
        <div className="card-body">
          <figure><img src={imagen} className="imagen-destacada" /></figure>
          <p className="card-text">{resumen}</p>
        </div>
      </div>
    )
  }
}

export default NoticiaCard;

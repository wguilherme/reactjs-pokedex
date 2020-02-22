import React, { Component } from 'react';
import './Pokecard.css'

//
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`

    return (

      <div className="Pokecard">
        <img src={imgSrc} alt={this.props.name} />
        <h2 className="Pokecard-title">{this.props.name}</h2>
        <div>
          <p className={`Pokecard-type ${this.props.type}`}>Type: {this.props.type}</p>
          <p className="Pokecard-exp">Exp: {this.props.exp}</p>
        </div>
      </div>
    )
  }
}

export default Pokecard;

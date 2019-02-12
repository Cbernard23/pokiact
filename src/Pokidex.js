import React, { Component } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

class Pokidex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokidex: []
    };
  }

  componentDidMount() {
    this.fetchPokidex();
  }

  render() {
    const pokeNames = this.state.pokidex.map(pokemon => pokemon.name);
    return (
      <div className="pokemon">
      {this.state.pokidex.length > 0 &&
        this.state.pokidex.map(pokemon => (
        <PokemonCard
          name={pokemon.name}
          img={pokemon.image}
          types={pokemon.types}
        />
      ))}
      </div>
    );
  }

  async fetchPokidex() {
    let next = "https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=1";
    let res = "";
    while(next != null) {
      res = await axios.get(next);
      next = res.data.links.next;
      this.setState({
        pokidex: [...this.state.pokidex, ...res.data.data]
      });
    }
  }
};


Pokidex.propTypes = {

}

export default Pokidex;

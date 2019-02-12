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
    return (
      <div>
      {this.state.pokidex.data.map(pokemon => (
        <p>{pokemon.name}</p>
      ))}
      </div>
    );
  }

  fetchPokidex() {
    axios.get("https://intern-pokedex.myriadapps.com/api/v1/pokemon")
    .then((res) => {
      console.log(res);
      this.setState({ pokidex: res.data });
      console.log(this.state);
    });
  }
};

Pokidex.propTypes = {

}

export default Pokidex;

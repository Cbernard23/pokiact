import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokemonCard extends Component {
  render() {
    console.log(this.props.types);
    console.log(this.props.img);
    return (
      <>
        <h1>{this.props.name}</h1>
        <img src={this.props.img} />
        <div className="types">
        {this.props.types.map((type) => (
          <p>{type}</p>
        ))}
        </div>
      </>
    );
  }
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string)
}

export default PokemonCard;

import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <Card.Group itemsPerRow={6}>
        { pokemon
        ? pokemon.map(charData => <PokemonCard pokemon={charData} />)
        : '' }
      </Card.Group>
    )
  }
}

export default PokemonCollection

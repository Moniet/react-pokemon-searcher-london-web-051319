import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={ this.props.getSearchTerm } showNoResults={false} />
        <br />
        <PokemonCollection pokemon={ this.props.pokemon } />
        <br />
        <PokemonForm addPokemon={ this.props.addPokemon }/>
      </div>
    )
  }
}

export default PokemonPage

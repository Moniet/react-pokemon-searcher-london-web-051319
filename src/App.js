import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'
import api from './adapters/API'

class App extends React.Component {

  state = {
    allPokemon: [],
    searchTerm: '',
  }


  componentDidMount() {
    this.getAllPokemon()
  }

  getAllPokemon = () => {
    api.fetchPokemon()
      .then(allPokemon => this.setState({ allPokemon }))
  }

  getSearchTerm = e => {
    this.setState({ searchTerm: e.target.value })
  }

  addPokemon = pokemon => {
    api.postPokemon(pokemon)
      .then(this.getAllPokemon)
  }

  render() {
    const  { allPokemon, searchTerm } = this.state;
    const pokemon = allPokemon.filter(pokemon=> pokemon.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

    return (
      <div className="App">
        <PokemonIndex
          pokemon={ pokemon }
          getSearchTerm={ this.getSearchTerm }
          addPokemon={ this.addPokemon }
        />
      </div>
    )
  }
}

export default App

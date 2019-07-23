import React from 'react'
import { Card } from 'semantic-ui-react'



class PokemonCard extends React.Component {

  state = {
    frontImage: this.props.pokemon.sprites.front,
    backImage: this.props.pokemon.sprites.back,
    frontShown: true,
  }

  changeImage = () => {
    this.setState(prevState => ({
      frontShown: !prevState.frontShown
    }))
  }

  render() {
    const { frontImage, backImage, frontShown } = this.state
    const img = frontShown ? frontImage : backImage

    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={ img } onClick={ () => this.changeImage()}/>
          </div>
          <div className="content">
            <div className="header">{ this.props.pokemon.name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { this.props.pokemon.stats.find(ob => ob.name === 'hp').value }
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handeChange = e => {
    const nameStr = e.target.name
    const val = e.target.value

    switch (nameStr) {
      case 'name':
        this.setState({ name: val})
        break
      case 'hp':
        this.setState({ hp: val})
        break
      case 'frontUrl':
        this.setState({ frontUrl: val})
        break
      case 'backUrl':
        this.setState({ backUrl: val})
        break
      default:
        return
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addPokemon(this.state)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit} onChange={this.handeChange}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

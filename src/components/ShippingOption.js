import React from 'react'
import { Form, Input, Title, Button, Text } from '../styles/theme.js'
import { states } from '../utils/States.js'

class ShippingOption extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      weight: '',
      shippingOption: '',
      value: null,
      length: null,
      errors: [],
    }

    this._onChange = this._onChange.bind(this)
    this._validate = this._validate.bind(this)
    this._back = this._back.bind(this)
  }

  _back(e) {
    e.preventDefault()
    this.props.back(states.RECEIVER_ADDRESS)
  }

  _onChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  _validate(e) {
    e.preventDefault()
    // Add validation logic here

    this.props.saveForm({
      weight: this.state.weight,
      shippingOption: this.state.shippingOption,
    })

    this.props.next(states.CONFIRMATION)
  }

  render() {
    return (
      <React.Fragment>
        <Title>Shipping Option</Title>
        <Form>
          <Input type="text" name="weight" placeholder="Weight" value={this.state.weight} onChange={this._onChange} />
          <Input type="text" name="shippingOption" placeholder="Shipping Option" value={this.state.shippingOption} onChange={this._onChange} />
          <Button onClick={this._back}>Back</Button>
          <Button onClick={this._validate}>Next</Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default ShippingOption

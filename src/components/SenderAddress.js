import React from 'react'
import { Form, Input, Title, Button } from '../styles/theme.js'
import { states } from '../utils/States.js'

class SenderAddress extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fromName: '',
      fromStreet: '',
      fromCity: '',
      fromState: '',
      fromZip: '',
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
    this.props.back(states.WELCOME)
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
      fromName: this.state.fromName,
      fromStreet: this.state.fromStreet,
      fromCity: this.state.fromCity,
      fromState: this.state.fromState,
      fromZip: this.state.fromZip,
    })

    this.props.next(states.RECEIVER_ADDRESS)
  }

  render() {
    return (
      <React.Fragment>
        <Title>Sender Address</Title>
        <Form>
          <Input
            type="text"
            name="fromName"
            placeholder="Name"
            defaultValue={this.state.fromName}
            onChange={this._onChange}
          />
          <Input
            type="text"
            name="fromStreet"
            placeholder="Street"
            defaultValue={this.state.fromStreet}
            onChange={this._onChange}
          />
          <Input
            type="text"
            name="fromCity"
            placeholder="City"
            defaultValue={this.state.fromCity}
            onChange={this._onChange}
          />
          <Input
            type="text"
            name="fromState"
            placeholder="State"
            defaultValue={this.state.fromState}
            onChange={this._onChange}
          />
          <Input
            type="text"
            name="fromZip"
            placeholder="Zip"
            defaultValue={this.state.fromZip}
            onChange={this._onChange}
          />
        </Form>
        <Button onClick={this._back}>Back</Button>
        <Button onClick={this._validate}>Next</Button>
      </React.Fragment>
    )
  }
}

export default SenderAddress

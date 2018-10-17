import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form, Input, Title, Button, Text } from '../styles/theme.js'
import { states } from '../utils/States.js'

class ReceiverAddress extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      toName: '',
      toStreet: '',
      toCity: '',
      toState: '',
      toZip: '',
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
    this.props.back(states.SENDER_ADDRESS)
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
      toName: this.state.toName,
      toStreet: this.state.toStreet,
      toCity: this.state.toCity,
      toState: this.state.toState,
      toZip: this.state.toZip,
    })

    this.props.next(states.SHIPPING_OPTION)
  }

  render() {
    return (
      <React.Fragment>
        <Title>Receiver Address</Title>
        <Form>
          <Input type="text" name="toName" placeholder="Name" value={this.state.toName} onChange={this._onChange} />
          <Input type="text" name="toStreet" placeholder="Street" value={this.state.toStreet} onChange={this._onChange} />
          <Input type="text" name="toCity" placeholder="City" value={this.state.toCity} onChange={this._onChange} />
          <Input type="text" name="toState" placeholder="State" value={this.state.toState} onChange={this._onChange} />
          <Input type="text" name="toZip" placeholder="Zip" value={this.state.toZip} onChange={this._onChange} />
          <Button onClick={this._back}>Back</Button>
          <Button onClick={this._validate}>Next</Button>
        </Form>
      </React.Fragment>
    )
  }
}

export default ReceiverAddress

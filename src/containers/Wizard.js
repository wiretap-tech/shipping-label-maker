import React, { Component } from 'react'
import { Welcome, SenderAddress, ReceiverAddress, ShippingOption, Confirm, Success } from 'components'
import { states } from '../utils/States.js'
import { StateMachine } from '../utils/StateMachine.js'

class Wizard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentState: states.WELCOME,
      shippingOptionType: null,
      shippingDetails: [],
      step: 1,
      fromName: '',
      fromStreet: '',
      fromCity: '',
      fromState: '',
      fromZip: '',
      toName: '',
      toStreet: '',
      toCity: '',
      toState: '',
      toZip: '',
      weight: null,
      shippingOption: null,
    }

    this._next = this._next.bind(this)
    this._back = this._back.bind(this)
    this._startOver = this._startOver.bind(this)
    this._saveDetail = this._saveDetail.bind(this)
    this.stateMachine = new StateMachine()
  }

  _next(desiredState) {
    let currentState = this.state.currentState
    let nextState = this.stateMachine.transitionTo(currentState, desiredState)
    this.setState({
      currentState: nextState,
    })
  }

  _back(desiredState) {
    let currentState = this.state.currentState
    this.setState({
      currentState: this.stateMachine.transitionFrom(currentState, desiredState),
    })
  }

  _startOver() {
    this.setState({
      shippingDetails: [],
    })
  }

  _saveDetail(shippingDetail) {
    let shippingDetails = this.state.shippingDetails.concat()
    shippingDetails.push(shippingDetail)
    this.setState({
      shippingDetails: shippingDetails,
    })
  }

  _currentStep() {
    switch (this.state.currentState) {
      case states.WELCOME:
        return <Welcome next={this._next} />
      case states.SENDER_ADDRESS:
        return <SenderAddress saveForm={this._saveDetail} back={this._back} next={this._next} />
      case states.RECEIVER_ADDRESS:
        return <ReceiverAddress saveForm={this._saveDetail} back={this._back} next={this._next} />
      case states.SHIPPING_OPTION:
        return <ShippingOption saveForm={this._saveDetail} back={this._back} next={this._next} />
      case states.CONFIRMATION:
        return <Confirm back={this._back} next={this._next} shippingDetails={this.state.shippingDetails} />
      case states.SUCCESS:
        return <Success shippingDetails={this.state.shippingDetails} />
      default:
        return <Welcome next={this._next} />
    }
  }

  render() {
    return <div>{this._currentStep()}</div>
  }
}

export default Wizard

import React from 'react'
import pure from 'recompose/pure'
import styled from 'styled-components'
import { Form, Title, Button } from '../styles/theme.js'
import { states } from '../utils/States.js'

const Intro = styled.p`
  font-size: large;
  background-color: black;
  padding: 5px;
  color: white;
  width: 300px;
  text-align: center;
  margin: auto;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: 'Raleway', sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`

function Confirm(props) {
  let values = props.shippingDetails
  return (
    <React.Fragment>
      <Title>Review</Title>
      <Intro>Sender Details</Intro>
      <Form>
        <Label>Name: {values[0].fromName}</Label>
        <Label>Street: {values[0].fromStreet}</Label>
        <Label>City: {values[0].fromCity}</Label>
        <Label>Zip: {values[0].fromZip}</Label>
      </Form>
      <Intro>Receiver Details</Intro>
      <Form>
        <Label>Name: {values[1].toName}</Label>
        <Label>Street: {values[1].toStreet}</Label>
        <Label>City: {values[1].toCity}</Label>
        <Label>Zip: {values[1].toZip}</Label>
      </Form>
      <Intro>Shipping Options</Intro>
      <Form>
        <Label>Weight: {values[2].weight}</Label>
        <Label>Shipping: {values[2].shippingOption}</Label>
      </Form>
      <Button onClick={() => props.back(states.SHIPPING_OPTION)}>Back</Button>
      <Button onClick={() => props.next(states.SUCCESS)}>Next</Button>
    </React.Fragment>
  )
}

export default pure(Confirm)

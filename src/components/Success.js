import React from 'react'
import styled from 'styled-components'
import { Title, Text } from '../styles/theme.js'

const ShippingLabel = styled.div`
  width: 300px;
  color: #333;
  font-family: 'Raleway', sans-serif;
  font-size: 0.9em;
  line-height: 18px;
  margin: auto;
  padding: 10px;
  border: solid 1px #333;
  background-color: #eee;
  text-align: left;
`

function Success(props) {
  let values = props.shippingDetails
  return (
    <React.Fragment>
      <Title>Success</Title>
      <Text>Print your shipping order details below</Text>
      <ShippingLabel>
        {values[1].toName}
        <br />
        {values[1].toStreet}
        <br />
        {values[1].toCity}, {values[1].toState} {values[1].toZip}
      </ShippingLabel>
    </React.Fragment>
  )
}

export default Success

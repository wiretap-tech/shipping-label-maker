import React from 'react'
import pure from 'recompose/pure'
import { Title, Button, Text } from '../styles/theme.js'
import { states } from '../utils/States.js'

function Welcome(props) {
  return (
    <React.Fragment>
      <Title>Welcome</Title>
      <Text>Create, save and print shipping labels</Text>
      <Button onClick={() => props.next(states.SENDER_ADDRESS)}>Next</Button>
    </React.Fragment>
  )
}

export default pure(Welcome)

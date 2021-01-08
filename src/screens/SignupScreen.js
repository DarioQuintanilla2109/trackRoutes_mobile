import React from 'react'
import { View, StyleSheet, Keyboard } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Spacer>
        <Text h3> Sign Up for Tracker</Text>
      </Spacer>
      <Spacer>
        <Input label='Email' />
      </Spacer>
      <Spacer>
        <Input label='Password' />
      </Spacer>
      <Spacer>
        <Button style={styles.buttonStyle} title='Sign Up' raised />
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  buttonStyle: {
    color: 'rgb(0,255,0)',
  },
})

export default SignupScreen

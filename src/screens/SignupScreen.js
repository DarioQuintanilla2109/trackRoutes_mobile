import React, { useState, useContext } from 'react'
import { View, StyleSheet, Keyboard } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
      }}
    >
      <Spacer>
        <Text style={{ textAlign: 'center' }} h3>
          {' '}
          Sign Up for Tracker
        </Text>
      </Spacer>
      <Spacer>
        <Input
          autoCapitalize='none'
          autoCorrect={false}
          label='Email'
          value={email}
          onChangeText={newEmail => setEmail(newEmail)} // same as onChangeText = {setEmail}
        />
      </Spacer>
      <Spacer>
        <Input
          autoCapitalize='none'
          autoCorrect={false}
          label='Password'
          label='Password'
          value={password}
          secureTextEntry
          onChangeText={newPassword => setPassword(newPassword)}
        />
      </Spacer>

      <Spacer>
        <Button
          style={styles.buttonStyle}
          title='Sign Up'
          raised
          onPress={() => signup({ email, password })}
        />
      </Spacer>
      {state.errorMessage ? (
        <Text style={{ textAlign: 'center', color: 'red', fontSize: 16 }}>
          {state.errorMessage}
        </Text>
      ) : null}
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  buttonStyle: {
    color: 'rgb(0,255,0)',
  },
  container: {
    borderColor: 'red',
    borderWidth: 10,
  },
})

export default SignupScreen

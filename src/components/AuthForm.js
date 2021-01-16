import React, { useState } from 'react'
import { Text, Button, Input } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import Spacer from './Spacer'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
      <Spacer>
        <Text style={{ textAlign: 'center' }} h3>
          {headerText}
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
          buttonStyle={{
            backgroundColor: 'navy',
          }}
          title={submitButtonText}
          raised
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
      {errorMessage ? (
        <Text style={{ textAlign: 'center', color: 'red', fontSize: 16 }}>
          {errorMessage}
        </Text>
      ) : null}
    </>
  )
}

const style = StyleSheet.create({})

export default AuthForm

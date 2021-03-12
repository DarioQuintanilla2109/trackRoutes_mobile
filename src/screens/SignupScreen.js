import React, { useContext } from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext)
  const image = {
    uri: 'https://www.transparenttextures.com/patterns/black-mamba.png',
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#f4f0ff' }}>
      <View
        style={{
          flex: 1,
          marginBottom: 200,
          justifyContent: 'center',
        }}
      >
        <AuthForm
          headerText='Hello'
          errorMessage={state.errorMessage}
          submitButtonText='Sign up'
          onSubmit={signup} //could just call signup
        />
        <NavLink routeName='Signin' text='Already have an account? Sign in' />
      </View>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    textAlign: 'center',
  },
  imgStyle: {
    width: 'auto',
  },
})

export default SignupScreen

import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
      }}
    >
      <AuthForm
        headerText='Sign up for Tracker'
        errorMessage={state.errorMessage}
        submitButtonText='Sign up'
        onSubmit={signup} //could just call signup
      />
      <NavLink routeName='Signin' text='Already have an account? Sign in' />
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
})

export default SignupScreen

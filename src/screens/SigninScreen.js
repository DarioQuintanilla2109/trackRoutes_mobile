import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'

const SigninScreen = ({ navigation }) => {
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
        headerText='Sign in for Tracker'
        errorMessage={state.errorMessage}
        submitButtonText='Sign in'
        onSubmit={signup} //could just call signup
      />
      <NavLink routeName='Signup' text='Dont have an account? Sign up' />
    </View>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    viewContainer: {
      flex: 1,
    },
    headerShown: false,
  }
}

const styles = StyleSheet.create({})

export default SigninScreen

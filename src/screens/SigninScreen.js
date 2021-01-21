import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'
import { useFocusEffect } from '@react-navigation/native'

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200,
      }}
    >
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText='Sign in for Tracker'
        errorMessage={state.errorMessage}
        submitButtonText='Sign in'
        onSubmit={signin} //could just call signup
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

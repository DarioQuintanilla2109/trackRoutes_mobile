import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import createDataContext from './createDataContext'
import trackerAPI from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signin':
      return { errorMessage: '', token: action.payload }
    case 'clear_error_message':
      return { ...state, errorMesage: '' }
    case 'signout':
      return { token: null, errorMessage: '' }
    default:
      return state
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({
    type: 'clear_error_message',
  })
}

const signup = dispatch => {
  //make API request to sign up with email and password

  //if we sign up, modify our state

  //if sign up fails, reflect error message
  return async ({ email, password }) => {
    try {
      const resp = await trackerAPI.post('/signup', { email, password })

      await AsyncStorage.setItem('token', resp.data.token)

      dispatch({ type: 'signin', payload: resp.data.token })

      navigate('TrackList')
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: `${err}`,
      })
    }
  }
}

const signin = dispatch => {
  //try to sign in
  //handle success, update state
  //handle failure
  return async ({ email, password }) => {
    try {
      const resp = await trackerAPI.post('/signin', { email, password })

      await AsyncStorage.setItem('token', resp.data.token)

      dispatch({ type: 'signin', payload: resp.data.token })

      navigate('TrackList')
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: `${err}`,
      })
    }
  }
}

//we can reload app and still be signed in
const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  if (token) {
    dispatch({ type: 'signin', payload: token })
    navigate('TrackList')
  } else {
    navigate('Signup')
  }
}

const signout = dispatch => async () => {
  //sign out
  await AsyncStorage.removeItem('token')
  dispatch({ type: 'signout' })
  navigate('loginFlow')
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: '' }
)

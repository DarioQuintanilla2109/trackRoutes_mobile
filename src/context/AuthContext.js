import createDataContext from './createDataContext'
import trackerAPI from '../api/tracker'

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const signup = dispatch => {
  //make API request to sign up with email and password

  //if we sign up, modify our state

  //if sign up fails, reflect error message
  return async ({ email, password }) => {
    try {
      const resp = await trackerAPI.post('/signup', { email, password })
      console.log(resp.data)
    } catch (err) {
      console.log(err.message)
    }
  }
}

const signin = dispatch => {
  //try to sign in
  //handle success, update state
  //handle failure
  return ({ email, password }) => {}
}

const signout = dispatch => {
  //sign out
  return () => {}
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
)

import { NavigationActions } from 'react-navigation'

let navigator

//helper function for naviation
export const setNavigator = nav => {
  navigator = nav
}

//change in state in navigation
export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName: routeName,
      params: params,
    })
  )
}

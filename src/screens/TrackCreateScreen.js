import React, { useContext, useCallback } from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import useLocation from '../hooks/useLocation'
import Map from '../components/Map'
import '../_mockLocation'
import { Context as LocationContext } from '../context/LocationContext'
import TrackForm from '../components/TrackForm'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext)

  const callback = useCallback(
    location => {
      addLocation(location, recording)
    },
    [recording]
  )

  const [err] = useLocation(isFocused || recording, callback)

  return (
    <SafeAreaView>
      <Map />
      {err ? <Text>Please enable location</Text> : null}
      <TrackForm />
    </SafeAreaView>
  )
}

TrackCreateScreen.navigationOptions = {
  tabBarIcon: (
    <MaterialCommunityIcons
      style={{ marginTop: 20 }}
      name='record-rec'
      size={48}
      color='red'
    />
  ),
  title: '',
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)

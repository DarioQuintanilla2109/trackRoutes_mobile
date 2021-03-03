import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import useLocation from '../hooks/useLocation'
import Map from '../components/Map'
import '../_mockLocation'
import { Context as LocationContext } from '../context/LocationContext'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext)
  const [err] = useLocation(isFocused, location => {
    addLocation(location, state.recording)
  })

  console.log(isFocused)
  return (
    <SafeAreaView>
      <Map />
      {err ? <Text>Please enable location</Text> : null}
      <TrackForm />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)

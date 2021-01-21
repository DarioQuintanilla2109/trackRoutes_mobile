import React from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'

import Map from '../components/Map'

const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <Map />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
})

export default TrackCreateScreen

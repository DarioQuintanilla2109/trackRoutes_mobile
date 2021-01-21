import React from 'react'
import { Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

const Map = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.33,
        longitude: -122.03,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    />
  )
}

const styles = StyleSheet.create({
  map: {
    height: 400,
  },
})

export default Map
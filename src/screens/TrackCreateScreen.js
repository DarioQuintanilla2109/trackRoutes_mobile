import React, { useEffect, useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location'
import Map from '../components/Map'
import '../_mockLocation'
import { Context as LocationContext } from '../context/LocationContext'

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext)

  useEffect(() => {
    startWatching()
  }, [])

  const [err, setErr] = useState(null)
  const startWatching = async () => {
    try {
      await requestPermissionsAsync()
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        location => {
          addLocation(location)
        }
      )
    } catch (e) {
      setErr(e)
    }
  }

  return (
    <SafeAreaView>
      <Map />
      {err ? <Text>Please enable location</Text> : null}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default TrackCreateScreen

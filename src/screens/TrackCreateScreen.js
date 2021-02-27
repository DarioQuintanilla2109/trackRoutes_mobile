import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { requestPermissionsAsync } from 'expo-location'
import Map from '../components/Map'

const TrackCreateScreen = () => {
  useEffect(() => {
    startWatching()
  }, [])

  const [err, setErr] = useState(null)
  const startWatching = async () => {
    try {
      await requestPermissionsAsync()
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

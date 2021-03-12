import React, { useContext } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'
import { MIAMI } from '../images/ma'
const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext)
  const _id = navigation.getParam('_id')
  //getting track in our state
  const track = state.find(t => t._id === _id)
  const initialCoords = track.locations[0].coords

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> {track.name} track </Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </View>
  )
}

TrackDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('TrackList')}>
        <Image style={styles.imgStyle} source={MIAMI} />
      </TouchableOpacity>
    ),
    title: '',
  }
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  container: {
    flex: 1,
    backgroundColor: '#f4f0ff',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 34,
    marginBottom: 30,
    marginTop: 15,
    color: 'blue',
  },
  imgStyle: {
    height: 60,
    width: 60,
    marginRight: 15,
    borderRadius: 50,
    marginBottom: 20,
    margin: 0,
  },
})

export default TrackDetailScreen

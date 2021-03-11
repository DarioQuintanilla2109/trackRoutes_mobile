import React, { useContext } from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'
import { ListItem } from 'react-native-elements'
import { MIAMI } from '../images/ma'
const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext)
  console.log(state)
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TrackDetail', { _id: item._id })
              }
            >
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          )
        }}
      />
    </>
  )
}

TrackListScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate('TrackList')}>
        <Image style={styles.imgStyle} source={MIAMI} />
      </TouchableOpacity>
    ),
    headerStyle: {},
  }
}

const styles = StyleSheet.create({
  imgStyle: {
    height: 60,
    width: 60,
    marginLeft: 15,
    borderRadius: 50,
    marginBottom: 20,
    margin: 0,
  },
})

export default TrackListScreen

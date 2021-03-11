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
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view'
import { AntDesign } from '@expo/vector-icons'

const TrackListScreen = ({ navigation }) => {
  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity onPress={() => null}>
        <Text style={[styles.backTextWhite, styles.backRightBtnLeft]}>
          <AntDesign name='delete' size={24} color='black' />
        </Text>
      </TouchableOpacity>
    </View>
  )

  const { state, fetchTracks } = useContext(TrackContext)
  //console.log(state)
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />

      <SwipeListView
        renderHiddenItem={renderHiddenItem}
        disableLeftSwipe={true}
        leftOpenValue={100}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <View
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
            </View>
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
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#ffa62b',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtnLeft: {
    backgroundColor: '#ffa62b',
    left: 10,
  },
})

export default TrackListScreen

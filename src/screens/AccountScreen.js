import React, { useContext } from 'react'
import { View, StyleSheet, Text, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { SafeAreaView } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AccountScreen = () => {
  const { signout } = useContext(AuthContext)
  const background = {
    uri: 'https://www.transparenttextures.com/patterns/cartographer.png',
  }
  return (
    <View style={styles.safeView} forceInset={{ top: 'always' }}>
      <ImageBackground source={background} style={styles.background}>
        <Spacer>
          <Button
            style={{
              justifyContent: 'center',
              marginTop: 100,
              height: '70%',
            }}
            title='Sign Out'
            onPress={signout}
          />
        </Spacer>
      </ImageBackground>
    </View>
  )
}

AccountScreen.navigationOptions = {
  tabBarIcon: (
    <TouchableOpacity>
      <MaterialIcons name='settings' size={36} color='#fa824c' />
    </TouchableOpacity>
  ),
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#f4f0ff',
  },
})

export default AccountScreen

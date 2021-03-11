import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import { SafeAreaView } from 'react-navigation'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AccountScreen = () => {
  const { signout } = useContext(AuthContext)

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text> Account Screen</Text>
      <Spacer>
        <Button title='Sign Out' onPress={signout} />
      </Spacer>
    </SafeAreaView>
  )
}

AccountScreen.navigationOptions = {
  tabBarIcon: (
    <TouchableOpacity>
      <MaterialIcons name='settings' size={36} color='#fa824c' />
    </TouchableOpacity>
  ),
}

const styles = StyleSheet.create({})

export default AccountScreen

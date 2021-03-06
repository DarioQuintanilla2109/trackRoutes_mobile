import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext)

  console.log(locations.length)
  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder='Enter track name'
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button
            buttonStyle={styles.buttonStyle}
            title='Stop Recording'
            onPress={stopRecording}
          />
        ) : (
          <Button title='Start Recording' onPress={startRecording} />
        )}
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'red',
  },
})

export default TrackForm

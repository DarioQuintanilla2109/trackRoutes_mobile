import * as Location from 'expo-location'

const tenMeters = 0.0001

const getLocation = increment => {
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -80.22353963985385 + increment * tenMeters,
      latitude: 26.237181238515344 + increment * tenMeters,
    },
  }
}

let counter = 0
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  })
  counter++
}, 1000)

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const instance = axios.create({
  baseURL: 'http://969423d1a19c.ngrok.io',
})

//if we have token will be automcatically added into our request
instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

export default instance

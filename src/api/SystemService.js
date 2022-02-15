import axios from './axios'
import { systemURL } from './URLS'

export default class SystemService {
   static async fetchReferences() {
      return await axios.get(systemURL.FETCH_REFERENCES)
   }
   static async fetchSocUrls() {
      return await axios.get(systemURL.FETCH_SOC_URLS)
   }
   static async fetchUserSettings() {
      return await axios.get(systemURL.FETCH_USER_SETTINGS)
   }
}

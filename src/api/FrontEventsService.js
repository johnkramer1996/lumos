import axios from './axios'
import { frontEventsURL } from './URLS'

export default class FrontEventsService {
   static async fetchFrontEvents({ body = {} } = {}) {
      return await axios.post(frontEventsURL.FETCH_EVENTS, body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async fetchFrontEvent({ eventId = 1 } = {}) {
      return await axios.get(frontEventsURL.FETCH_EVENT({ eventId }))
   }
   static async fetchFrontAuthEvents({ body = {} } = {}) {
      return await axios.post(frontEventsURL.FETCH_AUTH_EVENTS, body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async fetchFrontAuthEvent({ eventId = 1 } = {}) {
      console.log(frontEventsURL.FETCH_AUTH_EVENT({ eventId }))
      return await axios.get(frontEventsURL.FETCH_AUTH_EVENT({ eventId }))
   }
}

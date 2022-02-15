import axios from './axios'
import { trainerEventsURL, userEventsURL } from './URLS'

export default class EventsService {
   static async fetchEvents(params) {
      console.log(params)
      return await axios.get(trainerEventsURL.FETCH_EVENTS, {
         params,
      })
   }
   static async addEvent({ body = {} } = {}) {
      return await axios.post(trainerEventsURL.ADD_EVENT, body, {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
      })
   }
   static async fetchEvent({ eventId = 1 } = {}) {
      return await axios.get(trainerEventsURL.FETCH_EVENT({ eventId }))
   }
   static async putEvent({ eventId = 0, body = {} } = {}) {
      body.append('_method', 'PUT')
      console.log(body)
      return await axios.post(trainerEventsURL.PUT_EVENT({ eventId }), body, {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
      })
   }
   static async patchEvent({ eventId = 0, body = {} } = {}) {
      body.append('_method', 'PATCH')
      return await axios.post(trainerEventsURL.PATCH_EVENT({ eventId }), body, {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
      })
   }
   static async deleteEvent({ eventId = 0 } = {}) {
      return await axios.delete(trainerEventsURL.DELETE_EVENT({ eventId }))
   }
   static async addUserToEvent({ body = {} } = {}) {
      return await axios.post(userEventsURL.ADD_USER, body)
   }
   static async fetchUserEvents() {
      return await axios.get(userEventsURL.FETCH_EVENTS)
   }
}

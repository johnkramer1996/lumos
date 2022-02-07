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
    static async fetchFrontEvents({ courseId = 1 } = {}) {
        return await axios.get(frontEventsURL.FETCH_EVENT({ courseId }))
    }
}

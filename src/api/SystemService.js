import axios from './axios'
import { systemURL } from './urls'

export default class SystemService {
    static async fetchReferences() {
        try {
            return await axios.get(systemURL.FETCH_REFERENCES, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        } catch (error) {
            return error.response
        }
    }
}

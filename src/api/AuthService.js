import axios from './axios'
import { authURL } from './URLS'

export default class AuthService {
    static async login(body = {}) {
        return await axios.post(authURL.LOGIN, JSON.stringify(body), {
            headers: { 'Content-Type': 'application/json' },
        })
    }
    static async restore(body = {}) {
        return await axios.post(authURL.RESTORE, JSON.stringify(body), {
            headers: { 'Content-Type': 'application/json' },
        })
    }
    static async auth() {
        return await axios.get(authURL.AUTHORIZATION, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
    static async checkEmail(body = {}) {
        return await axios.post(authURL.CHECK_EMAIL, JSON.stringify(body), {
            headers: { 'Content-Type': 'application/json' },
        })
    }
    static async register(body = {}) {
        return await axios.post(authURL.REGISTER, JSON.stringify(body), {
            headers: { 'Content-Type': 'application/json' },
        })
    }
}

import axios from './axios'
import { authURL } from './urls'

export default class AuthService {
    static async auth() {
        try {
            return await axios.get(authURL.AUTHORIZATION_URL, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
        } catch (error) {
            return error.response
        }
    }
    static async checkEmail(body = {}) {
        try {
            return await axios.post(authURL.CHECK_EMAIL_URL, JSON.stringify(body), {
                headers: { 'Content-Type': 'application/json' },
            })
        } catch (error) {
            return error.response
        }
    }
    static async login(body = {}) {
        try {
            return await axios.post(authURL.LOGIN_URL, JSON.stringify(body), {
                headers: { 'Content-Type': 'application/json' },
            })
        } catch (error) {
            return error.response
        }
    }
    static async register(body = {}) {
        try {
            return await axios.post(authURL.REGISTER_URL, JSON.stringify(body), {
                headers: { 'Content-Type': 'application/json' },
            })
        } catch (error) {
            return error.response
        }
    }
}

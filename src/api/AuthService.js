import axios from './axios'
import { authURL } from './URLS'

export default class AuthService {
   static async login(body = {}) {
      return await axios.post(authURL.LOGIN, body)
   }
   static async restore(body = {}) {
      return await axios.post(authURL.RESTORE, body)
   }
   static async checkEmail(body = {}) {
      return await axios.post(authURL.CHECK_EMAIL, body)
   }
   static async register(body = {}) {
      return await axios.post(authURL.REGISTER, body)
   }
   static async auth() {
      return await axios.get(authURL.AUTHORIZATION)
   }
   static async settings({ body = {} } = {}) {
      return await axios.post(authURL.SETTINGS, body, {
         headers: {
            'Content-Type': 'multipart/form-data',
         },
      })
   }
   static async changeEmail(body = {}) {
      return await axios.post(authURL.CHANGE_EMAIL, body)
   }
}

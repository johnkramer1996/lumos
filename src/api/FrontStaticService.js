import axios from './axios'
import { frontStaticURL } from './URLS'

export default class FrontStaticService {
   static async fetchFrontFaq() {
      return await axios.get(frontStaticURL.FETCH_FAQ)
   }
   static async fetchFrontContacts() {
      return await axios.get(frontStaticURL.FETCH_CONTACTS)
   }
   static async sendFrontContacts({ body = {} }) {
      console.log(body)
      return await axios.post(frontStaticURL.SEND_CONTACTS, body, {
         headers: {
            'Content-Type': 'application/json',
         },
      })
   }
   static async fetchFrontBlogCategory() {
      return await axios.get(frontStaticURL.FETCH_BLOG_CATEGORY)
   }
   static async fetchFrontPages() {
      return await axios.get(frontStaticURL.FETCH_PAGES)
   }
   static async fetchFrontPage({ pageId = 1 } = {}) {
      return await axios.get(frontStaticURL.FETCH_PAGE({ pageId }))
   }
}

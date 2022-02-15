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
      return await axios.post(frontStaticURL.SEND_CONTACTS, body)
   }
   static async fetchFrontBlogCategory(params) {
      return await axios.get(frontStaticURL.FETCH_BLOG_CATEGORY, {
         params,
      })
   }
   static async fetchFrontBlog({ blogId = 0 } = {}) {
      return await axios.get(frontStaticURL.FETCH_BLOG({ blogId }))
   }
   static async fetchFrontPages() {
      return await axios.get(frontStaticURL.FETCH_PAGES)
   }
   static async fetchFrontPage({ pageId = 0 } = {}) {
      return await axios.get(frontStaticURL.FETCH_PAGE({ pageId }))
   }
}

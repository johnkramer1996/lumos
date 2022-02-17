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
   static async fetchFrontBlogComments({ blogId = 0, ...params } = {}) {
      return await axios.get(frontStaticURL.FETCH_BLOG_COMMENTS({ blogId }), {
         params,
      })
   }
   static async addFrontBlogComment({ blogId = 0, ...body } = {}) {
      return await axios.post(frontStaticURL.ADD_BLOG_COMMENT({ blogId }), body)
   }
   static async fetchFrontPages() {
      return await axios.get(frontStaticURL.FETCH_PAGES)
   }
   static async fetchFrontPage({ pageId = 0 } = {}) {
      return await axios.get(frontStaticURL.FETCH_PAGE({ pageId }))
   }
   static async fetchFrontUser({ userId = 0 } = {}) {
      return await axios.get(frontStaticURL.FETCH_USER({ userId }))
   }
}

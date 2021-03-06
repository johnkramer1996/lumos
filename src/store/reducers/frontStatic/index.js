import { frontStaticTypes } from './types'

const initialState = {
   faqData: {},
   faq: [],
   contacts: {},
   blogCategoryData: {},
   blogCategory: [],
   blogs: { allBlogs: [], popularBlogs: [], newBlogs: [] },
   blog: [],
   interested: [],
   pagesData: {},
   pages: [],
   page: {},
   user: { user: {}, courses: [], events: [] },
}

export default function frontStaicReducer(state = initialState, action) {
   switch (action.type) {
      case frontStaticTypes.RESET_FRONT_STATIC:
         return { ...initialState }
      case frontStaticTypes.SET_FRONT_FAQ_DATA:
         return { ...state, faqData: action.payload }
      case frontStaticTypes.SET_FRONT_FAQ:
         return { ...state, faq: action.payload }
      case frontStaticTypes.SET_FRONT_CONTACTS:
         return { ...state, contacts: action.payload }
      case frontStaticTypes.SET_FRONT_BLOG_CATEGORY_DATA:
         return { ...state, blogCategoryData: action.payload }
      case frontStaticTypes.SET_FRONT_BLOG_CATEGORY:
         return { ...state, blogCategory: action.payload }
      case frontStaticTypes.SET_FRONT_BLOGS:
         return { ...state, blogs: action.payload }
      case frontStaticTypes.SET_FRONT_BLOG:
         return { ...state, blog: action.payload }
      case frontStaticTypes.SET_FRONT_INTERESTED:
         return { ...state, interested: action.payload }
      case frontStaticTypes.SET_FRONT_PAGES_DATA:
         return { ...state, pagesData: action.payload }
      case frontStaticTypes.SET_FRONT_PAGES:
         return { ...state, pages: action.payload }
      case frontStaticTypes.SET_FRONT_PAGE:
         return { ...state, page: action.payload }
      case frontStaticTypes.SET_FRONT_USER:
         return { ...state, user: action.payload }
      default:
         return state
   }
}

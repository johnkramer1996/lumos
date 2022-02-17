import FrontStaticService from 'api/FrontStaticService'
import { crateActionCreator, crateHandles } from 'utils'
import { frontStaticTypes } from './types'

export const FrontStaticActionCreators = {
   resetFrontStatic: (payload) => ({ type: frontStaticTypes.RESET_FRONT_EVENTS, payload }),
   setFrontStaticFaqData: (payload) => ({ type: frontStaticTypes.SET_FRONT_FAQ_DATA, payload }),
   setFrontStaticFaq: (payload) => ({ type: frontStaticTypes.SET_FRONT_FAQ, payload }),
   setFrontStaticContacts: (payload) => ({ type: frontStaticTypes.SET_FRONT_CONTACTS, payload }),
   setFrontStaticBlogCategoryData: (payload) => ({ type: frontStaticTypes.SET_FRONT_BLOG_CATEGORY_DATA, payload }),
   setFrontStaticBlogCategory: (payload) => ({ type: frontStaticTypes.SET_FRONT_BLOG_CATEGORY, payload }),
   setFrontStaticBlogs: (payload) => ({ type: frontStaticTypes.SET_FRONT_BLOGS, payload }),
   setFrontStaticBlog: (payload) => ({ type: frontStaticTypes.SET_FRONT_BLOG, payload }),
   setFrontStaticInterested: (payload) => ({ type: frontStaticTypes.SET_FRONT_INTERESTED, payload }),
   setFrontStaticPagesData: (payload) => ({ type: frontStaticTypes.SET_FRONT_BLOG_CATEGORY_DATA, payload }),
   setFrontStaticPages: (payload) => ({ type: frontStaticTypes.SET_FRONT_PAGES, payload }),
   setFrontStaticPage: (payload) => ({ type: frontStaticTypes.SET_FRONT_PAGE, payload }),
   setFrontStaticUser: (payload) => ({ type: frontStaticTypes.SET_FRONT_USER, payload }),
   ...crateActionCreator(FrontStaticService),
}

export const defaultHandlers = crateHandles(FrontStaticService)

export const frontStaticHandlers = {
   ...defaultHandlers,
   fetchFrontFaq: {
      ...defaultHandlers.fetchFrontFaq,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(FrontStaticActionCreators.setFrontStaticFaqData(prevData || {}))
         dispatch(FrontStaticActionCreators.setFrontStaticFaq(data || []))
      },
   },
   fetchFrontContacts: {
      ...defaultHandlers.fetchFrontContacts,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(FrontStaticActionCreators.setFrontStaticContacts(data || {}))
      },
   },
   //  sendFrontContacts
   fetchFrontBlogCategory: {
      ...defaultHandlers.fetchFrontBlogCategory,
      success: ({ dispatch, response, prevData, data }) => {
         const allBlogs = response.data?.all_blogs || []
         const newBlogs = response.data?.new || []
         const popularBlogs = response.data?.popular || []
         console.log(response)
         dispatch(FrontStaticActionCreators.setFrontStaticBlogCategoryData(prevData || {}))
         dispatch(FrontStaticActionCreators.setFrontStaticBlogCategory(data || []))
         dispatch(
            FrontStaticActionCreators.setFrontStaticBlogs({
               allBlogs,
               newBlogs,
               popularBlogs,
            }),
         )
      },
   },
   fetchFrontBlog: {
      ...defaultHandlers.fetchFrontBlog,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(FrontStaticActionCreators.setFrontStaticBlog(data?.blog || []))
         dispatch(FrontStaticActionCreators.setFrontStaticInterested(data?.interested || []))
      },
   },
   fetchFrontBlogComments: {
      ...defaultHandlers.fetchFrontBlogComments,
      success: ({ dispatch, response, prevData, data }) => {
         console.log(data)
      },
   },
   //addFrontBlogcomment
   fetchFrontPages: {
      ...defaultHandlers.fetchFrontPages,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(FrontStaticActionCreators.setFrontStaticPagesData(prevData || {}))
         dispatch(FrontStaticActionCreators.setFrontStaticPages(data || []))
      },
   },
   fetchFrontPage: {
      ...defaultHandlers.fetchFrontPage,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(FrontStaticActionCreators.setFrontStaticPage(data || {}))
      },
   },
   fetchFrontUser: {
      ...defaultHandlers.fetchFrontUser,
      success: ({ dispatch, response, prevData, data }) => {
         const user = data?.user || {}
         const courses = data?.courses || []
         const events = data?.events || []
         dispatch(
            FrontStaticActionCreators.setFrontStaticUser({
               ...data,
               user,
               courses,
               events,
            }),
         )
      },
   },
}

import FrontStaticService from 'api/FrontStaticService'
import { crateActionCreator, crateHandles } from 'utils'
import { frontStaticTypes } from './types'

export const FrontStaticActionCreators = {
   resetFrontStatic: (payload) => ({ type: frontStaticTypes.RESET_FRONT_EVENTS, payload }),
   setFrontStaticData: (payload) => ({ type: frontStaticTypes.SET_FRONT_STATIC_DATA, payload }),
   setFrontStaticFaq: (payload) => ({ type: frontStaticTypes.SET_FRONT_STATIC_FAQ, payload }),
   setFrontStaticContacts: (payload) => ({ type: frontStaticTypes.SET_FRONT_STATIC_CONTACTS, payload }),
   ...crateActionCreator(FrontStaticService),
}

export const defaultHandlers = crateHandles(FrontStaticService)

export const frontStaticHandlers = {
   ...defaultHandlers,
   fetchFrontFaq: {
      ...defaultHandlers.fetchFrontFaq,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(FrontStaticActionCreators.setFrontStaticData(prevData || {}))
         dispatch(FrontStaticActionCreators.setFrontStaticFaq(data || []))
      },
   },
   fetchFrontContacts: {
      ...defaultHandlers.fetchFrontContacts,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(FrontStaticActionCreators.setFrontStaticContacts(data || {}))
      },
   },
   sendFrontContacts: {
      ...defaultHandlers.sendFrontContacts,
   },
}

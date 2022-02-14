import FrontStaticService from 'api/FrontStaticService'
import { crateActionCreator, crateHandles } from 'utils'
import { frontStaticTypes } from './types'

export const FrontStaticActionCreators = {
   resetFrontStatic: (payload) => ({ type: frontStaticTypes.RESET_FRONT_EVENTS, payload }),
   setFrontStaticData: (payload) => ({ type: frontStaticTypes.SET_FRONT_STATIC_DATA, payload }),
   setFrontStaticList: (payload) => ({ type: frontStaticTypes.SET_FRONT_STATIC_LIST, payload }),
   ...crateActionCreator(FrontStaticService),
}

export const defaultHandlers = crateHandles(FrontStaticService)

export const frontStaticHandlers = {
   ...defaultHandlers,
   fetchFrontFaq: {
      ...defaultHandlers.fetchFrontFaq,
      success: ({ dispatch, response, prevData, data }) => {
         dispatch(FrontStaticActionCreators.setFrontStaticData(prevData || {}))
         dispatch(FrontStaticActionCreators.setFrontStaticList(data || []))
      },
   },
}

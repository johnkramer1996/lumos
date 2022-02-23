import { Loader, LoaderWrapper } from 'components/ui'
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { isFunction } from 'utils'

const Tabs = ({ children, items = [], isLoading = false, classPrefix = 'course-report', isAvaibleIndex, activeTabIndex }, ref) => {
   const location = useLocation()
   const navigate = useNavigate()
   const { activeStep = 0 } = location?.state || {}

   useEffect(() => {
      activeTabIndex && changeStep(activeTabIndex)
   }, [])

   const events = {
      setItemsByIndex: (activeIndex) => changeStep(activeIndex),
      nextItems: () => events.setItemsByIndex(activeStep + 1 >= items.length ? 0 : activeStep + 1),
      changeTab: (index) => !(isFunction(isAvaibleIndex) && !isAvaibleIndex(index)) && events.setItemsByIndex(index),
      getIndex: () => activeStep,
   }

   useImperativeHandle(ref, () => events)

   const changeStep = (index) => {
      navigate(
         {
            ...location,
         },
         {
            state: {
               activeStep: index,
            },
         },
      )
   }

   const Component = items[activeStep].component

   return (
      <>
         {!!items.length && (
            <>
               <div className={`${classPrefix}__nav`}>
                  <div className={`${classPrefix}__tabs`}>
                     {items.map(({ title, notifications }, index) => (
                        <div
                           key={index}
                           className={`${classPrefix}__tab${activeStep === index ? ` ${classPrefix}__tab--active` : ''} ${classPrefix}__tab${
                              notifications ? ` ${classPrefix}__tab--notification` : ''
                           }`}
                           onClick={() => events.changeTab(index)}
                        >
                           {title}
                           <i>{notifications ? notifications : ''}</i>
                        </div>
                     ))}
                  </div>
               </div>
               <LoaderWrapper isLoading={isLoading}>
                  <div className={`${classPrefix}__content ${classPrefix}__content--active`}>
                     {isFunction(children) ? children({ activeStep, refTabs: ref }) : children ? children : typeof Component === 'object' ? Component : <Component {...items[activeStep].props} />}
                  </div>
               </LoaderWrapper>
            </>
         )}
      </>
   )
}

export default forwardRef(Tabs)

// itemsState.items.map(({ component }, index) => (
//     <div key={index} className={`${classPrefix}__content${itemsState.activeIndex === index ? ` ${classPrefix}__content--active` : ''}`}>
//         {component}
//     </div>
// ))

{
}

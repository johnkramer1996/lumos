import React, { useEffect } from 'react'
import { Faq as FaqComponent } from 'components/'
import { useDispatch, useRequest } from 'hooks'
import { useSelector } from 'react-redux'
import { frontStaticSelectors } from 'store/selectors'

const Faq = () => {
   const { fetchFrontFaq } = useDispatch()
   const faq = useSelector(frontStaticSelectors.getFaq)

   const fetchFrontFaqRequest = useRequest({
      request: fetchFrontFaq,
   })

   useEffect(() => {
      fetchFrontFaqRequest.call()
   }, [])

   return <FaqComponent items={faq} />
}

export default Faq

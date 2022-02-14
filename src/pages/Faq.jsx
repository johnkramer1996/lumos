import React, { useEffect } from 'react'
import { Faq as FaqComponent } from 'components/'
import { useDispatch, useRequest } from 'hooks'
import { useSelector } from 'react-redux'

const Faq = () => {
   const { fetchFrontFaq } = useDispatch()
   const { list } = useSelector(({ frontStatic }) => frontStatic)

   const fetchFrontFaqRequest = useRequest({
      request: fetchFrontFaq,
   })

   useEffect(() => {
      fetchFrontFaqRequest.call()
   }, [])

   return <FaqComponent items={list} />
}

export default Faq

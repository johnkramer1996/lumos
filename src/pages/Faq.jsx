import React, { useEffect } from 'react'
import { Faq as FaqComponent, FaqContacts, FaqCard } from 'components/'
import { useDispatch, useNavigate, useRequest } from 'hooks'
import { useSelector } from 'react-redux'
import { frontStaticSelectors } from 'store/selectors'
import { Button, LoaderWrapper } from 'components/ui'

const Faq = () => {
   const { fetchFrontFaq } = useDispatch()
   const faq = useSelector(frontStaticSelectors.getFaq)

   const fetchFrontFaqRequest = useRequest({
      request: fetchFrontFaq,
      loading: true,
   })

   useEffect(() => {
      fetchFrontFaqRequest.call()
   }, [])

   return (
      <section className='faq'>
         <div className='container'>
            <div className='faq__inner'>
               <div className='faq__left'>
                  <h1 className='faq__title'>Часто задаваемые вопросы</h1>
                  <div className='faq__items'>
                     <LoaderWrapper isLoading={fetchFrontFaqRequest.isLoading}>
                        {faq.map((props) => (
                           <FaqCard key={props.id} {...props} />
                        ))}
                     </LoaderWrapper>
                  </div>
               </div>
               <aside className='faq__right'>
                  <FaqContacts />
               </aside>
            </div>
         </div>
      </section>
   )
}

export default Faq

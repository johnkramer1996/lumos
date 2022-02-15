import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { frontStaticSelectors } from 'store/selectors'
import { useDispatch, useRequest } from 'hooks'
import { Link, useParams } from 'react-router-dom'
import { getURL } from 'utils'
import { Loader } from 'components/ui'
import { Share } from 'components'

const PagesItem = () => {
   const { pageId } = useParams()
   const { fetchFrontPage } = useDispatch()
   const page = useSelector(frontStaticSelectors.getPage)
   const { image, title, text } = page

   const fetchFrontPageRequest = useRequest({ request: fetchFrontPage })

   useEffect(() => {
      console.log(pageId)
      fetchFrontPageRequest.call({ pageId })
   }, [pageId])

   return (
      <section className='blog-page'>
         {fetchFrontPageRequest.isLoading ? (
            <Loader />
         ) : (
            <div className='container'>
               <div className='breadcrumbs'>
                  <Link to='/' className='breadcrumbs__item'>
                     Главная
                  </Link>
                  <span className='breadcrumbs__item'>{title}</span>
               </div>
               <h1 className='blog-page__title display-3'>{title}</h1>
               {image && (
                  <div className='blog-page__img'>
                     <img src={getURL.img(image)} alt='' />
                  </div>
               )}
               <div className='blog-page__wrap'>
                  <div className='blog-page__left' dangerouslySetInnerHTML={{ __html: text }} />
                  <div className='blog-page__right'>
                     <Share />
                  </div>
               </div>
            </div>
         )}
      </section>
   )
}

export default PagesItem

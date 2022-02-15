import React, { useEffect } from 'react'
import { NewsItem } from 'pages'
import { useSelector } from 'react-redux'
import { frontStaticSelectors } from 'store/selectors'
import { useDispatch, useRequest } from 'hooks'
import { Link, useParams } from 'react-router-dom'
import { getURL } from 'utils'

const PagesItem = () => {
   const { pageId } = useParams()
   const { fetchFrontPage } = useDispatch()
   const page = useSelector(frontStaticSelectors.getPage)
   const { image, title, text, description } = page

   const fetchFrontPageRequest = useRequest({ request: fetchFrontPage })

   useEffect(() => {
      console.log(pageId)
      fetchFrontPageRequest.call({ pageId })
   }, [])

   console.log(page)

   return (
      <section className='blog-page'>
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
               <div className='blog-page__left'>{text}</div>
               <div className='blog-page__right'>
                  <div className='blog-page__share'>
                     <div className='blog-page__share-title'>Поделиться</div>
                     <div className='blog-page__share-items'>
                        <a href='' className='blog-page__share-item'>
                           <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <path
                                 d='M15.1743 5.32056H17V2.14082C16.685 2.09749 15.6018 2 14.3402 2C11.7079 2 9.90476 3.6557 9.90476 6.69878V9.49938H7V13.0541H9.90476V21.9983H13.4661V13.0549H16.2534L16.6959 9.50021H13.4653V7.05125C13.4661 6.02383 13.7428 5.32056 15.1743 5.32056Z'
                                 fill='#1877F2'
                              />
                           </svg>
                        </a>
                        <a href='' className='blog-page__share-item'>
                           <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <path
                                 d='M23 5.11613C22.1819 5.475 21.3101 5.71287 20.4012 5.82837C21.3362 5.27012 22.0499 4.39287 22.3854 3.3355C21.5136 3.85525 20.5511 4.22238 19.5254 4.42725C18.6976 3.54588 17.5179 3 16.2309 3C13.7339 3 11.7236 5.02675 11.7236 7.51138C11.7236 7.86888 11.7539 8.21262 11.8281 8.53987C8.0785 8.357 4.76062 6.55988 2.53175 3.82225C2.14262 4.49738 1.91437 5.27012 1.91437 6.102C1.91437 7.664 2.71875 9.04862 3.91775 9.85025C3.19312 9.8365 2.48225 9.62612 1.88 9.29475C1.88 9.3085 1.88 9.32638 1.88 9.34425C1.88 11.536 3.44337 13.3565 5.4935 13.7759C5.12637 13.8763 4.72625 13.9244 4.311 13.9244C4.02225 13.9244 3.73075 13.9079 3.45712 13.8474C4.0415 15.6335 5.69975 16.9466 7.6715 16.9893C6.137 18.1896 4.18862 18.9129 2.07937 18.9129C1.7095 18.9129 1.35475 18.8964 1 18.851C2.99787 20.1394 5.36562 20.875 7.919 20.875C16.2185 20.875 20.756 14 20.756 8.04075C20.756 7.84137 20.7491 7.64888 20.7395 7.45775C21.6346 6.8225 22.3867 6.02912 23 5.11613Z'
                                 fill='#1DA1F2'
                              />
                           </svg>
                        </a>
                        <a href='' className='blog-page__share-item'>
                           <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                              <path
                                 d='M23.7861 17.3664C23.7216 17.2584 23.3225 16.3913 21.4024 14.6092C19.3923 12.743 19.6623 13.0461 22.0835 9.81932C23.5581 7.85417 24.1476 6.65408 23.9631 6.14104C23.7876 5.65201 22.703 5.78102 22.703 5.78102L19.0967 5.80202C19.0967 5.80202 18.8297 5.76602 18.6302 5.88453C18.4367 6.00153 18.3122 6.27155 18.3122 6.27155C18.3122 6.27155 17.7406 7.79267 16.9786 9.08576C15.372 11.8145 14.7284 11.9585 14.4659 11.789C13.8553 11.3944 14.0084 10.2018 14.0084 9.35578C14.0084 6.71109 14.4089 5.6085 13.2268 5.32348C12.8338 5.22898 12.5458 5.16597 11.5422 5.15547C10.2551 5.14197 9.16451 5.15997 8.54796 5.46149C8.13693 5.66251 7.82041 6.11104 8.01392 6.13654C8.25244 6.16805 8.79248 6.28205 9.079 6.67208C9.44953 7.17462 9.43602 8.3057 9.43602 8.3057C9.43602 8.3057 9.64904 11.4184 8.93949 11.8055C8.45195 12.071 7.7844 11.5294 6.3518 9.05276C5.61825 7.78517 5.06321 6.38256 5.06321 6.38256C5.06321 6.38256 4.9567 6.12154 4.76618 5.98203C4.53517 5.81252 4.21114 5.75852 4.21114 5.75852L0.781892 5.77952C0.781892 5.77952 0.267354 5.79452 0.0783406 6.01804C-0.0896717 6.21755 0.0648396 6.62858 0.0648396 6.62858C0.0648396 6.62858 2.75004 12.9095 5.78926 16.0763C8.57796 18.979 11.7432 18.7885 11.7432 18.7885H13.1773C13.1773 18.7885 13.6108 18.7405 13.8313 18.502C14.0354 18.2829 14.0279 17.8719 14.0279 17.8719C14.0279 17.8719 13.9994 15.9473 14.8934 15.6637C15.774 15.3847 16.9051 17.5239 18.1037 18.3474C19.0097 18.97 19.6983 18.8335 19.6983 18.8335L22.904 18.7885C22.904 18.7885 24.5811 18.685 23.7861 17.3664Z'
                                 fill='#0077FF'
                              />
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default PagesItem

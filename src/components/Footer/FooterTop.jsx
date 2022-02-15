import { useDispatch } from 'hooks'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RouteNames } from 'routes'
import { frontStaticSelectors, systemSelectors } from 'store/selectors'
import { getURL } from 'utils'

const FooterTop = () => {
   const { logout } = useDispatch()
   const { themes } = useSelector(systemSelectors.getReferences)
   const pages = useSelector(frontStaticSelectors.getPages)

   const pagesItems = pages.map(({ id, name }) => ({ href: `${getURL.parseURL(RouteNames.PAGES_ITEM, { pageId: id })}`, name }))
   const themesItems = themes.map(({ id, name }) => ({ href: `${RouteNames.COURSES}/?themes=${id}`, name }))

   const items = [
      [
         {
            name: 'О портале',
            items: [
               { href: RouteNames.NEWS, name: 'Блог' },
               ...pagesItems,
               { href: RouteNames.REVIEWS, name: 'Отзывы' },
               { href: RouteNames.FAQ, name: 'Часто задаваемые вопросы' },
               { href: RouteNames.CONTACTS, name: 'Контакты' },
            ],
         },
      ],
      [
         {
            name: 'Направления обучения',
            items: [...themesItems],
         },
      ],
      [
         {
            name: 'Аккаунт',
            items: [
               { href: '/', name: 'Личный кабинет' },
               { href: '/', name: 'Рабочий кабинет' },
               { href: '/', name: 'Выйти' },
            ],
         },
         {
            name: 'Информация',
            items: [
               { href: '/', name: 'Условия пользования' },
               { href: '/', name: 'Правила конфиденциальности' },
            ],
         },
      ],
   ]

   return (
      <section className='footer-top'>
         <div className='container'>
            <div className='footer-top__inner'>
               {items.map((col, indexCol) => (
                  <div key={indexCol} className='footer__col'>
                     {col.map(({ name, items }, indexGroup) => (
                        <div key={indexGroup} className='footer__group'>
                           <div className='footer__title'>{name}</div>
                           {items.map(({ href, name }, indexLink) => (
                              <Link key={indexLink} to={href} className='footer__link'>
                                 {name}
                              </Link>
                           ))}
                        </div>
                     ))}
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default FooterTop

import { Link } from 'react-router-dom'
import React from 'react'
import { declOfNum, getDeclOfArray, getFullName, getURL } from 'utils'
import { useSelector } from 'react-redux'
import { authSelectors } from 'store/selectors'
import { ReactComponent as BookmarkSvg } from 'svg/bookmark.svg'

const CoursesItem3 = ({ id = 1, image, name, all_users, all_new_users, trainer = {}, status, ...rest }) => {
   const rolesId = useSelector(authSelectors.getRolesId)

   return (
      <Link to={getURL.cabinetCoursesItem({ courseId: id }, rolesId)} className='course-card3'>
         <div className='course-card3__img img img--cover'>
            <img src={getURL.img(image)} alt='' />
         </div>
         <div className='course-card3__content'>
            <div className='course-card3__title'>{name}</div>
            {/* {Object.keys(trainer).length !== 0 && (
               <div className='course-card3__user'>
                  <img src='/assets/img/avatar2.jpg' alt='' />
                  <span>{getFullName(trainer)}</span>
               </div>
            )} */}
            {status && (
               <div className='course-card3__status'>
                  <span>Новый</span>
                  <span>23 ч</span>
               </div>
            )}
            <div class='course-card3__bottom'></div>
            <div className='course-card3__bottom'>
               {Object.keys(trainer).length !== 0 ? (
                  <>
                     <div class='course-card3__students'>
                        <div className='course-card3__students-name'>
                           <span>{getFullName(trainer)}</span>
                        </div>
                     </div>
                     <div class='course-card3__bookmark'>
                        <BookmarkSvg />
                     </div>
                  </>
               ) : (
                  <>
                     <div className='course-card3__students'>
                        <div className='course-card3__students-title'>
                           {all_users} {declOfNum(all_users, getDeclOfArray['users'])}
                        </div>
                        <div className='course-card3__students-new'>{all_new_users} новых</div>
                     </div>
                     <div className='course-card3__num'>2</div>
                  </>
               )}
            </div>
         </div>
      </Link>
   )
}

export default CoursesItem3

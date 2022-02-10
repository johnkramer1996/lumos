import React from 'react'

const CabinetTrainers = () => {
   return (
      <div className='cabinet-student'>
         <div className='cabinet-page__group'>
            <div className='cabinet-page__top'>
               <h2 className='lkt-courses__title display-3'>Курсы</h2>
               <div className='cabinet-page__nav-title'>3 курса</div>
            </div>
            <div className='cabinet-page__items'>
               <div className='cabinet-page__item'>
                  <div className='course-card3'>
                     <div className='course-card3__img'>
                        <img src='/assets/img/course.jpg' alt='' />
                     </div>
                     <div className='course-card3__content'>
                        <div className='course-card3__title truncate'>Название курса в нескольких строках Название курса в нескольких строках</div>
                        <div className='course-card3__bottom'>
                           <div className='course-card3__students'>
                              <div className='course-card3__students-title'>5 из 12</div>
                              <div className='course-card3__students-date'>3 сен</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='cabinet-page__item'>
                  <div className='course-card3'>
                     <div className='course-card3__img'>
                        <img src='/assets/img/course2.jpg' alt='' />
                     </div>
                     <div className='course-card3__content'>
                        <div className='course-card3__title truncate'>Название курса в нескольких строках оооо</div>
                        <div className='course-card3__bottom'>
                           <div className='course-card3__students'>
                              <div className='course-card3__students-title'>1 из 24</div>
                              <div className='course-card3__students-date'>24 авг</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='cabinet-page__item'>
                  <div className='course-card3'>
                     <div className='course-card3__img'>
                        <img src='/assets/img/course2.jpg' alt='' />
                     </div>
                     <div className='course-card3__content'>
                        <div className='course-card3__title truncate'>Название курса в нескольких строках оооо</div>
                        <div className='course-card3__bottom'>
                           <div className='course-card3__students'>
                              <div className='course-card3__students-title course-card3__students-title--finish'>Завершен</div>
                              <div className='course-card3__students-date'>20 дек 2020</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='cabinet-page__group'>
            <div className='cabinet-page__top'>
               <h2 className='lkt-courses__title display-3'>Мероприятия</h2>
               <div className='cabinet-page__nav-title'>3 мероприятия</div>
            </div>
            <div className='cabinet-page__items'>
               <div className='cabinet-page__item'>
                  <div className='event-card2'>
                     <div className='event-card2__img'>
                        <img src='/assets/img/event1.jpg' alt='' />
                     </div>
                     <div className='event-card2__content'>
                        <div className='event-card2__time'>
                           <span className='event-card2__time-day'>14 сен</span>
                           <span className='event-card2__time-hour'>в 20:00</span>
                        </div>
                        <a href='' className='event-card2__title'>
                           Название курса в нескольких строках Название курса в нескольких строках
                        </a>
                     </div>
                  </div>
               </div>
               <div className='cabinet-page__item'>
                  <div className='event-card2'>
                     <div className='event-card2__img'>
                        <img src='/assets/img/event2.jpg' alt='' />
                     </div>
                     <div className='event-card2__content'>
                        <div className='event-card2__time'>
                           <span className='event-card2__time-day'>14 сен</span>
                           <span className='event-card2__time-hour'>в 20:00</span>
                        </div>
                        <a href='' className='event-card2__title'>
                           Название курса в нескольких строках Название курса в нескольких строках
                        </a>
                     </div>
                  </div>
               </div>
               <div className='cabinet-page__item'>
                  <div className='event-card2'>
                     <div className='event-card2__img'>
                        <img src='/assets/img/event3.jpg' alt='' />
                     </div>
                     <div className='event-card2__content'>
                        <div className='event-card2__time'>
                           <span className='event-card2__time-day'>14 сен</span>
                           <span className='event-card2__time-hour'>в 20:00</span>
                        </div>
                        <a href='' className='event-card2__title'>
                           Название курса в нескольких строках Название курса в нескольких строках
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CabinetTrainers

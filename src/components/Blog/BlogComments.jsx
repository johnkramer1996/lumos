import React from 'react'

const BlogComments = () => {
   return (
      <div className='blog-comments'>
         <h2 className='blog-comments__title'>10 комментариев</h2>
         <div className='blog-comments__inner'>
            <div className='blog-comments__top'>
               <div className='blog-comments__avatar'>
                  <img src='/assets/img/avatar2.jpg' alt='' />
               </div>
               <textarea placeholder='Написать комментарий или задать вопрос...'></textarea>
            </div>
            <div className='blog-comments__group'>
               <div className='blog-comments__main'>
                  <div className='blog-comments__item'>
                     <div className='blog-comments__avatar'>
                        <img src='/assets/img/avatar3.jpg' alt='' />
                     </div>
                     <div className='blog-comments__item-content'>
                        <div className='blog-comments__item-top'>
                           <div className='blog-comments__item-name'>Мария Мариева</div>
                        </div>
                        <div className='blog-comments__item-text'>
                           Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis?
                        </div>
                        <div className='blog-comments__item-bottom'>
                           <div className='blog-comments__item-date'>10 сен 2020</div>
                           <button className='blog-comments__item-btn'>Ответить</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='blog-comments__sub'>
                  <div className='blog-comments__item'>
                     <div className='blog-comments__avatar'>
                        <img src='/assets/img/avatar4.jpg' alt='' />
                     </div>
                     <div className='blog-comments__item-content'>
                        <div className='blog-comments__item-top'>
                           <div className='blog-comments__item-name'>Мария Мариева</div>
                           <div className='blog-comments__item-badge'>Автор</div>
                        </div>
                        <div className='blog-comments__item-text'>
                           Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis?
                        </div>
                        <div className='blog-comments__item-bottom'>
                           <div className='blog-comments__item-date'>10 сен 2020</div>
                           <button className='blog-comments__item-btn'>Ответить</button>
                        </div>
                     </div>
                  </div>
                  <div className='blog-comments__item'>
                     <div className='blog-comments__avatar'>
                        <img src='/assets/img/avatar5.jpg' alt='' />
                     </div>
                     <div className='blog-comments__item-content'>
                        <div className='blog-comments__item-top'>
                           <div className='blog-comments__item-name'>Мария Мариева</div>
                        </div>
                        <div className='blog-comments__item-text'>
                           Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis?
                        </div>
                        <div className='blog-comments__item-bottom'>
                           <div className='blog-comments__item-date'>10 сен 2020</div>
                           <button className='blog-comments__item-btn'>Ответить</button>
                        </div>
                     </div>
                  </div>
                  <div className='blog-comments__item'>
                     <div className='blog-comments__avatar'>
                        <img src='/assets/img/avatar4.jpg' alt='' />
                     </div>
                     <div className='blog-comments__item-content'>
                        <div className='blog-comments__item-top'>
                           <div className='blog-comments__item-name'>Мария Мариева</div>
                           <div className='blog-comments__item-badge'>Автор</div>
                        </div>
                        <div className='blog-comments__item-text'>
                           Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis?
                        </div>
                        <div className='blog-comments__item-bottom'>
                           <div className='blog-comments__item-date'>10 сен 2020</div>
                           <button className='blog-comments__item-btn'>Ответить</button>
                        </div>
                     </div>
                  </div>
                  <button className='blog-comments__more'>
                     <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M12.6666 5.66602L7.99992 10.3327L3.33325 5.66602' stroke='#7481E0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
                     </svg>
                     <span>Показать еще 4 комментария</span>
                  </button>
               </div>
            </div>
            <div className='blog-comments__group'>
               <div className='blog-comments__main'>
                  <div className='blog-comments__item'>
                     <div className='blog-comments__avatar'>
                        <img src='/assets/img/avatar3.jpg' alt='' />
                     </div>
                     <div className='blog-comments__item-content'>
                        <div className='blog-comments__item-top'>
                           <div className='blog-comments__item-name'>Мария Мариева</div>
                        </div>
                        <div className='blog-comments__item-text'>
                           Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis?
                        </div>
                        <div className='blog-comments__item-bottom'>
                           <div className='blog-comments__item-date'>10 сен 2020</div>
                           <button className='blog-comments__item-btn'>Ответить</button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='blog-comments__sub'>
                  <div className='blog-comments__item'>
                     <div className='blog-comments__avatar'>
                        <img src='/assets/img/avatar4.jpg' alt='' />
                     </div>
                     <div className='blog-comments__item-content'>
                        <div className='blog-comments__item-top'>
                           <div className='blog-comments__item-name'>Мария Мариева</div>
                           <div className='blog-comments__item-badge'>Автор</div>
                        </div>
                        <div className='blog-comments__item-text'>
                           Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis?
                        </div>
                        <div className='blog-comments__item-bottom'>
                           <div className='blog-comments__item-date'>10 сен 2020</div>
                           <button className='blog-comments__item-btn'>Ответить</button>
                        </div>
                     </div>
                  </div>
                  <div className='blog-comments__item'>
                     <div className='blog-comments__avatar'>
                        <img src='/assets/img/avatar5.jpg' alt='' />
                     </div>
                     <div className='blog-comments__item-content'>
                        <div className='blog-comments__item-top'>
                           <div className='blog-comments__item-name'>Мария Мариева</div>
                        </div>
                        <div className='blog-comments__item-text'>
                           Accumsan tortor augue velit est amet lobortis. Sit pretium, urna, lobortis eget vitae sit aliquet id. Enim vitae aenean est, pharetra quis volutpat etiam lorem turpis?
                        </div>
                        <div className='blog-comments__item-bottom'>
                           <div className='blog-comments__item-date'>10 сен 2020</div>
                           <button className='blog-comments__item-btn'>Ответить</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogComments

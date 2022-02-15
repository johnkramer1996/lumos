import React from 'react'

const Cabinet = ({ sidebar, page }) => {
   return (
      <section className='cabinet-page'>
         <div className='container'>
            <div className='cabinet-page__inner'>
               <aside className='cabinet-page__sidebar cabinet-student__sidebar'>{sidebar}</aside>
               <main className='cabinet-page__main dashboard'>{page}</main>
            </div>
         </div>
      </section>
   )
}

export default Cabinet

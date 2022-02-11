import ModalLogin from 'components/Modal/ModalLogin'
import React, { useCallback } from 'react'

const Logout = () => {
   return (
      <section className='categories-page'>
         <div className='container'>
            <div className='modal-wrapper'>
               <div className='modal'>
                  <div className='modal-dialog'>
                     <ModalLogin />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Logout

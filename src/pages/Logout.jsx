import React from 'react'
import ModalLogin from 'components/Modal/ModalLogin'

const Logout = () => {
   return (
      <section className='categories-page'>
         <div className='container'>
            <div className='modal-wrapper'>
               <div className='modal'>
                  <div className='modal-dialog'>
                     <div className='modal__content'>
                        <ModalLogin isModal={false} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Logout

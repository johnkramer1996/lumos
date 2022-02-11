import ModalLogin from 'components/Modal/ModalLogin'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Logout = () => {
   return (
      <section className='categories-page'>
         <div className='container'>
            <ModalLogin />
         </div>
      </section>
   )
}

export default Logout

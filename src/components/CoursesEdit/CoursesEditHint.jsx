import { Button } from 'components/ui'
import React from 'react'

const CoursesEditHint = ({ onSubmit, onReset, isResetBtn, textBtn = 'Сохранить' }) => {
   return (
      <div className='course-edit__hint'>
         <Button className={`course-edit__hint-btn`} onClick={onSubmit}>
            {textBtn}
         </Button>
         {isResetBtn && (
            <Button className='course-edit__hint-cancel' onClick={onReset} outline>
               Отменить
            </Button>
         )}
         <div className='course-edit__hint-desc'>Ваши изменения будут отправлены на модерацию.</div>
      </div>
   )
}

export default CoursesEditHint
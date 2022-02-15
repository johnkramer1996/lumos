import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useDispatch, useInputFile, useRequest } from 'hooks'
import { getURL } from 'utils'
import CabinetSettingsDocsItem from './CabinetSettingsDocsItem'
import { authSelectors, systemSelectors } from 'store/selectors'

const CabinetSettingsDocs = ({ onChange, onDelete }) => {
   const user = useSelector(authSelectors.getUser)
   const { user_file_types } = useSelector(systemSelectors.getUserSettings)

   const file_passport_1 = useInputFile()
   const file_passport_2 = useInputFile()
   const file_diplom = useInputFile()
   const file_treaty = useInputFile()

   useEffect(() => {
      user.docs?.file_passport_1 && file_passport_1.setValue(getURL.img(user.docs.file_passport_1))
      user.docs?.file_passport_2 && file_passport_2.setValue(getURL.img(user.docs.file_passport_2))
      user.docs?.file_diplom && file_diplom.setValue(getURL.img(user.docs.file_diplom))
      user.docs?.file_treaty && file_treaty.setValue(getURL.img(user.docs.file_treaty))
   }, [user])

   const docs = [
      { name: 'file_treaty', input: file_treaty },
      { name: 'file_passport_1', input: file_passport_1 },
      { name: 'file_passport_2', input: file_passport_2 },
      { name: 'file_diplom', input: file_diplom },
   ].map((item, index) => ({ ...item, label: user_file_types[index]?.name }))

   return (
      <div className='account-settings__group card-bg'>
         <h3 className='account-settings__subtitle display-4'>Документы</h3>
         <div className='account-settings__desc'>Фото должны быть четкими, а текст на документах хорошо считываться</div>
         {docs.map((props, index) => (
            <CabinetSettingsDocsItem key={index} {...props} onChange={onChange} onDelete={onDelete} />
         ))}
      </div>
   )
}

CabinetSettingsDocs.propTypes = {
   onChange: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired,
}

export default CabinetSettingsDocs

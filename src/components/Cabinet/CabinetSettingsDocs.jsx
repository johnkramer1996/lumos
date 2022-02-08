import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useInputFile } from 'hooks'
import { getImgUrl } from 'utils'
import CabinetSettingsDocsItem from './CabinetSettingsDocsItem'

const CabinetSettingsDocs = ({ onChange, onDelete }) => {
    const user = useSelector(({ auth }) => auth.user)
    const file_passport_1 = useInputFile()
    const file_passport_2 = useInputFile()
    const file_diplom = useInputFile()
    const file_treaty = useInputFile()

    useEffect(() => {
        user.docs?.file_passport_1 && file_passport_1.setValue(getImgUrl(user.docs.file_passport_1))
        user.docs?.file_passport_2 && file_passport_2.setValue(getImgUrl(user.docs.file_passport_2))
        user.docs?.file_diplom && file_diplom.setValue(getImgUrl(user.docs.file_diplom))
        user.docs?.file_treaty && file_treaty.setValue(getImgUrl(user.docs.file_treaty))
    }, [user])

    const docs = [
        { name: 'file_passport_1', input: file_passport_1, label: 'Файл паспорта 1' },
        { name: 'file_passport_2', input: file_passport_2, label: 'Файл паспорта 2' },
        { name: 'file_diplom', input: file_diplom, label: 'Файл диплома' },
        { name: 'file_treaty', input: file_treaty, label: 'Файл договора' },
    ]

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

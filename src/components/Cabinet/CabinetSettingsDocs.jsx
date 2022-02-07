import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useInputFile } from 'hooks'
import { getImgUrl } from 'utils'
import CabinetSettingsDocsItem from './CabinetSettingsDocsItem'

const CabinetSettingsDocs = ({ onChange, onDelete }) => {
    const user = useSelector(({ auth }) => auth.user)
    const passportFirst = useInputFile()
    const passportSecond = useInputFile()
    const diplom = useInputFile()
    const treaty = useInputFile()

    useEffect(() => {
        user.docs?.file_passport_1 && passportFirst.setValue(getImgUrl(user.docs.file_passport_1))
        user.docs?.file_passport_2 && passportSecond.setValue(getImgUrl(user.docs.file_passport_2))
        user.docs?.file_diplom && diplom.setValue(getImgUrl(user.docs.file_diplom))
        user.docs?.file_treaty && treaty.setValue(getImgUrl(user.docs.file_treaty))
    }, [user])

    const docs = [
        { input: passportFirst, label: 'Файл паспорта 1' },
        { input: passportSecond, label: 'Файл паспорта 2' },
        { input: diplom, label: 'Файл диплома' },
        { input: treaty, label: 'Файл договора' },
    ]

    return (
        <div className='account-settings__group card-bg'>
            <h3 className='account-settings__subtitle display-4'>Документы</h3>
            <div className='account-settings__desc'>Фото должны быть четкими, а текст на документах хорошо считываться</div>
            {docs.map(({ input, label }, index) => (
                <CabinetSettingsDocsItem key={index} input={input} label={label} onChange={onChange} onDelete={onDelete} />
            ))}
        </div>
    )
}

CabinetSettingsDocs.propTypes = {
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default CabinetSettingsDocs

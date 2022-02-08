import React from 'react'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'
import { ReactComponent as DocumentSvg } from 'svg/document.svg'

const AddCourseLessonEditFiles = () => {
    return (
        <div className='lesson-edit__files card-bg'>
            <div className='lesson-edit__files-top'>
                <h3 className='lesson-edit__files-title display-4'>Файлы</h3>
                <div className='lesson-edit__files-num'>4 урока</div>
            </div>
            <div className='lesson-edit__files-items'>
                <div className='lesson-edit__files-item'>
                    <i className='lesson-edit__files-item-icon'>
                        <DocumentSvg />
                    </i>
                    <div className='lesson-edit__files-item-info'>
                        <div className='lesson-edit__files-item-name'>file_name.pdf</div>
                        <div className='lesson-edit__files-item-weight'>1.2 Мб</div>
                    </div>
                    <button className='lesson-edit__files-item-delete'>
                        <DeleteSvg />
                    </button>
                </div>
            </div>
            <div className='lesson-edit__files-upload'>
                <div className='lesson-edit__files-upload-title'>
                    <strong>Загрузите файл</strong>
                    <span>или перетащите его сюда</span>
                </div>
                <div className='lesson-edit__files-upload-hint'>до 10 MБ</div>
                <input type='file' className='lesson-edit__files-upload-input' />
            </div>
        </div>
    )
}

export default AddCourseLessonEditFiles

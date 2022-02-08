import { useDispatch, useInputFile, useRequest } from 'hooks'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { coursesSelectors } from 'store/selectors'
import AddCourseLessonEditFilesItem from './AddCourseLessonEditFilesItem'

const AddCourseLessonEditFiles = () => {
    const { courseId, lessonId } = useParams()
    const { uploadFile, deleteFile, setLessonFiles, setIsShow, setContent } = useDispatch()
    const files = useSelector(coursesSelectors.getLessonFiles) || []
    const inputFile = useInputFile()

    const uploadFileRequest = useRequest({
        request: uploadFile,
    })
    const deleteFileRequest = useRequest({
        request: deleteFile,
        success: ({ response, data }) => {
            setIsShow(true)
            setContent({ title: 'Файл удален', descr: '' })
        },
    })

    const onChange = (e) => {
        inputFile.onChange()
        const body = new FormData()
        body.append('file', e.target.files[0])
        uploadFileRequest.call({ courseId, lessonId, body })
    }
    const onDelete = (id, index) => {
        setLessonFiles(files.filter((_, i) => i !== index))
        id && deleteFileRequest.call({ courseId, lessonId, body: { id } })
    }

    return (
        <div className='lesson-edit__files card-bg'>
            <div className='lesson-edit__files-top'>
                <h3 className='lesson-edit__files-title display-4'>Файлы</h3>
                <div className='lesson-edit__files-num'>4 урока</div>
            </div>
            <div className='lesson-edit__files-items'>
                {files.map((props, index) => (
                    <AddCourseLessonEditFilesItem key={props.id || props.hidden_id || index} {...props} index={index} onDelete={onDelete} />
                ))}
            </div>
            <div className='lesson-edit__files-upload'>
                <div className='lesson-edit__files-upload-title'>
                    <strong>Загрузите файл</strong>
                    <span>или перетащите его сюда</span>
                </div>
                <div className='lesson-edit__files-upload-hint'>до 10 MБ</div>
                <input ref={inputFile.ref} className='lesson-edit__files-upload-input' type='file' onChange={onChange.bind(null)} />
            </div>
        </div>
    )
}

export default AddCourseLessonEditFiles

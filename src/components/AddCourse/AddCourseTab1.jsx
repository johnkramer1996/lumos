import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'components/ui'
import { getImgUrl } from 'utils'
import { useSelector } from 'react-redux'
import { useDispatch } from 'hooks'

const AddCourseTab1 = React.forwardRef((_, ref) => {
    const { setContent, setIsShow } = useDispatch()
    const course = useSelector(({ courses }) => courses.course)
    const { themes = [], type_study: typeStudy = [], format = [] } = useSelector(({ system }) => system.references)
    const [name, setName] = useState(course.name || 'Название курса')
    const [category_id, setCategoryId] = useState(course.category_id || 1)
    const [type_study, setTypeStudy] = useState(course.type_study || 1)
    const [format_study, setFormatStudy] = useState(course.format_study || 1)
    const [sale_subscribe, setSubscribe] = useState(course.sale_subscribe || true)
    const [width, setWidth] = useState(course.width || 'Длительность')
    const [dataImg, setDataImg] = useState(getImgUrl(course.image, false) || '')
    const inputImageRef = useRef()
    const imgRef = useRef()

    useEffect(() => {
        course.name && setName(course.name)
        course.category_id && setCategoryId(course.category_id)
        course.type_study && setTypeStudy(course.type_study)
        course.course && setFormatStudy(course.course)
        course.sale_subscribe && setSubscribe(course.sale_subscribe)
        course.width && setWidth(course.width)
        course.image && setDataImg(getImgUrl(course.image, false))
    }, [course])

    ref.current = () => {
        const body = new FormData()
        body.append('name', name)
        body.append('category_id', category_id)
        body.append('type_study', type_study)
        body.append('format_study', format_study)
        body.append('sale_subscribe', '1')
        body.append('width', width)
        body.append('image', inputImageRef.current?.files[0])

        const errors = []
        for (const [key, value] of body.entries()) if (value === '' || value === 'undefined' || value === '0') errors.push(key)
        const isError = errors.length
        if (isError) {
            setIsShow(true)
            setContent({ title: 'Обязательные поля - ' + errors.join(', ') })
        }

        return {
            isError,
            body,
        }
    }

    const uploadImg = (e) => {
        const file = e.target.files[0]
        if (!file) return

        const size = file.size || 0

        if (size > 5 * 1024 * 1024) {
            inputImageRef.current.value = ''
            alert('*Слишком большой файл')

            return
        }

        const reader = new FileReader()
        reader.onload = (e) => setDataImg(e.target.result)
        reader.readAsDataURL(file)
    }

    const deleteImg = (e) => {
        inputImageRef.current.value = ''
        setDataImg('')
    }

    return (
        <div className='course-edit__form'>
            <h3 className='course-edit__form-title'>Основная информация</h3>
            <div className='course-edit__form-grid'>
                <div className='course-edit__form-group form-group'>
                    <label>Название</label>
                    <input type='text' placeholder='Название' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='course-edit__form-group form-group'>
                    <label>Категория</label>
                    <select value={category_id} onChange={(e) => setCategoryId(e.target.value)}>
                        <option defaultValue hidden>
                            Категория
                        </option>
                        {themes.map(({ id, name }) => (
                            <option key={id} value={id}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='course-edit__form-group form-group'>
                    <label>Тип обучения</label>
                    <select value={type_study} onChange={(e) => setTypeStudy(e.target.value)}>
                        <option defaultValue hidden>
                            Тип обучения
                        </option>
                        {typeStudy.map(({ id, name }) => (
                            <option key={id} value={id}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='course-edit__form-group form-group'>
                    <label>Формат</label>
                    <select value={format_study} onChange={(e) => setFormatStudy(e.target.value)}>
                        <option defaultValue hidden>
                            Формат
                        </option>
                        {format.map(({ id, name }) => (
                            <option key={id} value={id}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='course-edit__form-group form-group'>
                    <label>Старт курса</label>
                    <select>
                        <option defaultValue hidden>
                            Старт курса
                        </option>
                        <option value=''>В любое время</option>
                        <option value=''>В любое время 2</option>
                    </select>
                </div>
                <div className='course-edit__form-group form-group'>
                    <label>Длительность</label>
                    <input type='text' placeholder='Длительность' value={width} onChange={(e) => setWidth(e.target.value)} />
                </div>
                <div className='course-edit__form-checkbox checkbox'>
                    <input type='checkbox' className='checkbox' id='c' checked={sale_subscribe} onChange={(e) => setSubscribe(e.target.checked)} />
                    <label htmlFor='c'>Разрешить продавать по подписке</label>
                </div>
            </div>
            <div className='course-edit__form-upload'>
                <div className='course-edit__form-upload-title'>Изображение</div>
                <div className='course-edit__form-upload-desc'>
                    Соотношение сторон: 16:9 (рекомендуемое разрешение: 1280x720) <br /> PNG, JPG до 5 MБ
                </div>
                <div className='course-edit__form-upload-wrap'>
                    <div className='course-edit__form-upload-img'>{dataImg && <img ref={imgRef} src={dataImg} alt='' />}</div>
                    <div className='course-edit__form-upload-buttons'>
                        <Button className='course-edit__form-upload-btn'>
                            <input ref={inputImageRef} type='file' name='image' accept='image/png, image/gif, image/jpeg' onChange={uploadImg} />
                            Загрузить {dataImg ? 'новое' : 'изображение'}
                        </Button>
                        <Button className='course-edit__form-upload-delete' onClick={deleteImg} outline>
                            Удалить
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default AddCourseTab1

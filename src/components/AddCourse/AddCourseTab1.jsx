import React, { useRef, useState } from 'react'
import { useSelector } from 'hooks'
import { Button } from 'components/ui'

const AddCourseTab1 = React.forwardRef((_, ref) => {
    const { themes, typeStudy, format } = useSelector()
    const [name, setName] = useState('')
    const [category_id, setCategoryId] = useState(0)
    const [type_study, setStudy] = useState(0)
    const [format_study, setFormatStudy] = useState(0)
    const [sale_subscribe, setSubscribe] = useState(true)
    const [width, setWidth] = useState('')
    const [dataImg, setDataImg] = useState('')
    const image = useRef()

    ref.current = () => {
        const body = new FormData()
        body.append('name', name)
        body.append('category_id', category_id)
        body.append('type_study', type_study)
        body.append('format_study', format_study)
        body.append('sale_subscribe', '1')
        body.append('width', width)
        body.append('image', image.current?.files[0])
        return body
    }

    const uploadImg = (e) => {
        const files = e.target.files
        const file = files[0]
        if (!file) return

        const size = file.size || 0

        if (size > 5 * 1024 * 1024) {
            image.current.value = ''
            alert('*Слишком большой файл')

            return
        }

        const reader = new FileReader()
        reader.onload = (e) => setDataImg(e.target.result)
        reader.readAsDataURL(files[0])
    }

    const deleteImg = (e) => {
        image.current.value = ''
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
                    <select value={type_study} onChange={(e) => setStudy(e.target.value)}>
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
                    <div className='course-edit__form-upload-img'>{dataImg && <img src={dataImg} alt='' />}</div>
                    <div className='course-edit__form-upload-buttons'>
                        <Button className='course-edit__form-upload-btn'>
                            <input ref={image} type='file' name='image' accept='image/png, image/gif, image/jpeg' onChange={uploadImg} />
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
import { SITE_URL } from 'api/URLS'

export const declOfNum = (number, words = []) => {
    return words[number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]]
}

export const getDeclOfArray = {
    courses: ['курс', 'курса', 'курсов'],
    events: ['мероприятие', 'мероприятия', 'мероприятий'],
    lessons: ['урок', 'урока', 'уроков'],
    users: ['ученик', 'ученика', 'учеников'],
}

export const getImgUrl = (src, isDefault = false, defaultSrc = '/assets/img/course2.jpg') => {
    return src ? `${SITE_URL}/${src}` : isDefault ? defaultSrc : ''
}

export const eventBus = {
    on(event, callback) {
        document.addEventListener(event, (e) => callback(e.detail))
    },
    dispatch(event, data) {
        document.dispatchEvent(new CustomEvent(event, { detail: data }))
    },
    remove(event, callback) {
        document.removeEventListener(event, callback)
    },
}

const timeout = (time) => {
    return new Promise((res) => setTimeout(() => res(true), time))
}

export const getData = (response) => {
    let data = response.data
    while (data.data !== undefined) {
        data = data.data
        if (Object.getOwnPropertyNames(data).length > 1) break
    }
    return data
}

// before/request/success/error/after - action-creators
// dispatchEvent - useRequest

export const asyncAction =
    ({ data, dispatchEvent, request, success = () => {}, error = () => {} } = {}) =>
    async (dispatch) => {
        try {
            // await timeout(100)
            dispatchEvent('before', { dispatch })
            const response = await request(data)
            const successArgs = { response, data: getData(response) }
            if (response.status === 200) success({ dispatch, ...successArgs })
            if (response.status === 200) dispatchEvent('success', successArgs)
        } catch (e) {
            console.log(e, e.response || e.message || 'Unknown error')
            error({ dispatch, error: e.response || e.message || 'Unknown error' })
            dispatchEvent('error', { dispatch, error: e.response || e.message || 'Unknown error' })
        } finally {
            dispatchEvent('finnally', { dispatch })
        }
    }

export const createhandle = (Service, method) => ({
    request: async (data) => await Service[method](data),
    success: (response) => response,
    error: (error) => error,
})

export const crateHandles = (Service) => {
    return Object.getOwnPropertyNames(Service).reduce((prev, val) => ((prev[val] = { ...createhandle(Service, val) }), prev), {})
}

export const crateActionCreator = (Service) => {
    return Object.getOwnPropertyNames(Service).reduce((prev, val) => ((prev[val] = asyncAction), prev), {})
}

export const getDate = (date, monthNames = false) => {
    date = new Date(date)
    const namesMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Ноября', 'Декабря']
    const year = date.getFullYear()
    const month = monthNames ? namesMonth[date.getMonth()] : addZerro(date.getMonth() + 1)
    const day = addZerro(date.getDate())
    return `${year}-${month}-${day}`
}

export const uploadImg = (inputRef, setImg) => {
    const file = inputRef.current.files[0]
    if (!file) return
    const size = file.size || 0
    if (size > 5 * 1024 * 1024) {
        inputRef.current.value = ''
        return alert('*Слишком большой файл')
    }
    const reader = new FileReader()
    reader.onload = (e) => setImg(e.target.result)
    reader.readAsDataURL(file)
}

export const deleteImg = (inputFileRef, setImg) => {
    inputFileRef.current.value = ''
    setImg('')
}

export const addZerro = (number) => (number <= 9 ? '0' : '') + number

export const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2)

export const isActiveClass = (condition, className) => (condition ? ` ${className}` : '')

export const toBoolean = (value) => (value === '0' ? false : !!value)

export const isCheckbox = (input) => input.type === 'radio' || input.type === 'checkbox'

export const maskDate = (e) => {
    if (e.keyCode < 47 || e.keyCode > 57) e.preventDefault()
    const len = e.target.value.length
    if (len !== 1 || len !== 3) if (e.keyCode === 47) e.preventDefault()
    if (len === 4) e.target.value += '-'
    if (len === 7) e.target.value += '-'
    if (len > 9) e.preventDefault()
}

export const validateName = (value) => /^[a-zа-яёїієґ ,.'-]+$/i.test(value)

export const validatePhone = (value) => !value.includes('_')

export const validateEmail = (value) => /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)

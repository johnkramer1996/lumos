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

export const asyncAction =
    ({
        data,
        before = () => {},
        request = () => {},
        success = () => {},
        error = () => {},
        after = () => {},
        getData = () => {},
        beforeTwo = () => {},
        successTwo = () => {},
        errorTwo = () => {},
        afterTwo = () => {},
    } = {}) =>
    async (dispatch) => {
        try {
            before({ dispatch })
            beforeTwo({ dispatch })
            // await timeout(100)
            const response = await request(data)
            const successArgs = { dispatch, response, data: getData(response) }
            if (response.status === 200) success(successArgs)
            if (response.status === 200) successTwo(successArgs)
        } catch (e) {
            console.log(e, e.response || e.message || 'Unknown error')
            error({ dispatch, error: e.response || e.message || 'Unknown error' })
            errorTwo({ dispatch, error: e.response || e.message || 'Unknown error' })
        } finally {
            after({ dispatch })
            afterTwo({ dispatch })
        }
    }

const getData = (response) => {
    let data = response.data
    while (data.data !== undefined) {
        data = data.data
        if (Object.getOwnPropertyNames(data).length > 1) break
    }
    return data
}

export const createhandle = (Service, method) => ({
    before: () => {},
    request: async (data) => await Service[method](data),
    success: (response) => response,
    error: (error) => error,
    getData,
    after: () => {},
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

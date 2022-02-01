import { SITE_URL } from 'api/URLS'

export const declOfNum = (number, words = []) => {
    return words[number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]]
}

export const getDeclOfArray = {
    courses: ['курс', 'курса', 'курсов'],
    events: ['мероприятие', 'мероприятия', 'мероприятий'],
    lessons: ['урок', 'урока', 'уроков'],
}

export const getImgUrl = (src, defaultSrc = '/assets/img/course2.jpg') => (src ? `${SITE_URL}/${src}` : defaultSrc)

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
            await timeout(100)
            const response = await request(data)
            const successArgs = { dispatch, response, data: getData(response) }
            if (response.status === 200) success(successArgs)
            if (response.status === 200) successTwo(successArgs)
        } catch (e) {
            console.log(e.response || e.message || 'Unknown error')
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

export const getDate = (date) => {
    const namesMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Ноября', 'Декабря']
    const dateObj = new Date(date)
    const day = dateObj.getUTCDate()
    const month = dateObj.getUTCMonth() //months from 1-12
    const year = dateObj.getUTCFullYear()
    return `${day} ${namesMonth[month]} ${year}`
}

export const uploadImg = (inputFile, setDataImg) => {
    const file = inputFile.files[0]
    if (!file) return

    const size = file.size || 0

    if (size > 5 * 1024 * 1024) {
        inputFile.current.value = ''
        alert('*Слишком большой файл')

        return
    }

    const reader = new FileReader()
    reader.onload = (e) => setDataImg(e.target.result)
    reader.readAsDataURL(file)
}

export const deleteImg = (inputFile, setDataImg) => {
    inputFile.current.value = ''
    setDataImg('')
}

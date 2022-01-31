import { SITE_URL } from 'api/URLS'

export const declOfNum = (number, words = []) => {
    return words[number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]]
}

export const getDeclOfArray = {
    course: ['курс', 'курса', 'курсов'],
    event: ['мероприятие', 'мероприятия', 'мероприятий'],
    lesson: ['урок', 'крока', 'уроков'],
}

export const getImgUrl = (src, defaultSrc = '/assets/img/avatar2.jpg') => (src ? `${SITE_URL}/${src}` : defaultSrc)

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

const timeout = () => {
    return new Promise((res) => setTimeout(() => res(true), 0))
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
        before2 = () => {},
        success2 = () => {},
        error2 = () => {},
        after2 = () => {},
    } = {}) =>
    async (dispatch) => {
        try {
            before({ dispatch })
            before2({ dispatch })
            await timeout()
            const response = await request(data)
            if (response.status === 200) success({ response, data: getData(response), dispatch })
            if (response.status === 200) success2({ response, data: getData(response), dispatch })
        } catch (e) {
            console.log(e)
            error({ dispatch, error: e.response || e.message || 'Unknown error' })
            error2({ dispatch, error: e.response || e.message || 'Unknown error' })
        } finally {
            after({ dispatch })
            after2({ dispatch })
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

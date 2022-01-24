import axios from 'axios'

export const API_URL = `https://lumus.wistis.ru/api/v1`
export const authURL = {
    AUTHORIZATION_URL: '/cabinet/user',
    CHECK_EMAIL_URL: '/auth/check-email',
    LOGIN_URL: '/auth/login',
    REGISTER_URL: '/auth/register',
}
export const lessonsURL = {
    FETCH_LESSONS: '/cabinet/courses',
    ADD_LESSON: '/cabinet/courses',
}

const $api = axios.create({ baseURL: API_URL })

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        if (error.response.status === 401 && error.config && !error.config.headers._IsRetry) {
            error.config.headers._IsRetry = true
            try {
                const response = await $api.get(`${authURL.AUTHORIZATION_URL}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        _IsRetry: true,
                    },
                })
                localStorage.setItem('token', response.data.token)
                return $api.request(error.config)
            } catch (e) {
                console.log('ERROR')
            }
        }
        throw error
    },
)

export default $api

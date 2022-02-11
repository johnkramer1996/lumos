import { SITE_URL } from 'api/URLS'
import { ROLES } from 'constants'
import { RouteNames } from 'routes'

export const declOfNum = (number, words = []) => {
   return words[number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]]
}

export const getDeclOfArray = {
   courses: ['курс', 'курса', 'курсов'],
   events: ['мероприятие', 'мероприятия', 'мероприятий'],
   lessons: ['урок', 'урока', 'уроков'],
   users: ['ученик', 'ученика', 'учеников'],
   members: ['учасник', 'учасника', 'учасников'],
   questions: ['вопрос', 'вопроса', 'вопросов'],
   files: ['файл', 'файла', 'файлов'],
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

export const getData = (response, prev = false) => {
   let data = response.data
   while (data.data !== undefined) {
      // TODO CHECK IT
      if (prev && !data.data?.data) return data
      data = data.data
   }
   return data
}

// TODO
// request/success/error - action-creators
// dispatchEvent - useRequest

export const asyncAction =
   ({ data, callbackHandler, request, success = () => {}, error = () => {} } = {}) =>
   async (dispatch) => {
      try {
         // await timeout(100)
         callbackHandler('before', { dispatch })
         const response = await request(data)
         const successArgs = { response, prevData: getData(response, true), data: getData(response) }
         if (response.status === 200) success({ dispatch, ...successArgs })
         if (response.status === 200) callbackHandler('success', successArgs)
      } catch (e) {
         console.dir(request, 'error request')
         console.log(e, e.response || e.message || 'Unknown error')
         error({ dispatch, error: e.response || e.message || 'Unknown error' })
         callbackHandler('error', { dispatch, error: e.response || e.message || 'Unknown error' })
      } finally {
         callbackHandler('finnally', { dispatch })
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

export const namesMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

export const getDate = (date, monthNames = false) => {
   date = new Date(date)
   const year = date.getFullYear()
   const month = monthNames ? namesMonth[date.getMonth()] : addZerro(date.getMonth() + 1)
   const day = addZerro(date.getDate())
   return monthNames ? `${day} ${month} ${year}` : `${year}-${month}-${day}`
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

export const formatBytes = (bytes, decimals = 2) => {
   if (bytes === 0) return '0 Bytes'

   const k = 1024
   const dm = decimals < 0 ? 0 : decimals
   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

   const i = Math.floor(Math.log(bytes) / Math.log(k))

   return (parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) || 'Нет данных') + ' ' + (sizes[i] || '')
}

export const hasAccess = (rolesId, availables = []) => !![...availables, ROLES.ADMIN].find((i) => rolesId.find((id) => i === id))

export const getRequest = (requests, rolesId) => {
   const avaibleRequests = requests.filter((_, inx) => rolesId.find((id) => id === inx + 1))
   return avaibleRequests[avaibleRequests.length - 1] || requests[0]
}

export const getURL = {
   parseURL: (url = '', params = {}) => {
      return Object.entries(params).reduce((prev, [key, value]) => prev.replace(`:${key}`, value), url)
   },
   getURLRoles: (routeNames = [], rolesId = [], params) => getURL.parseURL(routeNames[rolesId[rolesId.length - 1] - 1 || 0], params) || '/',
   img: (src, isDefault = false) => (src ? `${SITE_URL}/${src}` : isDefault ? getURL.defaultImg() : ''),
   defaultImg: () => '/assets/img/course2.jpg',
   avatar: (src, rolesId) => (src ? `${SITE_URL}/${src}` : getURL.defaultAvatar(rolesId)),
   defaultAvatar: (rolesId = []) => '/assets/img/' + ['avatar-user.png', 'avatar-trainer.png', 'avatar-employee.webp', 'avatar-admin.png'][rolesId[rolesId.length - 1] - 1 || 0],
   courses: (params, rolesId) => getURL.getURLRoles([RouteNames.COURSES, RouteNames.COURSES, RouteNames.COURSES], rolesId, params),
   coursesItem: (params, rolesId) => getURL.getURLRoles([RouteNames.COURSES_ITEM, RouteNames.COURSES_ITEM, RouteNames.COURSES_ITEM], rolesId, params),
   cabinetEventsItem: (params, rolesId) => getURL.getURLRoles([RouteNames.EVENTS_ITEM, RouteNames.CABINET_EVENTS_ITEM, RouteNames.CABINET_EVENTS_ITEM], rolesId, params),
   cabinetCourses: (params, rolesId) => getURL.getURLRoles([RouteNames.CABINET_COURSES, RouteNames.CABINET_COURSES, RouteNames.CABINET_COURSES], rolesId, params),
   cabinetCoursesItem: (params, rolesId) => getURL.getURLRoles([RouteNames.CABINET_COURSES_LESSONS, RouteNames.CABINET_COURSES_ITEM, RouteNames.CABINET_COURSES_ITEM], rolesId, params),
   cabinetCoursesLesson: (params, rolesId) => getURL.getURLRoles([RouteNames.CABINET_COURSES_LESSON, RouteNames.CABINET_COURSES_LESSON, RouteNames.CABINET_COURSES_LESSON], rolesId, params),
   cabinetCoursesLessonTest: (params, rolesId) =>
      getURL.getURLRoles([RouteNames.CABINET_COURSES_LESSON_TEST, RouteNames.CABINET_COURSES_LESSON_TEST, RouteNames.CABINET_COURSES_LESSON_TEST], rolesId, params),
   cabinetCoursesEditLessonTest: (params, rolesId) =>
      getURL.getURLRoles([RouteNames.CABINET_COURSES_LESSON_EDIT, RouteNames.CABINET_COURSES_LESSON_EDIT, RouteNames.CABINET_COURSES_LESSON_EDIT], rolesId, params),
}

export const joinData = (arr1, arr2, id1, id2, prop1, prop2) => {
   arr1.forEach(
      (m) =>
         (m[prop1] = arr2.filter((l) => {
            if (l[id2] === m[id1]) l[prop2] = m
            return l[id2] === m[id1]
         })),
   )
}

export const getFullName = ({ first_name, last_name, name }) => `${first_name || name || 'No name'} ${last_name || ''}`

export const timer = (days = {}, hours = {}, minutes = {}, seconds = {}) => {
   const end = new Date('02/19/2022 10:1 AM')

   const _second = 1000
   const _minute = _second * 60
   const _hour = _minute * 60
   const _day = _hour * 24

   const timerId = setInterval(() => {
      const now = new Date()
      const distance = end - now
      if (distance < 0) {
         clearInterval(timerId)
         //  countdown.current.innerHTML = 'EXPIRED!'
         return
      }

      if (days.current) days.current.innerHTML = addZerro(Math.floor(distance / _day))
      if (hours.current) hours.current.innerHTML = addZerro(Math.floor((distance % _day) / _hour))
      if (minutes.current) minutes.current.innerHTML = addZerro(Math.floor((distance % _hour) / _minute))
      if (seconds.current) seconds.current.innerHTML = addZerro(Math.floor((distance % _minute) / _second))
   }, 1000)
}

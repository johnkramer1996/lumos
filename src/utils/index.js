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
   comments: ['комментарий', 'комментария', 'комментариев'],
   new: ['новый', 'новых', 'новых'],
   minutes: ['минута', 'минуты', 'минут'],
   hours: ['час', 'часа', 'часов'],
   days: ['день', 'дня', 'дней'],
   weeks: ['неделя', 'недели', 'недель'],
   months: ['месяц', 'месяца', 'месяцей'],
   years: ['год', 'года', 'лет'],
}

// export const eventBus = {
//    on(event, callback) {
//       document.addEventListener(event, (e) => callback(e.detail))
//    },
//    dispatch(event, data) {
//       document.dispatchEvent(new CustomEvent(event, { detail: data }))
//    },
//    remove(event, callback) {
//       document.removeEventListener(event, callback)
//    },
// }

export const timeout = (func, time = 0) => new Promise((res) => setTimeout(() => res(func()), time))

export const getData = (response, prev = false) => {
   let data = response.data
   while (data.data !== undefined) {
      if (prev && !data.data?.data) return data
      data = data.data
   }
   return data
}

// TODO
// request/success/error - action-creators
// callbackHandler - useRequest

export const asyncAction =
   ({ data, callbackHandler, request, success = () => {}, error = () => {} } = {}) =>
   async (dispatch) => {
      try {
         callbackHandler('before', { dispatch })
         const response = await request(data)
         const successArgs = { response, prevData: getData(response, true), data: getData(response) }
         if (response.status === 200) success({ dispatch, ...successArgs })
         if (response.status === 200) callbackHandler('success', successArgs)
      } catch (e) {
         const errorObj = JSON.stringify(e.response?.data || {})
         alert(errorObj)
         console.log(errorObj, e, e.response)
         error({ dispatch, error: errorObj })
         callbackHandler('error', { dispatch, error: errorObj })
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

export const getDate = (date, { monthNames = true, isYear = true, isDayFirst = true } = {}) => {
   date = new Date(date)
   const year = isYear ? date.getFullYear() : ''
   const month = monthNames ? namesMonth[date.getMonth()] : addZerro(date.getMonth() + 1)
   const day = addZerro(date.getDate())
   return isDayFirst ? `${day} ${month} ${year}` : `${year}-${month}-${day}`
}

export const addZerro = (number) => (number <= 9 ? '0' : '') + number

export const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2)

export const isActiveClass = (condition, className) => (condition ? ` ${className}` : '')

export const toBoolean = (value) => (value === '0' ? false : !!value)

export const isCheckbox = (input) => input.type === 'radio' || input.type === 'checkbox'

export const validatePassword = (value) => value && value.length > 7

export const validateName = (value) => /^[a-zа-яёїієґ ,.'-]+$/i.test(value)

export const validatePhone = (value) => !value.includes('_')

export const validateEmail = (value) => /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)

export const patternNumbers = (val) => val.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
// TODO
//  const patternTime = (val) => val.replace(/^([01]?[0-9]|2[0-3]):[0-5][0-9]/g, '')

export const formatBytes = (bytes, decimals = 2) => {
   if (bytes === 0) return '0 Bytes'

   const k = 1024
   const dm = decimals < 0 ? 0 : decimals
   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

   const i = Math.floor(Math.log(bytes) / Math.log(k))

   return (parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) || 'Нет данных') + ' ' + (sizes[i] || '')
}

export const hasAccess = (rolesId = [1], availables = []) => !![...availables, ROLES.ADMIN].find((i) => rolesId.find((id) => i === id))

export const getRequest = (requests, rolesId) => {
   if (requests.length < rolesId.sort((a, b) => a - b)[rolesId.length - 1]) return requests[requests.length - 1]
   const avaibleRequests = requests.filter((_, inx) => rolesId.find((id) => id === inx + 1))
   return avaibleRequests[avaibleRequests.length - 1] || requests[0]
}

export const getURL = {
   parseURL: (url = '', params) => {
      params = params ? params : {}
      return Object.entries(params).reduce((prev, [key, value]) => prev.replace(`:${key}`, value), url)
   },
   getURLRoles: (routeNames = [], rolesId = [], params) => getURL.parseURL(routeNames[rolesId[rolesId.length - 1] - 1 || 0], params) || '/',
   img: (src, isDefault = false) => (src ? `${SITE_URL}/${src}` : isDefault ? getURL.defaultImg() : ''),
   defaultImg: () => '/assets/img/course2.jpg',
   avatar: (src, rolesId) => (src ? `${SITE_URL}/${src}` : getURL.defaultAvatar(rolesId)),
   defaultAvatar: (rolesId = []) => '/assets/img/' + ['avatar-user.png', 'avatar-trainer.png', 'avatar-employee.webp', 'avatar-admin.png'][rolesId[rolesId.length - 1] - 1 || 0],
   courses: () => RouteNames.COURSES,
   events: () => RouteNames.EVENTS,
   coursesItem: (params) => getURL.parseURL(RouteNames.COURSES_ITEM, params),
   eventsItem: (params) => getURL.parseURL(RouteNames.EVENTS_ITEM, params),
   cabinet: (params) => getURL.parseURL(RouteNames.CABINET, params),
   cabinetCourses: (params) => getURL.parseURL(RouteNames.CABINET_COURSES, params),
   cabinetCoursesItem: (params) => getURL.parseURL(RouteNames.CABINET_COURSES_ITEM, params),
   cabinetCoursesAdd: (params) => getURL.parseURL(RouteNames.CABINET_COURSES_ADD, params),
   cabinetCoursesEdit: (params) => getURL.parseURL(RouteNames.CABINET_COURSES_EDIT, params),
   cabinetCoursesLessons: (params) => getURL.parseURL(RouteNames.CABINET_COURSES_LESSONS, params),
   cabinetCoursesLesson: (params) => getURL.parseURL(RouteNames.CABINET_COURSES_LESSON, params),
   cabinetCoursesLessonTest: (params) => getURL.parseURL(RouteNames.CABINET_COURSES_LESSON_TEST, params),
   cabinetCoursesLessonEdit: (params) => getURL.parseURL(RouteNames.CABINET_COURSES_LESSON_EDIT, params),
   cabinetEvents: (params) => getURL.parseURL(RouteNames.CABINET_EVENTS, params),
   cabinetEventsItem: (params) => getURL.parseURL(RouteNames.CABINET_EVENTS_ITEM, params),
   cabinetEventsAdd: (params) => getURL.parseURL(RouteNames.CABINET_EVENTS_ADD, params),
   cabinetEventsEdit: (params) => getURL.parseURL(RouteNames.CABINET_EVENTS_EDIT, params),
   usersItem: (params) => getURL.parseURL(RouteNames.USERS_ITEM, params),
   trainersItem: (params) => getURL.parseURL(RouteNames.TRAINERS_ITEM, params),
   pagesItem: (params) => getURL.parseURL(RouteNames.PAGES_ITEM, params),
   blogItem: (params) => getURL.parseURL(RouteNames.BLOG_ITEM, params),
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

export const getFullName = (names) => {
   const { first_name = '', last_name = '', name = '' } = names ?? {}
   return `${first_name || name || 'No name'} ${last_name || ''}`
}

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

export const isFunction = (func) => typeof func === 'function'

export const asyncFilter = async (arr, predicate) => Promise.all(arr.map(predicate)).then((results) => arr.filter((_v, index) => results[index]))
export const asyncFind = async (arr, predicate) => Promise.all(arr.map(predicate)).then((results) => arr.find((_v, index) => results[index]))

export function loadImg(value) {
   return new Promise((resolve) => {
      const reader = new FileReader()
      if (!['image/jpg', 'image/jpeg', 'image/png'].includes(value?.type)) {
         resolve('')
      }

      reader.readAsDataURL(value)
      reader.onload = function (value) {
         const img = new Image()
         img.src = value.target.result
         img.onload = function () {
            resolve(img)
         }
      }
   })
}

export const getError = (errors, name) => {
   const spl = name.split('.')
   const error = errors[name] || (spl.length > 1 && errors && spl.reduce((prev, value) => (Array.isArray(prev) || typeof prev === 'object') && prev[value], errors))

   return error
}

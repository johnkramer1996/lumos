import { asyncAction } from 'utils'
import { course } from './data/course'
import { mockTypes } from './types'

export const MockActionCreators = {
    _addCourse: asyncAction,
    _putCourse: asyncAction,
}
// course.json
// res({ status: 200, data: [] })
export const mockHandlers = {
    _addCourse: {
        request: async (data) => {
            return new Promise((res) =>
                res({
                    status: 200,
                    data: { course },
                }),
            )
        },
    },
    _putCourse: {
        request: async (data) => {
            console.log('data')
            return new Promise((res) =>
                res({
                    status: 200,
                    data: { course },
                }),
            )
        },
    },
}

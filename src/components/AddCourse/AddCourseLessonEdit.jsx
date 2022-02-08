import React, { useCallback, useEffect, useImperativeHandle } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch, useInput, useRequest } from 'hooks'
import { coursesSelectors } from 'store/selectors'
import { Checkbox, Input, Loader } from 'components/ui'
import { forwardRef } from 'react'

const AddCourseLessonEdit = (_, ref) => {
    const { courseId, lessonId } = useParams()
    const { fetchLesson, setLesson, putLesson } = useDispatch()
    const lesson = useSelector(coursesSelectors.getLesson)

    const name = useInput({ bind: { name: 'name' }, is: { isRequired: true, isName: true } })
    const can_comment = useInput({ bind: { name: 'can_comment' }, is: { isCheckbox: true } })
    const is_test = useInput({ bind: { name: 'is_test' }, is: { isCheckbox: true } })
    const description = useInput({ bind: { name: 'description' }, is: { isRequired: true, isTextarea: true } })

    const getAllInputs = useCallback(() => [name, can_comment, is_test, description], [name, can_comment, is_test, description])

    useEffect(() => {
        name.setValue(lesson.name || '')
        can_comment.setValue(lesson.can_comment || '0')
        is_test.setValue(lesson.is_test || '0')
        description.setValue(lesson.description || '')
    }, [lesson])

    console.log(can_comment)

    const fetchLessonRequest = useRequest({
        request: fetchLesson,
        // error: ({ error }) => error.status === 404 && toError(),
    })
    const putLessonRequest = useRequest({
        request: putLesson,
    })
    useEffect(() => {
        fetchLessonRequest.call({ courseId, lessonId })
        return () => {
            setLesson({})
        }
    }, [])

    useImperativeHandle(ref, () => ({
        update: () => getAllInputs().filter((i) => i.update()),
        check: () => !getAllInputs().filter((i) => i.check(i.value)).length,
        send: () => {
            if (!ref.current.check()) return
            const body = {}
            getAllInputs().forEach((i) => (body[i.bind.name] = i.isCheckbox ? !!i.value : i.value))

            body['has_text'] = true
            body['count_answers'] = 4

            console.log(body)

            putLessonRequest.call({ courseId, lessonId, body })
        },
    }))

    return (
        <>
            {fetchLessonRequest.isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className='lesson-edit__info card-bg'>
                        <h3 className='lesson-edit__info-title display-4'>Основная информация</h3>
                        <Input input={name} label={'Название'} />
                        <Checkbox className='lesson-edit__switch' input={can_comment} label={'Комментарии'} radio />
                        <Checkbox className='lesson-edit__switch' input={is_test} label={'Тест'} radio />
                    </div>
                    <div className='create-about card-bg'>
                        <h3 className='create-about__title display-4'>Урок</h3>
                        <div className='create-about__editor'>
                            <Input input={description} />
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default forwardRef(AddCourseLessonEdit)

import React, { useCallback, useEffect, useImperativeHandle, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch, useInput, useNavigate, useRequest } from 'hooks'
import { coursesSelectors } from 'store/selectors'
import { Checkbox, Input, Loader, LoaderWrapper } from 'components/ui'
import { forwardRef } from 'react'
import CoursesLessonEditFiles from './CoursesLessonEditFiles'
import CoursesLessonEditTest from './CoursesLessonEditTest'
import { useForm } from 'react-hook-form'

const CoursesLessonEdit = (_, ref) => {
   const { courseId, lessonId } = useParams()
   const { navigate } = useNavigate()
   const { setIsShow, setContent, fetchLesson, resetCourses, resetLessonQuestionsData, putLesson } = useDispatch()
   const lesson = useSelector(coursesSelectors.getLesson)
   const questions = useSelector(coursesSelectors.getLessonQuestions)
   const questionsData = useSelector(coursesSelectors.getLessonQuestionsData)

   const { count_answers, questions_to_delete, ansvers_to_delete, questionsInputs, answerInputs } = questionsData

   const form = useForm({ mode: 'onBlur' })

   useEffect(() => {
      form.setValue('name', lesson.name ?? '')
      form.setValue('description', lesson.description ?? '')
      form.setValue('can_comment', lesson.can_comment ?? false)
      form.setValue('has_text', lesson.has_text ?? false)
   }, [lesson])

   const fetchLessonRequest = useRequest({ request: fetchLesson, loading: true })
   const putLessonRequest = useRequest({
      request: putLesson,
      success: () => {
         setIsShow(true)
         setContent({ title: 'Урок обновлен' })
         resetLessonQuestionsData()
         navigate(-1)
      },
   })
   useEffect(() => {
      fetchLessonRequest.call({ courseId, lessonId })
      return () => resetCourses()
   }, [])

   useImperativeHandle(ref, () => ({
      submit: async () => {
         if (!(await form.trigger())) return

         const inputs = Object.entries(form.getValues()).reduce((prev, [key, value]) => ((prev[key] = value), prev), {})

         const body = {
            count_answers: count_answers.value || 0,
            questions_to_delete,
            ansvers_to_delete,
            questions: questions.map((quest, indexQuestion) => {
               const inputs =
                  quest.answers?.map((answer, indexAnswer) => ({
                     ...answer,
                     ...answerInputs[indexQuestion + '' + indexAnswer].reduce((prev, i) => ((prev[i.name] = i.value), prev), {}),
                  })) || []
               return {
                  ...quest,
                  question: questionsInputs[indexQuestion]?.value,
                  ansvers: inputs,
                  amount_answers: inputs.filter((i) => i.is_true).length,
               }
            }),
            ...inputs,
         }

         putLessonRequest.call({ courseId, lessonId, body })
      },
   }))

   return (
      <>
         <LoaderWrapper isLoading={fetchLessonRequest.isLoading}>
            <div className='lesson-edit__info card-bg'>
               <h3 className='lesson-edit__info-title display-4'>Основная информация</h3>
               <Input form={form} name='name' label='Название' />
               <Checkbox form={form} name='can_comment' label='Комментарии' type='switch' className='lesson-edit__switch' />
               <Checkbox form={form} name='has_text' label='Тест' type='switch' className='lesson-edit__switch' />
            </div>
            <div className='create-about card-bg'>
               <h3 className='create-about__title display-4'>Урок</h3>
               <div className='create-about__editor'>
                  <Input form={form} name='description' textarea />
               </div>
            </div>

            {/* <CoursesLessonEditFiles /> */}
            <CoursesLessonEditTest form={form} />
         </LoaderWrapper>
      </>
   )
}

export default forwardRef(CoursesLessonEdit)

import React, { useCallback, useEffect, useImperativeHandle } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch, useInput, useNavigate, useRequest } from 'hooks'
import { coursesSelectors } from 'store/selectors'
import { Checkbox, Input, Loader } from 'components/ui'
import { forwardRef } from 'react'
import AddCourseLessonEditFiles from './AddCourseLessonEditFiles'
import AddCourseLessonEditTest from './AddCourseLessonEditTest'

const AddCourseLessonEdit = (_, ref) => {
   const { courseId, lessonId } = useParams()
   const { toCabinetCoursesEdit } = useNavigate()
   const { setIsShow, setContent, fetchLesson, setLesson, setLessonQuestions, resetLessonQuestionsData, setLessonFiles, putLesson } = useDispatch()
   const lesson = useSelector(coursesSelectors.getLesson)
   const questions = useSelector(coursesSelectors.getLessonQuestions)
   const questionsData = useSelector(coursesSelectors.getLessonQuestionsData)

   const { count_answers, questions_to_delete, ansvers_to_delete, questionsInputs, answerInputs } = questionsData

   const name = useInput({ bind: { name: 'name' }, is: { isRequired: true, isName: true } })
   const can_comment = useInput({ bind: { name: 'can_comment' }, is: { isCheckbox: true } })
   const has_text = useInput({ bind: { name: 'has_text' }, is: { isCheckbox: true } })
   const description = useInput({ bind: { name: 'description' }, is: { isRequired: true, isTextarea: true } })

   const getAllInputs = useCallback(() => [name, can_comment, has_text, description], [name, can_comment, has_text, description])

   useEffect(() => {
      name.setValue(lesson.name ?? '')
      can_comment.setValue(lesson.can_comment ?? '0')
      has_text.setValue(lesson.has_text ?? '0')
      description.setValue(lesson.description ?? '')
   }, [lesson])

   const fetchLessonRequest = useRequest({
      request: fetchLesson,
   })
   const putLessonRequest = useRequest({
      request: putLesson,
      success: () => {
         setIsShow(true)
         setContent({ title: 'Урок обновлен', descr: '' })
         toCabinetCoursesEdit({ courseId })
         resetLessonQuestionsData()
      },
   })
   useEffect(() => {
      fetchLessonRequest.call({ courseId, lessonId })
      return () => {
         setLesson({})
         setLessonFiles([])
         setLessonQuestions([])
      }
   }, [])

   useImperativeHandle(ref, () => ({
      update: () => getAllInputs().filter((i) => i.update()),
      check: () => !getAllInputs().filter((i) => i.check(i.value)).length,
      send: () => {
         if (!ref.current.check()) return

         console.log(answerInputs)

         const body = {
            count_answers: count_answers.value || 0,
            questions_to_delete,
            ansvers_to_delete,
            questions: questions.map((quest, indexQuestion) => {
               const inputs =
                  quest.answers?.map((answer, indexAnswer) => ({
                     ...answer,
                     ...answerInputs[indexQuestion + '' + indexAnswer].reduce((prev, i) => ((prev[i.ref.current.name] = i.isCheckbox ? !!i.value : i.value), prev), {}),
                  })) || []
               return {
                  ...quest,
                  question: questionsInputs[indexQuestion]?.value,
                  ansvers: inputs,
                  amount_answers: inputs.filter((i) => i.is_true).length,
               }
            }),
            ...getAllInputs().reduce((prev, i) => ((prev[i.ref.current.name] = i.isCheckbox ? !!i.value : i.value), prev), {}),
         }

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
                  <Checkbox className='lesson-edit__switch' input={can_comment} label={'Комментарии'} type={'switch'} />
                  <Checkbox className='lesson-edit__switch' input={has_text} label={'Тест'} type='switch' />
               </div>
               <div className='create-about card-bg'>
                  <h3 className='create-about__title display-4'>Урок</h3>
                  <div className='create-about__editor'>
                     <Input input={description} />
                  </div>
               </div>

               <AddCourseLessonEditFiles />
               <AddCourseLessonEditTest />
            </>
         )}
      </>
   )
}

export default forwardRef(AddCourseLessonEdit)

import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Button, Input } from 'components/ui'
import { useSelector } from 'react-redux'
import AddCourseLesson from './AddCourseLesson'
import AddCourseModule from './AddCourseModule'
import { useDispatch, useInput, useRequest } from 'hooks'
import { useParams } from 'react-router-dom'
import { asyncFind, timeout, uid } from 'utils'
import { ReactComponent as AddSvg } from 'svg/add.svg'
import { useCallback } from 'react'
import { coursesSelectors } from 'store/selectors/'
import { useForm } from 'react-hook-form'

const AddCourseTabLesson = ({ refTabs }, ref) => {
   const { courseId } = useParams()
   const { setContent, setIsShow, setModules, deleteModule, deleteLesson, addModulesMass } = useDispatch()
   const course = useSelector(coursesSelectors.getCourse)
   const modules = useSelector(coursesSelectors.getModules)
   const descriptions = useSelector(coursesSelectors.getDescriptions)
   const prices = useSelector(coursesSelectors.getPrices)

   const hasCourse = !(Object.keys(course).length === 0)
   const hasModules = modules && !(Object.keys(modules).length === 0)
   const hasInfo = !(Object.keys(descriptions).length === 0 && Object.keys(prices).length === 0)

   const form = useForm({
      mode: 'onBlur',
      defaultValues: {
         short_desc: 'short_desc',
         test_lesson: 'test_lesson',
      },
   })
   const getEntries = async () => timeout(() => Object.entries(form.getValues()).filter(([key]) => !(key === 'inputFile' || key === 'inputFileValue')))

   useEffect(() => {
      if (hasCourse) {
         ;(async () => {
            console.log(course)
            ;(await getEntries()).forEach(([key]) => form.setValue(key, course[key] !== '0' ? course[key] : false ?? ''))
            form.setValue('test_lesson', course.test_lesson?.hidden_id)
         })()
      }
   }, [course])

   //  const [modulesState, setModules] = useState([])

   //  const getAllInputs = useCallback(() => {
   //     const modulesInputs = modulesState.map(({ input = {}, name, lessons }) => [{ ...input, value: name }, ...(lessons?.map(({ input = {}, name }) => ({ ...input, value: name })) || [])]).flat()
   //     return [shortDescr, hidden_id, ...modulesInputs]
   //  }, [shortDescr, hidden_id, modulesState])

   //  useEffect(() => {
   // modules && setModules([...modules])
   //  }, [modules])
   //  useEffect(() => {
   //     course && shortDescr.setValue(course.short_desc ?? '')
   //     course.test_lesson && hidden_id.setValue(course?.test_lesson.hidden_id ?? '')
   //  }, [course])

   const addModulesMassRequest = useRequest({
      request: addModulesMass,
      success: ({ response, data }) => {
         console.log(response, data)
         //TODO RETURN COURSE OBJECT FROM SERVER
         // fetchModulesRequest.call({ courseId })
         setIsShow(true)
         !hasModules && !hasInfo
            ? setContent({ title: 'Уроки добавлены,', descr: 'Заполните описание курса и его стоимость.' })
            : !hasInfo
            ? setContent({ title: 'Уроки обновлены,', descr: 'Заполните описание курса и его стоимость.' })
            : setContent({ title: 'Уроки обновлены,', descr: '' })

         !hasInfo && refTabs.current.nextItems()
      },
   })

   const deleteModuleRequest = useRequest({
      request: deleteModule,
      success: ({ response, data }) => {
         setIsShow(true)
         setContent({ title: 'Модуль удален,', descr: '' })
      },
   })
   const deleteLessonRequest = useRequest({
      request: deleteLesson,
      success: ({ response, data }) => {
         setIsShow(true)
         setContent({ title: 'Урок удален', descr: '' })
      },
   })

   const submit = async () => {
      if (!(await form.trigger())) return false

      const body = {}
      ;(await getEntries()).forEach(([key, value]) => (body[key] = typeof value === 'boolean' ? +value : value))

      console.log(body)

      addModulesMassRequest.call({ courseId, body })
   }

   useImperativeHandle(ref, () => ({ submit }))

   console.log(modules)

   const onAddBlockItem = useCallback(async (state, setState) => {
      if (await asyncFind(state, async ({ form }) => !(await form.trigger()))) return

      setState([...state, { lessons: [], hidden_id: uid() }])
   }, [])
   const onDeleteModule = (id, index) => {
      if (modules[index].lessons.length) {
         setIsShow(true)
         setContent({ title: 'У модуля есть уроки, ', descr: 'удалите уроки, потом удалите модуль' })
         return
      }
      id && deleteModuleRequest.call({ courseId, id })
      setModules(modules.filter((_, inx) => inx !== index))
   }
   const onAddLesson = async (state, setState, index) => {
      console.log(state[index])
      if (await asyncFind(state[index].lessons, async ({ form }) => !(await form.trigger()))) return
      const newState = [...modules]
      newState[index].lessons.push({ hidden_id: uid() })
      setState([...newState])
   }
   const onDeleteLesson = (lessonId, indexModule, indexLesson) => {
      lessonId && deleteLessonRequest.call({ courseId, lessonId })
      const newModules = modules.map((m, inxModule) =>
         inxModule !== indexModule
            ? m
            : {
                 ...m,
                 lessons: m.lessons.filter((l, inxLesson) => {
                    return inxLesson !== indexLesson
                 }),
              },
      )
      setModules(newModules)
   }

   return (
      <>
         <div className='course-edit__small-desc card-bg'>
            <div className='course-edit__small-desc-title display-4'>Короткое описание</div>
            <Input form={form} name='short_desc' label='Описание' textarea />
         </div>
         <div className='create-module card-bg'>
            <h3 className='create-module__title display-4'>Модули</h3>
            <div className='create-module__items'>
               {modules.map((props, index) => (
                  <AddCourseModule key={index} {...props} index={index} onDelete={onDeleteModule} />
               ))}
            </div>
            <Button className='create-module__add' onClick={onAddBlockItem.bind(null, modules, setModules)} outline>
               <AddSvg />
               <span>Добавить модуль</span>
            </Button>
         </div>
         {/* {modules.map((props, index) => (
            <AddCourseLesson key={props.id ?? props.hidden_id} {...props} lessons={props.lessons} index={index} onAdd={onAddLesson.bind(null, modules, setModules)} onDelete={onDeleteLesson} />
         ))} */}
         <div className='create-module card-bg'>
            <div className='create-module__top'>
               <h3 className='create-module__title display-4'>Тестовый урок</h3>
            </div>
            <div className='create-module__items'>
               <div className='create-module__item form-group'>
                  <label htmlFor='test_lesson'>Выберите тестовый урок</label>
                  {}
                  <select id='test_lesson' {...form.register('test_lesson')}>
                     <option defaultValue hidden>
                        Выберите тестовый урок
                     </option>
                     <option value='0'>Без тестового урока</option>
                     {modules.map((item) =>
                        item?.lessons
                           ?.filter(({ name }) => name !== '')
                           .map(({ id, name, hidden_id }, indexLesson) => (
                              <option key={id ?? hidden_id ?? indexLesson} value={hidden_id}>
                                 {name}
                              </option>
                           )),
                     )}
                  </select>
               </div>
            </div>
         </div>
      </>
   )
}

export default forwardRef(AddCourseTabLesson)

import { Button, Checkbox, Input } from 'components/ui'
import { useInput } from 'hooks'
import React from 'react'
import { useFieldArray, useWatch } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { coursesSelectors } from 'store/selectors'
import { ReactComponent as DeleteSvg } from 'svg/delete.svg'
import { ReactComponent as AddSvg } from 'svg/add.svg'
import { uid } from 'utils'

const CoursesLessonEditTestItemVariant = ({ nestIndex, form, onDelete }) => {
   const { courseId } = useParams()
   const { setIsShow, setContent } = useDispatch()
   const { fields, remove, append } = useFieldArray({
      control: form.control,
      name: `questions.${nestIndex}.answers`,
   })
   const answers = form.getValues(`questions.${nestIndex}.answers`)

   const onAdd = async (e) => {
      e.preventDefault()
      if (!(await form.trigger(`questions.${nestIndex}.answers`))) return

      append({
         ansver: 'ответ' + fields.length,
         is_true: false,
         id: null,
         //  hidden_id: uid(),
      })
   }

   const onRemove = async (index, lessonId) => {
      onDelete(lessonId)
      remove(index)
   }

   return (
      <div className='lesson-test__variants'>
         <div className='lesson-test__variants-title'>Введите варианты ответов и выберите правильный</div>
         <div className='lesson-test__variants-items'>
            {fields.map((item, index) => {
               // TODO CHECK
               const answerId = answers[index].id
               return (
                  <div key={item.id} className='lesson-test__variants-item form-group'>
                     {/* <Checkbox form={form} name='can_comment' label='Комментарии' type='switch' className='lesson-edit__switch' /> */}
                     <Checkbox form={form} name={`questions.${nestIndex}.answers.${index}.is_true`} type='radio' />
                     <Input form={form} name={`questions.${nestIndex}.answers.${index}.ansver`} placeholder='Вариант ответа' isErrorText={false} withoutWrapper />
                     <Input form={form} name={`questions.${nestIndex}.answers.${index}.id`} type='hidden' withoutWrapper />
                     {/* <Input input={input_ansver} placeholder='Вариант ответа' withoutWrapper /> */}
                     <button
                        className='lesson-test__variants-delete'
                        type='button'
                        onClick={() => {
                           const id = answers[index].id
                           id && form.setValue('ansvers_to_delete', [...form.getValues('ansvers_to_delete'), id])
                           onRemove(index)
                        }}
                     >
                        <DeleteSvg />
                     </button>
                  </div>
               )
            })}
         </div>
         <Button className='lesson-test__variants-add' onClick={onAdd} outline>
            <AddSvg />
            <span>Добавить вариант</span>
         </Button>
      </div>
   )
}

// ansver
// is_true

export default CoursesLessonEditTestItemVariant

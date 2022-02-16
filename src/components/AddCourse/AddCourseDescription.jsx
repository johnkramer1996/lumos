import React from 'react'
import { coursesSelectors } from 'store/selectors'
import { useSelector } from 'react-redux'
import AddCourseBlock from './AddCourseBlock'

const AddCourseDescription = (props) => {
   const descriptions = useSelector(coursesSelectors.getDescriptions)

   return <AddCourseBlock {...props} array={descriptions} />
}

export default AddCourseDescription

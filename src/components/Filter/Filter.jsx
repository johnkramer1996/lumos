import { Button } from 'components/ui'
import { useDispatch } from 'hooks'
import useQuery from 'hooks/useQuery'
import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate, createSearchParams } from 'react-router-dom'
import FilterItems from './FilterItems'

const Filter = () => {
   const location = useLocation()
   const query = useQuery()
   const navigate = useNavigate()
   const { setFilter } = useDispatch()
   const filter = useSelector(({ settings }) => settings.filter)
   const { themes = [], type_study = [], difficulty = [], format = [], event_types = [] } = useSelector(({ system }) => system.references)

   const filtersItems = useMemo(
      () => [
         { paramName: 'themes', title: 'Категория', items: themes, activeParams: filter.themes },
         { paramName: 'type_study', title: 'Тип обучения', items: type_study, activeParams: filter.type_study },
         { paramName: 'difficulty', title: 'Сложность', items: difficulty, activeParams: filter.difficulty },
         { paramName: 'format_study', title: 'Формат', items: format, activeParams: filter.format_study },
      ],
      [filter, themes, type_study, difficulty, format],
   )

   useEffect(() => {
      const themes = query.getAll('themes') ?? []
      const type_study = query.getAll('type_study') ?? []
      const difficulty = query.getAll('difficulty') ?? []
      const format_study = query.getAll('format_study') ?? []
      setFilter({ ...filter, themes, type_study, difficulty, format_study })
      return () => setFilter({})
   }, [location])

   const onChangeFilter = (name, value, checked) => {
      let newArray = [...filter[name]]
      if (checked) !newArray.includes(value) && newArray.push(value)
      else newArray = newArray.filter((item) => item !== value)
      const newfilter = { ...filter, [name]: newArray }
      setFilter(newfilter)
      navigate({
         pathname: location.pathname,
         search: `?${createSearchParams(newfilter)}`,
      })
   }

   return (
      <>
         <div className='filter'>
            <div className='filter__inner'>
               {filtersItems.map((props, index) => (
                  <FilterItems key={index} {...props} items={props.items} onChange={onChangeFilter} />
               ))}
               <Button className='filter__save'>Применить</Button>
            </div>
         </div>
         <div className='filter-bg'></div>
         {/* // TODO MOBILE VERSION */}
         {/* <div className='filter-mob filter-mob--selected'>
            <span>Фильтр</span>
            <i>2</i>
         </div>
         <div className='filter-tablet'>
            <div className='filter-tablet__item' data-filter='1'>
               <span>Тематика</span>
               <i></i>
            </div>
            <div className='filter-tablet__item filter-tablet__item--selected' data-filter='2'>
               <span>Тип обучения</span>
               <i>1</i>
            </div>
            <div className='filter-tablet__item' data-filter='3'>
               <span>Формат обучения</span>
               <i>1</i>
            </div>
         </div> */}
      </>
   )
}

export default Filter

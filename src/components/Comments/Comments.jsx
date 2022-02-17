import { Input, Loader } from 'components/ui'
import { useDispatch, useInput } from 'hooks'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { authSelectors } from 'store/selectors'
import { ReactComponent as ArrowDownSvg } from 'svg/edit.svg'
import { declOfNum, getDeclOfArray, getURL } from 'utils'
import CommentsItem from './CommentsItem'

const Comments = ({ isLoading, items = [], total = 0, isLastPage = true, limit = 4, onAddHandle, setPage }) => {
   const { resetComments } = useDispatch()
   const user = useSelector(authSelectors.getUser)
   const rolesId = useSelector(authSelectors.getRolesId)
   const { avatar } = user
   items[0]?.user_id === user.id && (items[0].user = user) // added comment
   const comment = useInput({ is: { isTextarea: true } })
   const countShowAdd = items.length + limit < total ? limit : total - items.length

   useEffect(
      () => () => {
         resetComments()
      },
      [],
   )

   const onAdd = (e) => {
      e.preventDefault()
      const text = e.target.value
      if (!text || text.length < 5) return
      onAddHandle(text)
      comment.clear()
   }

   const onShowMore = () => {
      setPage((page) => page + 1)
   }

   return (
      <div>
         {!items.length && isLoading ? (
            <Loader />
         ) : (
            <div className='blog-comments'>
               <h2 className='blog-comments__title'>
                  {total ? (
                     <>
                        {total} {declOfNum(total, getDeclOfArray['comments'])}
                     </>
                  ) : (
                     'Комментарии еще не добавлены'
                  )}
               </h2>
               <div className='blog-comments__inner'>
                  <form className='blog-comments__top'>
                     <div className='blog-comments__avatar'>
                        <img src={getURL.avatar(avatar, rolesId)} alt='' />
                     </div>
                     <Input input={comment} placeholder='Написать комментарий или задать вопрос...' onBlur={onAdd} withoutWrapper />
                  </form>
                  <div className='blog-comments__group'>
                     <div className='blog-comments__main'>
                        {items.map((props, index) => (
                           <CommentsItem key={props.id || index} {...props} />
                        ))}
                     </div>
                     {isLoading && <Loader />}
                     {/* // TODO SUB COMMENTS */}
                     {/* <div className='blog-comments__sub'>
							 <CommentsItem />
							 <CommentsItem />
							 <CommentsItem />
						</div> */}
                     {!isLastPage && (
                        <div className='blog-comments__sub'>
                           <button className='blog-comments__more' onClick={onShowMore}>
                              <ArrowDownSvg />
                              <span>
                                 Показать еще {countShowAdd} {declOfNum(countShowAdd, getDeclOfArray['comments'])}
                              </span>
                           </button>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}

export default React.memo(Comments)

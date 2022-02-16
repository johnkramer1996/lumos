import React from 'react'
import CommentsBoardItem from './CommentsBoardItem'
import { ReactComponent as ArrowDownSvg } from 'svg/arrow-down.svg'
import { Button, Loader } from 'components/ui'
import { declOfNum, getDeclOfArray } from 'utils'

const CommentsBoard = ({ isLoading, items = [], newTotal, onShowMore, isShowBtn }) => {
   return (
      <div className='lessons-tab__comments'>
         {!items.length && isLoading ? (
            <Loader />
         ) : (
            <>
               <div className='lessons-tab__comments-top'>
                  <div className='lessons-tab__comments-title'>Комментарии</div>
                  <div className='lessons-tab__comments-new'>
                     {newTotal} {declOfNum(newTotal, getDeclOfArray['new'])}
                  </div>
               </div>
               <div className='lessons-tab__comments-items'>
                  {items.map((props, index) => (
                     <CommentsBoardItem key={props.id || index} {...props} />
                  ))}
                  {isLoading && <Loader />}
               </div>
               {isShowBtn && (
                  <div className='lessons-tab__comments-bottom'>
                     <Button className='lessons-tab__comments-more' color='transparent' onClick={onShowMore}>
                        <ArrowDownSvg />
                        <span>Показать больше</span>
                     </Button>
                  </div>
               )}
            </>
         )}
      </div>
   )
}

export default CommentsBoard

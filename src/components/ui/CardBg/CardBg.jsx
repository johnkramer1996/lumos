import React from 'react'

const CardBg = ({ children, className, ...props }) => {
   className = 'card-bg ' + className
   return (
      <div className={className} {...props}>
         {children}
      </div>
   )
}

export default CardBg

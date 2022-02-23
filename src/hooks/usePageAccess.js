import { useEffect } from 'react'

const usePageAccess = (user_id, page_user_id, to, isLoading) => {
   useEffect(() => !isLoading && !(user_id === page_user_id) && to(), [isLoading])
}

export default usePageAccess

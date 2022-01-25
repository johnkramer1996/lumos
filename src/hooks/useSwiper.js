import { useEffect, useRef } from 'react'

export const useSwiper = () => {
    const swiper = useRef()
    useEffect(() => swiper.current?.swiper?.update(), [])

    return [swiper]
}

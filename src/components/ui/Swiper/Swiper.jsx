import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { SwiperControls } from 'components/ui/'
import { useSwiper } from 'hooks/useSwiper'

export const defaultOptions = {
    className: 'swiper-container',
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    modules: [Navigation, Pagination],
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
}

const SwiperSlider = ({ items = [], children, className, prefix, options, bgImg }) => {
    const [swiper] = useSwiper()

    if (!items.length) return ''

    return (
        <>
            <Swiper ref={swiper} {...defaultOptions} {...options}>
                {items.map(({ id, ...rest }) => (
                    <SwiperSlide key={id} className={className} style={bgImg ? { backgroundImage: `url(${rest.img})` } : {}}>
                        {children(rest)}
                    </SwiperSlide>
                ))}
            </Swiper>
            <SwiperControls prefix={prefix} />
        </>
    )
}

export default SwiperSlider

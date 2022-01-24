import { Navigation, Pagination } from 'swiper'

export const defaultOptions = {
    className: 'swiper-container',
    spaceBetween: 20,
    slidesPerView: 1,
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

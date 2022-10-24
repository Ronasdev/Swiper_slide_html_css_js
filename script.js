
var swiper = new Swiper(".mySwiper",{
    effect: "coverflow",
    grabCursor:true,
    centeredSlider:true,
    
    coverflowEffect: {
        rotate:60,
        stretch:0,
        depth:100,
        slideshadows:true,
    },
    slidesPerView:"auto",
    pagination:{
        el:".swiper-pagination"
    }
})
define(['app', 'swiper'], function (app, Swiper) {
    app.controller('CarouselSwiperController', function () {
        
        let mySwiper = new Swiper('.swiper-container', {
            autoplay: 5000,
            loop: true,
            direction: 'vertical',
            pagination: '.swiper-pagination',
            paginationClickable: true
        });
    });
});

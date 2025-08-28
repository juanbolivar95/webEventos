document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3.2,
        spaceBetween: 30,
        centeredSlides: false,
        grabCursor: true,
        loop: true,
        autoplay: false
    });
    
    swiper.slides.forEach(slide => {
        slide.addEventListener("click", () => {
            
            let cardActive = slide.querySelector('.event-card');
            
            swiper.slides.forEach(s => {
                let ec = s.querySelector('.event-card');
                if (ec) ec.classList.remove('active');
            });

            if (cardActive) {
                cardActive.classList.add('active');
            }

            swiper.slideNext();
        });
    });
});

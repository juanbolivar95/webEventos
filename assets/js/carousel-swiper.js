const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.2,
    spaceBetween: 30,
    centeredSlides: false,
    grabCursor: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3.2,
        spaceBetween: 30,
        centeredSlides: false,
        grabCursor: true,
        loop: true,
        autoplay: false,

        // 🚫 desactiva arrastre/drag
        allowTouchMove: false,
    });

    let activeCard = null;

    swiper.slides.forEach(slide => {
        const card = slide.querySelector(".event-card");

        slide.addEventListener("click", (e) => {
            e.stopPropagation();
            closeAllCards();

            const clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10);
            const activeIndex = swiper.realIndex;

            if (clickedIndex === activeIndex) {
                // 👉 si es el slide activo, solo abre la card
                if (card) {
                    card.classList.add("active");
                    activeCard = card;
                }
            } else {
                // 👉 si es un slide lateral (cortado), muévete hacia él
                swiper.slideToLoop(clickedIndex);
            }
        });
    });

    // Cuando cambia el slide por click → mostrar card automáticamente
    swiper.on("slideChange", function () {
        closeAllCards();
        const activeSlide = swiper.slides[swiper.activeIndex];
        if (!activeSlide) return;

        const card = activeSlide.querySelector(".event-card");
        if (card) {
            card.classList.add("active");
            activeCard = card;
        }
    });

    // Cerrar cards al hacer click fuera
    document.addEventListener("click", () => {
        closeAllCards();
    });

    function closeAllCards() {
        swiper.slides.forEach(s => {
            let ec = s.querySelector(".event-card");
            if (ec) ec.classList.remove("active");
        });
        activeCard = null;
    }
});

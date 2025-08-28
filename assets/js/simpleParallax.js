document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll('.parallax-img');
    new simpleParallax(images, {
        delay: 1,
        scale: 1.5,
        transition: 'cubic-bezier(0,0,0,1)'
    });
});

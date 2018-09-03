'use strict';

function slider() {
    var slideIndex = 1;
    var slides = document.getElementsByClassName('slider-item');
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var dotsWrap = document.querySelector('.slider-dots');
    var dot = document.getElementsByClassName('dot');

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        };
        if (n < 1) {
            slideIndex = slides.length;
        };

        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (var _i = 0; _i < dot.length; _i++) {
            dot[_i].classList.remove('dot-active');
        }

        slides[slideIndex - 1].style.display = 'block';
        dot[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });
    next.addEventListener('click', function () {
        plusSlides(1);
    });
    dotsWrap.addEventListener('click', function () {
        for (var i = 0; i < dot.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dot[i - 1]) {
                currentSlide(i);
            }
        }
    });
}

module.exports = slider;
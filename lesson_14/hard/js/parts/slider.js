    let slideIndex = 1;
    let slides = document.getElementsByClassName('slider-item');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let dotsWrap = document.querySelector('.slider-dots');
    let dot = document.getElementsByClassName('dot');

    showSlides(slideIndex);

    function showSlides(n) {
        if(n > slides.length) {
            slideIndex = 1;
        };
        if(n < 1) {
            slideIndex = slides.length;
        };

        for(let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for(let i = 0; i < dot.length; i++) {
            dot[i].classList.remove('dot-active');
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

    prev.addEventListener('click', function() {
            plusSlides(-1);
    });
    next.addEventListener('click', function() {
        plusSlides(1);
    });
    dotsWrap.addEventListener('click', function() {
        for(let i = 0; i < dot.length +1; i++) {
            if(event.target.classList.contains('dot') && event.target == dot[i-1]) {
                currentSlide(i);
            }
        }
    });

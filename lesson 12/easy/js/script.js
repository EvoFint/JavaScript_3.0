window.addEventListener('DOMContentLoaded', () => {

    let tab = document.getElementsByClassName('info-header-tab');
    let tabContent = document.getElementsByClassName('info-tabcontent');
    let info = document.getElementsByClassName('info-header')[0];

    /* scroll */
    let about = document.getElementById('about');
    let photo = document.getElementById('photo');
    let price = document.getElementById('price');
    let contacts = document.getElementById('contacts');
    let menu = document.querySelectorAll('.menu');
    var requestID;
    /* end */

    /*  */
    // console.log(about.offsetTop);
    // console.log(photo.offsetTop);
    // console.log(price.offsetTop);
    // console.log(contacts.offsetTop);
    // console.log(menu);
    /*  */

    hideTabContent(1);

    info.addEventListener('click',() => {
        let target = event.target;
        if(target.className == 'info-header-tab') {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    document.querySelector('ul').addEventListener('click',function(e) {
        let	t = 1;
        let target = e.target;
        
        if (e.target.tagName === "A") {

			e.preventDefault();
			let anchor = target.href.replace(/.*(#.*)/, '$1');
			let	coords = document.querySelector(anchor).getBoundingClientRect().top;
			let	w = window.pageYOffset;
			let	start  = null;

			let tick = (now) => {
				if (start === null) start = now;

                let progress = now - start;
                let position = (coords < 0 ? Math.max(w - progress/(t -= 0.01), w + coords) : Math.min(w + progress/(t -= 0.01), w + coords));
                window.scrollTo(0,position);


				if (position != coords + w) {
					requestAnimationFrame(tick);
				} 
			};

            requestAnimationFrame(tick);
		}
    });

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    //timer

    let deadline = '2018-03-25';

    function getTimerRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let seconds;
        let minutes;
        let hours;
        if(t <= 0) {
            seconds = 0;
            minutes = 0;
            hours = 0;
        } else {
            seconds = Math.floor((t/1000) % 60);
            minutes = Math.floor((t/(1000*60)) % 60);
            hours = Math.floor((t/(1000*60*60)));
        }

        return {
            'total': t,
            'hours': setTime(hours),
            'minutes': setTime(minutes),
            'seconds': setTime(seconds)
        };

        function setTime(time) {
            if(String(time).length == 1) {
                return '0' + time;
            } else {
                return time;
            }
        };
    };

    function setClock(id, endtime) {
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock, 1000)

        function updateClock() {
            let t = getTimerRemaining(endtime);
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

        updateClock();
    };

    setClock('timer', deadline);

// Modal

    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');
    let infoMore = document.querySelector('.info')

    more.addEventListener('click', function() {
        this.classList.add('more-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    infoMore.addEventListener('click', function() {
        let target = event.target;
        if(target.className == 'description-btn') {
            this.classList.add('more-splash');
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //Form
    let message = new Object();
    message.loading = 'Загрузка...';
    message.success = 'Завявка отправлена! Мы Вам перезвоним!';
    message.failure = 'Что-то пошло не так...';

    let messageIcon = new Object();
    messageIcon.loading = '<img style="width: 50px; " src="icons/time.svg" alt="time">';
    messageIcon.success = '<img style="width: 50px; " src="icons/paper-plane.svg" alt="paper-plane">';
    messageIcon.failure = '<img style="width: 50px; " src="icons/error.svg" alt="error">';

    let form = document.getElementsByClassName('main-form')[0];
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    //Form 2
    let contactForm = document.getElementById('form');
    let inputContactForm = contactForm.getElementsByTagName('input');

    console.log(contactForm);

    contactForm.addEventListener('submit', function() {
        event.preventDefault();
        contactForm.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(form);
        request.send(formData);

        request.onreadystatechange = function() {
            if(request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4) {
                if(request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = messageIcon.success + message.success;
                }
            } else {
                statusMessage.innerHTML = message.failure;
            }
        }

        for(let i = 0; i < inputContactForm.length; i++) {
            inputContactForm[i].value = '';
        }
    });

    //Slider
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

    //Calc 
    let  persons = document.getElementsByClassName('counter-block-input')[0];
    let  restDays = document.getElementsByClassName('counter-block-input')[1];
    let place = document.getElementById('select');
    let totalValue = document.getElementById('total');
    let personsSum = 0;
    let daysSum = 0;
    let total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personsSum = this.value;
        let correctPS = personsSum.match(/\D/g);
        if (correctPS == null) {
            personsSum = +personsSum;
            total = (daysSum + personsSum)*4000;
            if(restDays.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        }
    });
    restDays.addEventListener('change', function() {
        daysSum = this.value;
        let correctDS = daysSum.match(/\D/g);
        if (correctDS == null) {
            daysSum = +daysSum;
            total = (daysSum + personsSum)*4000;
            if(restDays.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        }
    });
    place.addEventListener('change', function() {
        if(persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a* this.options[this.selectedIndex].value;
        }
    });

});
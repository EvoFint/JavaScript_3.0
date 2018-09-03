(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

    var tab = require('../modules/tab.js');
    var scroll = require('../modules/scroll.js');
    var modal = require('../modules/modal.js');
    var timer = require('../modules/timer.js');
    var ajax = require('../modules/ajax.js');
    var slider = require('../modules/slider.js');
    var calc = require('../modules/calc.js');

    tab();
    scroll();
    modal();
    timer();
    ajax();
    slider();
    calc();
    
});
},{"../modules/ajax.js":2,"../modules/calc.js":3,"../modules/modal.js":4,"../modules/scroll.js":5,"../modules/slider.js":6,"../modules/tab.js":7,"../modules/timer.js":8}],2:[function(require,module,exports){
'use strict';

function ajax() {
    //Form
    var message = new Object();
    message.loading = 'Загрузка...';
    message.success = 'Завявка отправлена! Мы Вам перезвоним!';
    message.failure = 'Что-то пошло не так...';

    var messageIcon = new Object();
    messageIcon.loading = '<img style="width: 50px; " src="icons/time.svg" alt="time">';
    messageIcon.success = '<img style="width: 50px; " src="icons/paper-plane.svg" alt="paper-plane">';
    messageIcon.failure = '<img style="width: 50px; " src="icons/error.svg" alt="error">';

    var form = document.getElementsByClassName('main-form')[0];
    var input = form.getElementsByTagName('input');
    var statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);
    
        var request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
        var formData = new FormData(form);
        request.send(formData);
    
        request.onreadystatechange = function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = messageIcon.loading + message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = messageIcon.success + message.success;
                }
            } else {
                statusMessage.innerHTML = messageIcon.failure + message.failure;
            }
        };
    
        for (var i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    //Form 2
    var contactForm = document.getElementById('form');
    var inputContactForm = contactForm.getElementsByTagName('input');

    contactForm.addEventListener('submit', function () {
        event.preventDefault();
        contactForm.appendChild(statusMessage);

        var request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        var formData = new FormData(form);
        request.send(formData);

        request.onreadystatechange = function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = messageIcon.success + message.success;
                }
            } else {
                statusMessage.innerHTML = message.failure;
            }
        };

        for (var i = 0; i < inputContactForm.length; i++) {
            inputContactForm[i].value = '';
        }
    });
}

module.exports = ajax;
},{}],3:[function(require,module,exports){
'use strict';

function calc() {
    var persons = document.getElementsByClassName('counter-block-input')[0];
    var restDays = document.getElementsByClassName('counter-block-input')[1];
    var place = document.getElementById('select');
    var totalValue = document.getElementById('total');
    var personsSum = 0;
    var daysSum = 0;
    var total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function () {
        personsSum = this.value;
        var correctPS = personsSum.match(/\D/g);
        if (correctPS == null) {
            personsSum = +personsSum;
            total = (daysSum + personsSum) * 4000;
            if (restDays.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        }
    });
    restDays.addEventListener('change', function () {
        daysSum = this.value;
        var correctDS = daysSum.match(/\D/g);
        if (correctDS == null) {
            daysSum = +daysSum;
            total = (daysSum + personsSum) * 4000;
            if (restDays.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        }
    });
    place.addEventListener('change', function () {
        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            var a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;
},{}],4:[function(require,module,exports){
'use strict';

function modal() {
    var more = document.querySelector('.more');
    var overlay = document.querySelector('.overlay');
    var close = document.querySelector('.popup-close');
    var infoMore = document.querySelector('.info');

    more.addEventListener('click', function () {
        this.classList.add('more-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    infoMore.addEventListener('click', function () {
        var target = event.target;
        if (target.className == 'description-btn') {
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
}

module.exports = modal;
},{}],5:[function(require,module,exports){
'use strict';

function scroll() {
	document.querySelector('ul').addEventListener('click', function (e) {
		var t = 1;
		var target = e.target;

		if (e.target.tagName === "A") {

			e.preventDefault();
			var anchor = target.href.replace(/.*(#.*)/, '$1');
			var coords = document.querySelector(anchor).getBoundingClientRect().top;
			var w = window.pageYOffset;
			var start = null;

			var tick = function tick(now) {
				if (start === null) start = now;

				var progress = now - start;
				var position = coords < 0 ? Math.max(w - progress / (t -= 0.01), w + coords) : Math.min(w + progress / (t -= 0.01), w + coords);
				window.scrollTo(0, position);

				if (position != coords + w) {
					requestAnimationFrame(tick);
				}
			};

			requestAnimationFrame(tick);
		}
	});
}

module.exports = scroll;
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
'use strict';

function tab() {
    var tab = document.getElementsByClassName('info-header-tab');
    var tabContent = document.getElementsByClassName('info-tabcontent');
    var info = document.getElementsByClassName('info-header')[0];

    hideTabContent(1);

    info.addEventListener('click', function () {
        var target = event.target;
        if (target.className == 'info-header-tab') {
            for (var i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    function hideTabContent(a) {
        for (var i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
}

module.exports = tab;
},{}],8:[function(require,module,exports){
'use strict';

function timer() {
    var deadline = '2018-03-25';

    function getTimerRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = void 0;
        var minutes = void 0;
        var hours = void 0;
        if (t <= 0) {
            seconds = 0;
            minutes = 0;
            hours = 0;
        } else {
            seconds = Math.floor(t / 1000 % 60);
            minutes = Math.floor(t / (1000 * 60) % 60);
            hours = Math.floor(t / (1000 * 60 * 60));
        }

        return {
            'total': t,
            'hours': setTime(hours),
            'minutes': setTime(minutes),
            'seconds': setTime(seconds)
        };

        function setTime(time) {
            if (String(time).length == 1) {
                return '0' + time;
            } else {
                return time;
            }
        }
    }

    function setClock(id, endtime) {
        var timer = document.getElementById(id);
        var hours = timer.querySelector('.hours');
        var minutes = timer.querySelector('.minutes');
        var seconds = timer.querySelector('.seconds');
        var timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            var t = getTimerRemaining(endtime);
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

        updateClock();
    }

    setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);

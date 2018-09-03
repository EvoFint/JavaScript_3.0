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
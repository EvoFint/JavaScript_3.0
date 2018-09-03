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
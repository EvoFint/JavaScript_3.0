window.addEventListener('DOMContentLoaded', () => {

    let tab = document.getElementsByClassName('info-header-tab');
    let tabContent = document.getElementsByClassName('info-tabcontent');
    let info = document.getElementsByClassName('info-header')[0];

    hideTabContent(1);

    info.addEventListener('click', () => {
        let target = event.target;
        if(target.className == 'info-header-tab') {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        }
    })

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

    let deadline = '2018-08-25';

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
        let timeInterval = setInterval(updateClock, 1000)
    };

    setClock('timer', deadline);
});
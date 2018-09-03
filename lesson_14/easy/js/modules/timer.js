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
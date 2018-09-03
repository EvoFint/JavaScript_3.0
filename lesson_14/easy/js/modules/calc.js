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
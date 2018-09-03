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
    persons.onkeyup = function (input){
        return this.value = this.value.replace(/[^\d]/g, '');
    }; 
    persons.addEventListener('input', function () {
        personsSum = this.value;
        personsSum = +personsSum;
        total = (daysSum + personsSum) * 4000;
        if (restDays.value == '' || restDays.value == 0 || persons.value == '' || persons.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
        
    });
    restDays.onkeyup = function (input){
        return this.value = this.value.replace(/[^\d]/g, '');
    }; 
    restDays.addEventListener('input', function () {
        daysSum = this.value;
        daysSum = +daysSum;
        total = (daysSum + personsSum) * 4000;
        if (restDays.value == '' || restDays.value == 0 || persons.value == '' || persons.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
    place.addEventListener('change', function () {
        if (persons.value == '' || restDays.value == '' || +persons.value == 0 || +restDays.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            var a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;
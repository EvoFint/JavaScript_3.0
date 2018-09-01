function calc() {
    let persons = document.getElementsByClassName('counter-block-input')[0];
    let restDays = document.getElementsByClassName('counter-block-input')[1];
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
}

module.exports = calc;
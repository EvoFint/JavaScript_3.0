/* variables */


/* functions */
function getPrimes() {
    nextPrime:
    for(let i = 2; i <= 100; i++) {
        for(j = 2; j < i; j++) {
            if(i % j == 0) continue nextPrime;
        }
        console.log(i + ' Делитель этого числа: ' + 1 + ' и ' + i);
    }
}

/* start */
getPrimes();
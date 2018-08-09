let week = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
];

/* week */
function getWeekStyle(i) {
    if (i === 5 || i === 6) { 
           return "font-weight:bold;";
    };
    let now = new Date().getDay();
    now = Number(now) - 1;
    if(i === now) {
        return "font-style:italic";
    }
 };
for (let i = 0; i < week.length; i++) {
     document.write('<p style="' + getWeekStyle(i) + '">' + week[i] + '<\p>');
};

/* Array */
let arr = [
    '1234',
    '4321',
    '357951',
    '159753',
    '648259731',
    '7538642',
    '97318264'
];
for (let i = 0; i < arr.length; i++) {
    let a = arr[i].split('');
    if(a[0] === '3' || a[0] === '7') {
        console.log(arr[i]);
    };
};
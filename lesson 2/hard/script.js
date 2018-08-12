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
    } else {
        return '';
    };
};
function getStyleItalic(i, now) {
    if(i == now) {
        return "font-style:italic;";
    } else {
        return '';
    };
};
function getTodayStyle(i) {
    let a = i;
    let now = new Date().getDay();
    if(now == 6 || now == 0) {
        if(now == 6) {
            now = 5;
            return getStyleItalic(i, now);
        } else {
            now = 6;
            return getStyleItalic(i, now);
        };
    } else {
        now = now - 1;
        return getStyleItalic(i, now);
    };
};
for (let i = 0; i < week.length; i++) {
    document.write('<p style="' + getWeekStyle(i) + getTodayStyle(i) + '">' + week[i] + '<\p>');
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
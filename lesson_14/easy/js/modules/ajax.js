'use strict';

function ajax() {
    //Form
    var message = new Object();
    message.loading = 'Загрузка...';
    message.success = 'Завявка отправлена! Мы Вам перезвоним!';
    message.failure = 'Что-то пошло не так...';

    var messageIcon = new Object();
    messageIcon.loading = '<img style="width: 50px; " src="icons/time.svg" alt="time">';
    messageIcon.success = '<img style="width: 50px; " src="icons/paper-plane.svg" alt="paper-plane">';
    messageIcon.failure = '<img style="width: 50px; " src="icons/error.svg" alt="error">';

    var form = document.getElementsByClassName('main-form')[0];
    var input = form.getElementsByTagName('input');
    var statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);
    
        var request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
        var formData = new FormData(form);
        request.send(formData);
    
        request.onreadystatechange = function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = messageIcon.loading + message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = messageIcon.success + message.success;
                }
            } else {
                statusMessage.innerHTML = messageIcon.failure + message.failure;
            }
        };
    
        for (var i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    //Form 2
    var contactForm = document.getElementById('form');
    var inputContactForm = contactForm.getElementsByTagName('input');

    contactForm.addEventListener('submit', function () {
        event.preventDefault();
        contactForm.appendChild(statusMessage);

        var request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        var formData = new FormData(form);
        request.send(formData);

        request.onreadystatechange = function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = messageIcon.success + message.success;
                }
            } else {
                statusMessage.innerHTML = message.failure;
            }
        };

        for (var i = 0; i < inputContactForm.length; i++) {
            inputContactForm[i].value = '';
        }
    });
}

module.exports = ajax;
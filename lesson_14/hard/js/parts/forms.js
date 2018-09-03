    //Form 1
    let message = new Object();
    message.loading = 'Загрузка...';
    message.success = 'Завявка отправлена! Мы Вам перезвоним!';
    message.failure = 'Что-то пошло не так...';

    let messageIcon = new Object();
    messageIcon.loading = '<img style="width: 50px; " src="icons/time.svg" alt="time">';
    messageIcon.success = '<img style="width: 50px; " src="icons/paper-plane.svg" alt="paper-plane">';
    messageIcon.failure = '<img style="width: 50px; " src="icons/error.svg" alt="error">';

    let form = document.getElementsByClassName('main-form')[0];
    let input = form.getElementsByTagName('input');
    let statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    //Form 2
    let contactForm = document.getElementById('form');
    let inputContactForm = contactForm.getElementsByTagName('input');

    console.log(contactForm);

    contactForm.addEventListener('submit', function() {
        event.preventDefault();
        contactForm.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(form);
        request.send(formData);

        request.onreadystatechange = function() {
            if(request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if(request.readyState === 4) {
                if(request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = messageIcon.success + message.success;
                }
            } else {
                statusMessage.innerHTML = message.failure;
            }
        }

        for(let i = 0; i < inputContactForm.length; i++) {
            inputContactForm[i].value = '';
        }
    });

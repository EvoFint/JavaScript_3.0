$(document).ready(function() {
    $('.close').on('click', function() {
        modalAnimate();
        overlayToggle()
    });
    $('.main_btna').on('click', function() {
        $('.overlay').fadeToggle(function() {
            modalAnimate();
        });
    });
    $('.main_btn').on('click', function() {
        $('.overlay').fadeToggle(function() {
            modalAnimate();
        });
    });
    $('.menu_btn').on('click', function() {
        $('.overlay').fadeToggle(function() {
            modalAnimate();
        });
    });
    function overlayToggle() {
        $('.overlay').fadeToggle(1500);
    }
    function modalAnimate() {
        $('.modal').animate({
            opaciry: 'toggle',
            height: 'toggle'
        })
    };
    $('#main-form').submit(function(e) {
        e.preventDefault();
        const form = $(this);

        $.ajax({
            type: 'POST',
            url: 'server.php',
            data: form.serialize(),
            contentType: 'application/json',
            success: () => {
                alert('Данные успешно отправлены!');
            },
            error: () => {
                alert('Во время отправки возникла ошибка...');
            }
        });

        form[0].reset();
    });
});

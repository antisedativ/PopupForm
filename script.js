$(document).ready(function () {

    $('.popup').magnificPopup();


    $('#form').submit(function () {
        $.ajax({
            type: 'POST',
            url: 'server.php',
            data: $(this).serialize()
        }).done(function () {
            alert('Thank you!');
            setTimeout(function () {
                $.magnificPopup.close();
            }, 1000);
        });
    });
    return false;

});
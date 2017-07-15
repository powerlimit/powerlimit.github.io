$(function () {

    var paraTag = $('.contact-form #submit').parent('div');

    $(paraTag).children('button').remove();
    $(paraTag).append('<input  class="contact_button button btn btn-primary" type="button" name="submit" id="submit" value="Отправить сообщение" />');

    $('.contact-form #submit').click(function () {
        var firstName = $('input#firstName').val();
        var login = $('input#login').val();
        var email = $('input#email').val();
        var message = $('textarea#message').val();
        var subject = $('input#subject').val();
        if (firstName === '') {
            $('[name="firstName"]').addClass('vaidate_error');
        } else {
            $('[name="firstName"]').removeClass('vaidate_error');
        }
        if (login === '') {
            $('[name="login"]').addClass('vaidate_error');
        } else {
            $('[name="login"]').removeClass('vaidate_error');
        }
        if (login === '') {
            $('[name="email"]').addClass('vaidate_error');
        } else {
            $('[name="email"]').removeClass('vaidate_error');
        }
        if (message === "") {
            $('[name="message"]').addClass('vaidate_error');
        } else {
            $('[name="message"]').removeClass('vaidate_error');
        }
        if (subject === "") {
            $('[name="subject"]').addClass('vaidate_error');
        } else {
            $('[name="subject"]').removeClass('vaidate_error');
        }

        $.ajax({
            type: 'post',
            url: 'sendEmail.php',
            data: 'firstName=' + firstName + "&login=" + login + '&subject=' + subject + '&message=' + message + "&email=" + email,
            success: function (results) {
                $('div#response').html(results).css('display', 'block');

            }
        }); // end ajax
    });

});
		
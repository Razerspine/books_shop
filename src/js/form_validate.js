$(document).ready(function () {

    (function () {

        $(".b-form-comment").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                },
                message: "required"
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: "Name must be more three symbol"
                },
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of example@mail.com"
                },
                message: "Please write your comment"
            }
        });
    })();
});
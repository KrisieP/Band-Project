//The custom Jquery below was found here URL(https://github.com/AnoukSmet/Naturazy/blob/master/index.html)

$('#contact-form').submit(function (e) {
    e.preventDefault();
    $('#submitModal').modal('show');
    $('#contact-form')[0].reset();
});

$('#modal-form').submit(function (e) {
    e.preventDefault();
    $('#submitsubscription').modal('show');
    $('#modal-form')[0].reset();
});

$('.close-submit-modal').click(function (e) {
    e.preventDefault();
    $('#submitsubscription').modal('hide');
    $('#subscriptionmodalcenter').modal('hide');
});

//The custom Jquery below was found here URL(https://mdbootstrap.com/support/general/auto-close-navbar-when-click-on-link-responsive-mode/)-->

$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});
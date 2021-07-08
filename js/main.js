$(document).ready(function () {
    $('.burger').click(function () {
        $('.burger,.menu').toggleClass('active')
    });
    $('.link-menu').click(function () {
        $('.burger,.menu').removeClass('active')
    });
});
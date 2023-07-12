$(document).ready(function() {
    $('.carousel').carousel({
        interval: 2000
    });

    scrollToElement(window.location.hash || '#startup');

    $('.navigation--item').click(function(event) {
        scrollToElement($.attr(this, 'href'));
    });
});

function scrollToElement(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top - $('.header')[0].clientHeight
    }, 500);
}
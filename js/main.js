$(document).ready(function () {
    setTimeout(function () {
        $('.preloader').hide();
        new WOW({
            mobile: false,
        }).init();
        printTitle();
    }, 1000);


});
function printTitle() {
    let title = $('.main__title');
    let titletext = title.text().trim();
    title.html('');
    let i = 0;
    let int = setInterval(function () {

        title.html(title.html() + titletext[i]);
        i++;
        if (i >= titletext.length) {
            clearInterval(int);
        }
    }, 50);
}
if ($(window).width() <= 767) {
    $('.after').on('click', function () {
        $('.header').toggleClass('active');
    });
    $('.header__logo').html('<img src="' + $('.header__logo').attr('data-mob') + '">');
}
$(".home-portfolio__slider").slick({
    slide: ".home-portfolio__wrap",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".home-portfolio__prev",
    nextArrow: ".home-portfolio__next"
});

if (screen.width >= 1200) {
    let bg = $('.home-about .after');
    let bg2 = $('.home-brands .after');
    let bg3 = $('.home-modules .after');
    let bg4 = $('.home-portfolio .after');
    let bg5 = $('.main .before');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg.css('transform', 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)');
        bg2.css('transform', 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)');
        bg3.css('transform', 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)');
        bg4.css('transform', 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)');
        bg5.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');

    });
}
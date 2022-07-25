$(document).ready(function () {

    new WOW({
        mobile: false,
    }).init();
    if ($(window).width() >= 768) {
        printTitle();
    }



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
    $('.header .after').on('click', function () {
        $('.header').toggleClass('active');
    });
    $('.header__logo').html('<img src="' + $('.header__logo').attr('data-mob') + '">');
    $('.header__submenu > a').on('click', function (e) {
        e.preventDefault();
        $('.header__drop').toggle();
    });
}
if ($(window).width() <= 575) {
    $('.home-brands__wrap').slick({
        slide: ".home-brands__el",
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: ".home-brands__prev",
        nextArrow: ".home-brands__next"
    });
    var items = $('.home-modules__block'),
        per = 3,
        i = 1,
        total = 0;
    $('.home-modules__more').on('click', function (e) {
        e.preventDefault();
        total = per * (i++);
        items.slice(0, total).css('display', 'block');
        $(this)[total >= items.length ? 'hide' : 'show']();
    }).click();
}

$(".home-portfolio__slider").slick({
    slide: ".home-portfolio__wrap",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".home-portfolio__prev1",
    nextArrow: ".home-portfolio__next1"
});

if (screen.width >= 1200) {
    let bg = $('.home-about .after');
    let bg2 = $('.home-brands .after');
    let bg3 = $('.home-modules .after');
    let bg4 = $('.home-portfolio .after');
    let bg5 = $('.main .before');
    let bg6 = $('.polit__points');
    let bg7 = $('.cases__points');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg.css('transform', 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)');
        bg2.css('transform', 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)');
        bg3.css('transform', 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)');
        bg4.css('transform', 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)');
        bg5.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
        bg6.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
        bg7.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');

    });
}

$('.polit h2').on('click', function () {
    if ($(window).width() <= 575) {
        $(this).next('.polit__drop').toggle();
        $(this).toggleClass('active');
    }

});
$(document).ready(function () {
    $('.polit h1').next('h2').click();
});


function checkField(field) {
    if (field.attr('type') == 'email') {
        var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        var val = field.val();
        var valid = re.test(val);
        if (!valid) {
            field.addClass('err');
            field.next('.input__err').css('display', 'flex');
            return false;
        } else {
            field.removeClass('err');
            field.next('.input__err').css('display', 'none');
        }
    } else {
        var val = field.val();
        console.log(val.length);
        if (val.length > 0) {
            field.removeClass('err');
            field.next('.input__err').css('display', 'none');
            return true;
        } else {
            field.addClass('err');
            field.next('.input__err').css('display', 'flex');
            return false;
        }
    }
    return true;
}
function checkDemo() {
    let miss = 0;
    $('.demo input').each(function () {
        if (!checkField($(this))) {
            miss = 1;
        }
    });
    if (miss != 0) {
        return false;
    } else {
        return true;
    }
}
$(".demo input").on('input', function () {
    checkField($(this));
});
$(".demo form").submit(function (r) {
    if (!checkDemo()) return r.preventDefault();
    // return r.preventDefault(),
    //     $.ajax({
    //         type: "POST",
    //         url: "/mail/mail.php",
    //         data: $(this).serialize()
    //     }).done(function () {
    //         $(this).find("input").val(""),
    //             $("form.step1").find("input").val(""),
    //             changeActive(),
    //             $("form").trigger("reset")
    //     })
});
$(document).ready(function () {

    new WOW({
        mobile: false,
    }).init();
    if ($(window).width() >= 768) {

        $('video source').each(function () {
            $(this).attr('src', $(this).attr('data-desk'));

        });
        $('video').load();
    } else {
        $('video source').each(function () {
            $(this).attr('src', $(this).attr('data-mob'));

        });
        $('video').load();
    }



});
function printTitle() {
    let title = $('.main__title');
    $('.main__title').css('height', title.height());
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
$(window).scroll(function () {

    var target = $(this).scrollTop();

    if (target == 0) {

        $('.header').removeClass('scrolled');
        if ($(window).width() >= 768) {
            $('.header__logo').html('<img src="' + $('.header__logo').attr('data-des') + '">');
        }
    } else {

        $('.header').addClass('scrolled');
        $('.header__logo').html('<img src="' + $('.header__logo').attr('data-mob') + '">');

    }

});
if ($(window).width() <= 767) {
    $('.header .after').on('click', function () {
        $('.header').toggleClass('active');
        if ($('.header').hasClass('active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }

    });
    $('.header__logo').html('<img src="' + $('.header__logo').attr('data-mob') + '">');
    $('.header__submenu > a').on('click', function (e) {
        e.preventDefault();
        $('.header__drop').toggle();
        $(this).toggleClass('active');
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

// if (screen.width >= 1200) {
//     let bg = $('.home-about .after');
//     let bg2 = $('.home-brands .after');
//     let bg3 = $('.home-modules .after');
//     let bg4 = $('.home-portfolio .after');
//     let bg5 = $('.main .before');
//     let bg6 = $('.polit__points');
//     let bg7 = $('.cases__points');
//     window.addEventListener('mousemove', function (e) {
//         let x = e.clientX / window.innerWidth;
//         let y = e.clientY / window.innerHeight;
//         bg.css('transform', 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)');
//         bg2.css('transform', 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)');
//         bg3.css('transform', 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)');
//         bg4.css('transform', 'translate(-' + x * 100 + 'px, -' + y * 100 + 'px)');
//         bg5.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
//         bg6.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');
//         bg7.css('transform', 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)');

//     });
// }

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

    console.log(field)
    if (field.attr('type') == 'email') {
        var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        var val = field.val();
        var valid = re.test(val);
        if (!valid) {
            field.addClass('errr');
            field.next('.input__err').css('display', 'flex');
            return false;
        } else {
            field.removeClass('errr');
            field.next('.input__err').css('display', 'none');
        }
    } else {
        var val = field.val();
        console.log(val.length);
        if (val.length > 0) {
            field.removeClass('errr');
            field.next('.input__err').css('display', 'none');
            return true;
        } else {
            field.addClass('errr');
            field.next('.input__err').css('display', 'flex');
            return false;
        }
    }
    return true;
}
function checkDemo(form) {
    let miss = 0;
    console.log(form.find('input'))
    form.find('input').each(function () {
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
$(".demo__form input").on('input', function () {
    checkField($(this));
});
$(".blog-mail__form input").on('input', function () {
    checkField($(this));
});
$('.header__btn, .home-marketing__btn').not('.blog-mail__btn').on('click', function (e) {
    e.preventDefault();
    $('.overlay-call').addClass('overlay-active');
    $('body').css('overflow', 'hidden');
});
$('.popup-close').on('click', function (e) {
    $('body').css("overflow", "visible");
    $(this).closest('.overlay').removeClass('overlay-active');
});
$('.overlay-call').on('mousedown', function (e) {
    if (!(($(e.target).parents('.popup-wrap').length) || ($(e.target).hasClass('popup-wrap')))) {
        $('body').css("overflow", "visible");
        $('.overlay-call').removeClass('overlay-active');
    }
});
$(".demo form, .overlay form, .blog-mail form").submit(function (r) {
    checkDemo($(this));
    return r.preventDefault();
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
// let tosp = $('.article-soc').offset().top;
// let tosp2;
// if ($('.article-blog').length != 0) {
//     tosp2 = $('.article-blog').offset().top;
// } else {
//     tosp2 = $('.case-cases').offset().top;
// }
// $(window).on('scroll', function () {
//     if (screen.width >= 992) {
//         if (($(this).scrollTop() + $(window).height() - 300 > tosp) && ($(this).scrollTop() + $(window).height() < tosp2)) {
//             let x = $(this).scrollTop() + $(window).height() - 300 - tosp;
//             $('.article-soc').css('transform', 'translateY(' + x + 'px');
//         }
//     }
// });


$(document).on({
    mouseenter: function () {
        $(this).addClass('active');
        let num = $(this).index();
        if (num == 2) {
            num = 1;
        } else if (num == 1) {
            num = 2;
        }
        $('.predict-steps__descr').eq(num).addClass('active');
    },
    mouseleave: function () {
        $(this).removeClass('active');
        let num = $(this).index();
        if (num == 2) {
            num = 1;
        } else if (num == 1) {
            num = 2;
        }
        $('.predict-steps__descr').eq(num).removeClass('active');
    }
}, '.predict-steps__block');
if ($(window).width() <= 575) {
    $('.predict-steps__wrap').slick({
        slide: ".predict-steps__block",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: ".predict-steps__prev",
        nextArrow: ".predict-steps__next"
    });
    $('.cyber-stat__wrap').slick({
        slide: ".cyber-stat__block",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true,
        prevArrow: ".cyber-stat__prev",
        nextArrow: ".cyber-stat__next"
    });
}
$('.data-how__right').on('click', function () {
    $('.data-how__all').animate({ scrollLeft: document.querySelector('.data-how__all').scrollLeft + 250 }, 500);
});
$('.data-how__left').on('click', function () {
    $('.data-how__all').animate({ scrollLeft: document.querySelector('.data-how__all').scrollLeft - 250 }, 500);
});
$('.sh-scroll__right').on('click', function () {
    $(this).closest('section').find('.sh-scroll__all').animate({ scrollLeft: "+=" + 200 }, 500);
});
$('.sh-scroll__left').on('click', function () {
    $(this).closest('section').find('.sh-scroll__all').animate({ scrollLeft: "-=" + 200 }, 500);
});
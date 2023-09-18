

const colors = ['#A73B59', '#97AF8F', '#A63232', '#61648C', '#B22016', '#6CA097', '#2C5BA9', '#21819E', '#F4AEAD'];
const H1A = document.querySelector('h1 a');

const mainslide = new Swiper('.main_slide', {

    /*  effect: "fade",
      
       fadeEffect: {
           crossFade: true
       }, */
    loop: "infinite",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },

    slideActiveClass: 'on',

    on: {
        slideChangeTransitionStart: function (a, b, c) {
            console.log(a, this.realIndex);
            H1A.style.color = colors[this.realIndex]
        }
    }

})

$('.main').fullpage({
    anchors: ['intro', 'main_visual', 'main_Traning', 'main_Design', 'about'],
    css3: false,
    navigation: true,
    afterRender: function () {
        $('.main .section').eq(0).addClass('on')
    },
    afterLoad: function (lnk, idx) {
        console.log(lnk, idx);
        $('.main .section').eq(idx - 1).addClass('on').siblings().removeClass('on');
    },
})


$('.tabcontent > div').hide();
$('.tabnav a').click(function () {
    $('.tabcontent > div').hide().filter(this.hash).fadeIn();
    $('.tabnav a').removeClass('active');
    $(this).addClass('active');
    return false;
}).filter(':eq(0)').click();


$('.menu_icon').on('click', function () {
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
    $('.img_box').toggleClass('on');
    $('.header').toggleClass('on');

});


$('.gnb a').on('click', function () {
    $('.gnb').removeClass('on');
    $('.img_box').removeClass('on');
    $('.header').toggleClass('on');
})


const designSlide = new Swiper('.Design_slide', {
    centeredSlides: true,
    loop: true,
    parallax: true,
    roundLengths: true,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        },
    },

});

$('.main_Design .arrows .left').on('click', function () {
    designSlide.slidePrev();
});
$('.main_Design .arrows .right').on('click', function () {
    designSlide.slideNext();
});


$('.main_Design .box').on('click', function () {
    console.log($(this).index(), $(this).find('.img_box img').attr('src'));
    let img = $(this).find('.img_box img').attr('src');
    let close = $('<button class="btn">닫기</button>');
    let box = $('<div class="b_box">').append(`<img src=${img}>`).append(close);
    $('body').append(box);
});

$('body').on('click', '.b_box .btn', function () {
    console.log($(this));
    $(this).parent().addClass('on')
});
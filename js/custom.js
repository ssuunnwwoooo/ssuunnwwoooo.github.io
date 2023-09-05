document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
}


const colors = ['#A73B59', '#97AF8F', '#A63232', '#61648C', '#B22016', '#6CA097'];
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

    slideActiveClass: 'on',

    on: {
        slideChangeTransitionStart: function (a, b, c) {
            console.log(a, this.realIndex);
            H1A.style.color = colors[this.realIndex]
        }
    }

})

$('.main').fullpage({
    anchors: ['intro', 'main_visual', 'main_Traning', 'about'],
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




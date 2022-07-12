$(".hero .slider").slick({
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    rtl: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.prev-hero'),
    nextArrow: $('.next-hero'),
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});


// animation mousemove box
$(document).mousemove(rotateScene);
function rotateScene(e) {
    var horizontal = e.pageX / $(document).width();
    var vertical = e.pageY / $(document).height();
    $('.panel').css({
        '-webkit-transform': 'rotateX(' + (15 - (vertical * 30)) + 'deg) rotateY(' + (-10 + (horizontal * 20)) + 'deg)'
    });
}


////// responsive code

const ctaInfo = document.querySelector('.cta .info.panel')
if (screen.width < 768) {
    ctaInfo.classList.remove('panel')
} else {
    ctaInfo.classList.add('panel')
}
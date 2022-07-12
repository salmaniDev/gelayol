//   $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     // fade: true,
//     asNavFor: '.slider-nav',
//     infinite: true,
//     autoplay: false,
// });
// $('.slider-nav').slick({
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: false,
//     // centerMode: true,
//     focusOnSelect: true,
//     arrows: false,

// });
$('.show-product .slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.show-product .bottom-slider',
  // infinite: true,
  autoplay: false,
  prevArrow: $('.prev-hero'),
  nextArrow: $('.next-hero'),
  arrows: true,
  // slidesToShow: 1,
  // dots: false,
  // infinite: true,
  // cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  // slidesToScroll: 1,
  // rtl: true,
  // arrows: true,
  // fade: false,
  // asNavFor: '.show-product .bottom-slider'

});
$('.show-product .bottom-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.show-product .slider',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      arrows: false,
  // slidesToShow: 4,
  // slidesToScroll: 1,
  // asNavFor: '.show-product .slider',
  // dots: false,
  // arrows: false,
  // rtl: true,
  // centerMode: true,
  // speed: 400,
  // focusOnSelect: true,
  // centerPadding: '0px',
  // loop: true,
  // autoplay: false,
});


let productDescTitle = document.querySelectorAll('.product-description .head li')
let productDescInfo = document.querySelectorAll('.product-description .body .info')

productDescTitle.forEach((item) => {
  item.addEventListener('click', e => {
    productDescTitle.forEach((li) => {
      li.classList.remove('active')
    })
    let id = e.target.dataset.id
    e.target.classList.add('active')
    productDescInfo.forEach((info) => {
      info.classList.remove('active')
    })
    let element = document.getElementById(id)
    element.classList.add('active')
  })
})
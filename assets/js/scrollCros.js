
/////////scroll cross
const productsSlider = document.querySelectorAll('#scrollContainer')
for (let i = 0; i < productsSlider.length; i++) {
    productsSlider[i].addEventListener('wheel', (e) => {
        e.preventDefault();
        productsSlider[i].scrollLeft += e.deltaY;
    })
}
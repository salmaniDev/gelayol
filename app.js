//////focus input navbar
let navbarSearch = document.getElementById('navbarSearch')
window.addEventListener('load', () => {
    navbarSearch.focus();
})


//////////////////////// اکتیو شدن نوبار در هنگام اسکرول
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {

    if (window.pageYOffset > 100) {
        navbar.classList.add('active')
    }
    else {
        navbar.classList.remove('active')
    }
})


//////// active burgger menu

const burgger = document.getElementById('burgger')
let mobileMenu = document.getElementById('mobileMenu')

burgger.addEventListener('click', () => {
    burgger.classList.toggle('active')
    overlay.classList.toggle('active')
    overlay.style.zIndex = ("500")
    mobileMenu.classList.toggle('active')
})

///////////// activr filter drop down menu
let listFilterMenu = document.querySelectorAll("#filter-menu li")
let filterMenuInfo = document.querySelectorAll('#menuInfo .item')

listFilterMenu.forEach((list) => {
    list.addEventListener('click', e => {
        listFilterMenu.forEach((item) => {
            item.classList.remove('active')
        })
        const id = e.target.dataset.id
        e.target.classList.add('active')

        filterMenuInfo.forEach((info) => {
            info.classList.remove('active')
        })

        let element = document.getElementById(id)
        element.classList.add('active')
    })
})



//////// active drop down menu

let groupingBtn = document.getElementById('navbar-grouping')
let dropDownMenu = document.getElementById('dropdown-menu')
let overlay = document.getElementById('overlay')

groupingBtn.addEventListener('click', e => {
    dropDownMenu.classList.toggle('active')
    overlay.classList.toggle('active')
    e.target.classList.toggle('active')
    navbar.style.zIndex = ("505")
})

overlay.addEventListener('click', e => {
    dropDownMenu.classList.remove('active')
    groupingBtn.classList.remove('active')
    e.target.classList.remove('active')
    burgger.classList.remove('active')
    mobileMenu.classList.remove('active')
})
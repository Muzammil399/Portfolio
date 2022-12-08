console.log('project started on 5th of december 2022')
console.log('project ended on 8th december 2022')
alert('this website is not fully resposive made only for laptops and mobile screen size.')
const addEventOnElem = function (elem,type, callback) {
    if (elem.length > 1) {
        for(let i = 0; i<elem.length;i++) {
            elem[i].addEventListener(type,callback);
        }

    } else {
        elem.addEventListener(type,callback);
    }
}
const header = document.querySelector("[data-header]")
const logo = document.getElementById('logo')
const ribbon = document.getElementById('ribbon')
const activeElemOnScroll = function () {
    if (window.scrollY > 200) {
        header.classList.add("alternate")
        logo.classList.add("filter-remove")
        ribbon.classList.add('display-none')
    } else {
        header.classList.remove("alternate")
        logo.classList.remove("filter-remove")                
        logo.classList.remove("hidden")                
        ribbon.classList.remove('display-none')

    }
}
addEventOnElem(window,'scroll',activeElemOnScroll)
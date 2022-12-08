let mybutton = document.getElementById('navigation')
let mycontainer = document.getElementById('my-container')
let shadow = document.getElementById('shadow')
mybutton.addEventListener('click', function () {
    mycontainer.classList.toggle('toggler')
    shadow.classList.toggle('toggler')
})
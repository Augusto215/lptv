    

let navToggler = document.querySelector('.navbar-toggler')
let collapse = document.querySelector('.collapse')
let dropDown = document.querySelector('.dropdown-toggle')
let dropdownMenu = document.querySelector('.dropdown-menu')

navToggler.addEventListener('click', function()
{
collapse.classList.toggle('is-active')
})

dropDown.addEventListener('click', function()
{
dropdownMenu.classList.toggle('is-active')
})
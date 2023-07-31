
// Selecionando todos os botões
const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

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

$('#float-button').click(function() {
  $('#formModal').modal('show');
});



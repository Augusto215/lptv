
    var video = document.querySelector('.back-video');

    video.addEventListener('loadedmetadata', function() {
        this.currentTime = 60; // O tempo é definido em segundos, então 60 segundos = 1 minuto
    }, false);


    document.querySelectorAll('.contrate-a').forEach(function(el) {
        el.setAttribute('href', 'https://api.whatsapp.com/send?phone=5555199832779&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20IPTV!');
    });

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




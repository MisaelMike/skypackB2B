window.addEventListener('scroll', onScroll)

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  showWhatsappButtonFixed()  
}

function showNavOnScroll() {
  if (scrollY > 0) {
    let colocarClasse = document.querySelector("#navigation");
    colocarClasse.classList.add('scroll')
  } else {
    let retirarClasse = document.querySelector("#navigation");
    retirarClasse.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 600) {
    let colocarClasseBackToTopButton = document.querySelector(".backToTopButton");
    colocarClasseBackToTopButton.classList.add('show')
  } else {
    let retirarClasseBackToTopButton = document.querySelector(".backToTopButton");
    retirarClasseBackToTopButton.classList.remove('show')
  }
}

function showWhatsappButtonFixed() {
  if (scrollY > 600) {
    let colocarClasseBackToTopButton = document.querySelector(".WhatsappButtonFixed");
    colocarClasseBackToTopButton.classList.add('show')
  } else {
    let retirarClasseBackToTopButton = document.querySelector(".WhatsappButtonFixed");
    retirarClasseBackToTopButton.classList.remove('show')
  }
}

function openMenu() {
    // document.documentElement.scrollTop = 0; // Isso rolará a página para o topo
    document.body.classList.add("menu-expended")
}

function closeMenu() {
    document.body.classList.remove("menu-expended")
}

function adjustForAddressBar() {
  const contentElement = document.getElementById('navigation'); // 
  let addressBarHeight = window.innerHeight - document.documentElement.clientHeight;

  // Verificar se a barra de endereço está visível e ajustar a altura
  if (addressBarHeight > 0) {
    addressBarHeight = 0;
  }

  if (contentElement) {
    contentElement.style.marginTop = addressBarHeight + 'px';
    contentElement.style.marginLeft = 'auto';
    contentElement.style.marginRight = 'auto';
  }
}

function toggleContent() {
  var button = document.querySelector('.button-menu');
  if (window.innerWidth < 1024) {
    button.textContent = 'Fale com um especialista';
  } else {
    button.textContent = 'Contato';
  }
}

function updateContent() {
  if (window.innerWidth >= 1024) {
    toggleContent("Contato");
  } else {
      toggleContent("Fale com um especialista");
  }
  adjustForAddressBar();
}

function alterarDimensoesSVG() {
  if (window.innerWidth >= 1024) {
      var minhaDiv = document.querySelector('.abcSize');
      var meuSVG = minhaDiv.querySelector('svg');
      meuSVG.setAttribute('width', '700');
      meuSVG.setAttribute('height', '280');
  } else {
      var minhaDiv = document.querySelector('.abcSize');
      var meuSVG = minhaDiv.querySelector('svg');
      meuSVG.setAttribute('width', '315');
      meuSVG.setAttribute('height', '203');
  }
}

function toggleAndAdjust() {
  toggleContent();
  updateContent();
  alterarDimensoesSVG();
  onScroll()
}

window.addEventListener('resize', toggleAndAdjust);
document.addEventListener('DOMContentLoaded', toggleAndAdjust);

document.querySelectorAll('.scroll-link').forEach(element => {
  element.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
          const yOffset = -100;
          const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
          
          window.scrollTo({ top: y, behavior: 'smooth' });
      }
  });
});

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
}).reveal(`#home,
#home img,
.botao-whats-cell,
.sobre-show,
.sobre-celular-info,
.abc,
.colA,
.contato-reveal,
.button-contact,
.img-portfolio-celular,
.legenda,
.contato-cel,
.infos,
.logo-footer,
.social-links-footer`);
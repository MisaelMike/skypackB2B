function onScroll() {
    if (scrollY > 0) {
        let colocarClasse = document.querySelector("#navigation");
        colocarClasse.classList.add('scroll')
    } else {
        let retirarClasse = document.querySelector("#navigation");
        retirarClasse.classList.remove('scroll')
    }
}

function openMenu() {
    document.body.classList.add("menu-expended")
}

function closeMenu() {
    document.body.classList.remove("menu-expended")
}

function adjustForAddressBar() {
  const contentElement = document.getElementById('navigation'); // Substitua 'navigation' pelo ID do elemento de conteúdo
  const addressBarHeight = window.innerHeight - document.documentElement.clientHeight;

  if (contentElement) {
    contentElement.style.marginTop = addressBarHeight + 'px';
    contentElement.style.marginLeft = 'auto';
    contentElement.style.marginRight = 'auto';
  }
}

// Chame a função inicialmente e sempre que a janela for redimensionada
adjustForAddressBar();
window.addEventListener('resize', adjustForAddressBar);

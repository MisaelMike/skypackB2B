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
  let addressBarHeight = window.innerHeight - document.documentElement.clientHeight;

  if (contentElement) {
    contentElement.style.marginTop = addressBarHeight + 'px';
    contentElement.style.marginLeft = 'auto';
    contentElement.style.marginRight = 'auto';
  }

  window.addEventListener('resize', () => {
    // Atualizar addressBarHeight quando a janela é redimensionada
    addressBarHeight = window.innerHeight - document.documentElement.clientHeight;
    adjustForAddressBar();
  });

  window.addEventListener('scroll', () => {
    // Atualizar addressBarHeight quando a página é rolada
    addressBarHeight = window.innerHeight - document.documentElement.clientHeight;
    adjustForAddressBar();
  });
}

// Chame a função inicialmente
adjustForAddressBar();

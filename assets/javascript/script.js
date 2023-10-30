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

// Chame a função inicialmente e sempre que a janela for redimensionada
adjustForAddressBar();
window.addEventListener('resize', adjustForAddressBar);

////////////////////////////////////////////////////////////////////////////////////////////////

function ajustarMargemDireita() {
  // Obtém a largura da barra de rolagem do navegador
  var larguraBarraRolagem = window.innerWidth - document.documentElement.clientWidth;

  // Define a margem direita do elemento com base na largura da barra de rolagem
  var elemento = document.getElementById("teste");
  elemento.style.marginRight = larguraBarraRolagem + "px";
}

// Chame a função ao carregar a página
window.onload = ajustarMargemDireita;

// Chame a função sempre que a janela for redimensionada
window.onresize = ajustarMargemDireita;

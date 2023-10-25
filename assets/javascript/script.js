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

window.addEventListener('resize', function() {
    adjustMarginTop();
  });
  
  window.addEventListener('scroll', function() {
    adjustMarginTop();
  });
  
  function adjustMarginTop() {
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.clientHeight;
    var addressBarHeight = windowHeight - documentHeight;
  
    // Defina uma margem superior no elemento principal do conteúdo
    var contentElement = document.getElementById('#navigation'); // Substitua 'seu-conteudo' pelo ID do elemento de conteúdo
    if (contentElement) {
      contentElement.style.marginTop = addressBarHeight + 'px';
    }
  }
  
  // Chame a função inicialmente para configurar a margem corretamente
  adjustMarginTop();
  
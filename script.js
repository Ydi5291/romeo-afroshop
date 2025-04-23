
  // Fonction pour ouvrir/fermer le menu
  document.addEventListener("DOMContentLoaded", function () {
    // Le menu burger est prêt quand le DOM est chargé
    window.toggleMenu = function () {
      const menu = document.getElementById('nav-menu').querySelector('ul');
      menu.classList.toggle('show');
    };
  });
  

  

 function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const panel = document.getElementById('mobile-menu-panel');

    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      setTimeout(() => {
        panel.classList.remove('translate-x-full');
      }, 10); // petit délai pour déclencher l’animation
    } else {
      panel.classList.add('translate-x-full');
      setTimeout(() => {
        menu.classList.add('hidden');
      }, 300); // attendre que l’animation se termine
    }
  }
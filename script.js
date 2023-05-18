document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const content = document.querySelector('.content');

  let isMobileMenuVisible = false;

  mobileMenuButton.addEventListener('click', function() {
    isMobileMenuVisible = !isMobileMenuVisible;

    if (isMobileMenuVisible) {
      showMobileMenu();
    } else {
      hideMobileMenu();
    }
  });

  content.addEventListener('click', function(event) {
    if (isMobileMenuVisible && !mobileMenu.contains(event.target)) {
      hideMobileMenu();
    }
  });

  function showMobileMenu() {
    mobileMenu.style.display = 'block';
    mobileMenu.style.transform = 'translateX(-100%)';
    requestAnimationFrame(function() {
      mobileMenu.style.transform = 'translateX(0)';
    });
  }

  function hideMobileMenu() {
    mobileMenu.style.transform = 'translateX(-100%)';
    mobileMenu.addEventListener('transitionend', function onTransitionEnd() {
      mobileMenu.style.display = 'none';
      mobileMenu.removeEventListener('transitionend', onTransitionEnd);
    });
    isMobileMenuVisible = false;
  }
});

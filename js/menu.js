(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector(' [data-menu]');
  const body = document.querySelector('body');
  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    body.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('artia-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  });
})();

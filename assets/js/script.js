document.querySelectorAll('.menu-toggle').forEach((toggle) => {
  const menu = document.getElementById(toggle.getAttribute('aria-controls'));
  if (!menu) return;
  const menuIcon = toggle.querySelector('img');
  const hamburgerIcon = menuIcon?.getAttribute('src');

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Åbn menu');
    if (menuIcon && hamburgerIcon) menuIcon.setAttribute('src', hamburgerIcon);
    menu.hidden = true;
    document.body.classList.remove('menu-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Åbn menu' : 'Luk menu');
    if (menuIcon && hamburgerIcon) menuIcon.setAttribute('src', isOpen ? hamburgerIcon : 'assets/images/menu-close.png');
    menu.hidden = isOpen;
    document.body.classList.toggle('menu-open', !isOpen);
  });

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
});

document.querySelectorAll('form[data-static-form]').forEach((form) => {
  form.addEventListener('submit', (event) => event.preventDefault());
});

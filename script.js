document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const body = document.body;

  if (burger && nav) {
    burger.addEventListener('click', function () {
      nav.classList.toggle('open');
      body.classList.toggle('menu-open', nav.classList.contains('open'));
    });
    // Закрытие меню по клику на ссылку (для мобильных)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        body.classList.remove('menu-open');
      });
    });
    // Закрытие по клику вне панели
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open')) {
        const panel = nav.querySelector('.nav__panel');
        if (!panel.contains(e.target) && !burger.contains(e.target)) {
          nav.classList.remove('open');
          body.classList.remove('menu-open');
        }
      }
    });
  }
}); 
document.addEventListener('DOMContentLoaded', function() {
    // Находим элементы
    var burger = document.getElementById('burger');
    var menu = document.getElementById('menuOverlay');
    var closeBtn = document.getElementById('menuClose');
    var body = document.body;
    
    // Проверяем, что элементы найдены
    console.log('Бургер:', burger);
    console.log('Меню:', menu);
    
    // Открытие меню
    if (burger && menu) {
        burger.onclick = function() {
            menu.classList.add('active');
            body.style.overflow = 'hidden';
            console.log('Меню открыто');
        };
    }
    
    // Закрытие по крестику
    if (closeBtn && menu) {
        closeBtn.onclick = function() {
            menu.classList.remove('active');
            body.style.overflow = '';
            console.log('Меню закрыто');
        };
    }
    
    // Закрытие по клику на фон
    if (menu) {
        menu.onclick = function(e) {
            if (e.target === menu) {
                menu.classList.remove('active');
                body.style.overflow = '';
            }
        };
    }
    
    // Закрытие по ссылкам
    var links = document.querySelectorAll('.menu-nav a');
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            menu.classList.remove('active');
            body.style.overflow = '';
        };
    }
});
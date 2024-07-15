document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu-nav');
    const subMenu = document.querySelector('.top-page-part-sub-menu');

    menu.addEventListener('click', function () {
        if (subMenu.style.display === 'flex') {
            subMenu.style.display = 'none';
        } else {
            subMenu.style.display = 'flex';
            subMenu.style.flexDirection = 'column';
            subMenu.style.justifyContent = 'end';
            subMenu.style.alignItems = 'start';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-nav');
    const subMenu = document.querySelector('.mobile-sub-menu');
    const header = document.querySelector('header');

    function checkScreenSize() {
        if (window.innerWidth > 768) {
            subMenu.classList.remove('show');
        }
    }

    menuBtn.addEventListener('click', function () {
        if (window.innerWidth <= 768) {
            subMenu.classList.toggle('show');
            if (subMenu.classList.contains('show')) {
                header.insertAdjacentElement('afterend', subMenu);
            }
        }
    });

    subMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            subMenu.classList.remove('show');
        });
    });

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
});
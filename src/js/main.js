// MENU SLIDE BORDER
const menuSection1 = document.getElementById(menu-section1);
const menuSection2 = document.getElementById(menu-section2);

menuSection1.addEventListener('click', function() {
    menuSection1.classList.add('menu-title_active');
    menuSection2.classList.remove('menu-title_active');
})

document.addEventListener("DOMContentLoaded", () => {
    const menuTab = document.querySelector('.menu-tab');
    const menu = document.querySelector('.menu');
    const tempMenu = document.querySelector('.temp-menu')

    if(!menuTab || !menu) {
        console.error("Cannot find .menu-tab or .menu element");
        return;
    }

    menuTab.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
        tempMenu.style.display = tempMenu.style.display === 'none' ? 'block' : 'none';
    });
});
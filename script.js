
document.addEventListener("DOMContentLoaded", () => {
    const menuTab = document.querySelector('.menu-tab');
    const tabHandle = document.querySelector('.tab-handle')
    const menuLabel = document.querySelector('.menu-label');

    tabHandle.addEventListener("click", () => {
        menuTab.classList.toggle("expanded");
        tabHandle.classList.toggle("expanded");

        if(tabHandle.classList.contains('expanded')) {
            menuLabel.textContent = "menu.";
        }
        else {
            menuLabel.textContent ="menu?";
        }
    });
});
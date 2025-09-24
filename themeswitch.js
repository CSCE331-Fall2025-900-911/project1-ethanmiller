document.addEventListener("DOMContentLoaded", () => {
    // Get the theme <link> and checkbox if they exist
    const themeLink = document.getElementById('theme-link');
    const styleSwitch = document.getElementById('style-switch');

    if (!themeLink || !styleSwitch) {
        // If either element is missing, do nothing
        return;
    }

    function setTheme(theme) {
        themeLink.href = theme;
        localStorage.setItem('selectedTheme', theme);
    }

    // Load previously saved theme from localStorage
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        themeLink.href = savedTheme;
        styleSwitch.checked = (savedTheme === 'saucestyle.css');
    }

    // Listen for toggle changes
    styleSwitch.addEventListener('change', () => {
        if (styleSwitch.checked) {
            setTheme('saucestyle.css');
        } else {
            setTheme('moonstyle.css');
        }
    });
});
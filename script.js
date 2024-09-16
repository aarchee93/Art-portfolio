// script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
        themeToggleButton.textContent = '☀️';
    } else {
        document.documentElement.classList.remove('dark');
        themeToggleButton.textContent = '🌙';
    }

    themeToggleButton.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            themeToggleButton.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            themeToggleButton.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    });
});

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const modeButton = document.querySelector('.mode-toggle');
    if (document.body.classList.contains('dark-mode')) {
        modeButton.textContent = '🌙 Switch to Light Mode';
    } else {
        modeButton.textContent = '🌙 Switch to Dark Mode';
    }
}
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

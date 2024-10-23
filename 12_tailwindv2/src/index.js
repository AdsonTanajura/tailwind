const btn = document.getElementById('dark-mode');
const html = document.querySelector('html');

btn.addEventListener('click', () => {
    html.classList.toggle('dark');
});
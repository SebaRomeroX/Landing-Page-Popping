const navItems = document.querySelectorAll('.nav-item');
const contentItems = document.querySelectorAll('.content-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));    // Active solo el seleccionado
        item.classList.add('active');

        contentItems.forEach(content => content.classList.remove('visible'));

        const targetContent = document.getElementById(item.getAttribute('data-target'));    // Oculta todos, muestra target
        targetContent.classList.add('visible');
    });
});

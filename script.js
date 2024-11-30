// Funcion para desplegar barra lateral
function toggleSection(id) {
    const section = document.getElementById(id);
    const box = document.querySelector(`#${id} ~ .box`);
    const isMobile = window.innerWidth <= 768;

    if (section.classList.contains('oculto')) {
        section.classList.remove('oculto');
        section.style.display = isMobile ? 'flex' : 'flex'; // Ajusta para movil
        box.setAttribute('aria-expanded', 'true');
    } else {
        section.classList.add('oculto');
        section.style.display = 'none';
        box.setAttribute('aria-expanded', 'false');
    }
}



// Responsive para movil
window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = window.innerWidth > 768 ? 'block' : 'none';
});

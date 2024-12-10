// Función para mostrar la sección activa
function showSection(sectionId) {
    // Primero, ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

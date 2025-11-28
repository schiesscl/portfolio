// Esperar a que el DOM esté completamente cargado
$(document).ready(function() {

    // 1. Activar Tooltips (Versión JQuery)
    $('[data-bs-toggle="tooltip"]').tooltip();
    
    // --- Lógica del Selector de Temas ---
    const body = $('body');
    const btnDefault = $('#btn-theme-default');
    const btnAlt = $('#btn-theme-alt');

    // Función única para cambiar el tema visualmente
    function setThemeState(themeName) {
        if (themeName === 'alternative') {
            body.addClass('theme-alternative');
            btnAlt.addClass('active');
            btnDefault.removeClass('active');
        } else {
            body.removeClass('theme-alternative');
            btnDefault.addClass('active');
            btnAlt.removeClass('active');
        }
    }

    // Cargar tema guardado al iniciar (Persistencia)
    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme) {
        setThemeState(savedTheme);
    }

    // Eventos de clic (Guardar y Aplicar)
    btnDefault.click(function() {
        setThemeState('default');
        localStorage.setItem('portfolioTheme', 'default');
    });

    btnAlt.click(function() {
        setThemeState('alternative');
        localStorage.setItem('portfolioTheme', 'alternative');
    });

// ------------------------------------

    // Validación del formulario
    $("#form-contacto").submit(function(event) {
        // Usamos .val() de JQuery para obtener valores
        // CAMBIO: Usamos 'const' en lugar de 'var'
        const nombre = $("#contacto-nombre").val();
        const asunto = $("#contacto-asunto").val();
        const mensaje = $("#contacto-mensaje").val();
        
        // Validación básica
        if (nombre.length < 8 || asunto.length < 8 || mensaje.length < 15) {
            event.preventDefault();
            alert("Por favor revisa los campos:\n- Nombre: mínimo 8 caracteres\n- Asunto: mínimo 8 caracteres\n- Mensaje: mínimo 15 caracteres");
            return false;
        }
        return true;
    });
// filepath: d:\Portafolio\portfolio\assets\js\script.js
// ...existing code...
    // ------------------------------------

    // Validación del formulario
    $("#form-contacto").submit(function(event) {
        // Usamos .val() de JQuery para obtener valores
        // CAMBIO: Usamos 'const' en lugar de 'var'
        const nombre = $("#contacto-nombre").val();
        const asunto = $("#contacto-asunto").val();
        const mensaje = $("#contacto-mensaje").val();
        
        // Validación básica
        if (nombre.length < 8 || asunto.length < 8 || mensaje.length < 15) {
            event.preventDefault();
            alert("Por favor revisa los campos:\n- Nombre: mínimo 8 caracteres\n- Asunto: mínimo 8 caracteres\n- Mensaje: mínimo 15 caracteres");
            return false;
        }
        return true;
    });
});
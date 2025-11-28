//Activar Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Esperar a que el DOM esté completamente cargado
$(document).ready(function() {
    
    // --- Lógica del Selector de Temas (Mejorada) ---
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

    // 1. Cargar tema guardado al iniciar (Persistencia)
    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme) {
        setThemeState(savedTheme);
    }

    // 2. Eventos de clic (Guardar y Aplicar)
    btnDefault.click(function() {
        setThemeState('default');
        localStorage.setItem('portfolioTheme', 'default');
    });

    btnAlt.click(function() {
        setThemeState('alternative');
        localStorage.setItem('portfolioTheme', 'alternative');
    });
    // ------------------------------------

    // Capturar formulario
    const formContacto = $("#form-contacto");

    // Validación del formulario
    $("#form-contacto").submit(function(event) {
        var nombre = $("#contacto-nombre").val();
        var asunto = $("#contacto-asunto").val();
        var mensaje = $("#contacto-mensaje").val();
        
        // Validación básica
        if (nombre.length < 8 || asunto.length < 8 || mensaje.length < 15) {
            event.preventDefault();
            alert("Por favor revisa los campos:\n- Nombre: mínimo 8 caracteres\n- Asunto: mínimo 8 caracteres\n- Mensaje: mínimo 15 caracteres");
            return false;
        }
        return true;
    });
});
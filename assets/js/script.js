//Activar Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Esperar a que el DOM esté completamente cargado
$(document).ready(function() {
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
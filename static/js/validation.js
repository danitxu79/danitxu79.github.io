document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Validate Name
        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === '') {
            isValid = false;
            alert('Por favor, introduce tu nombre.');
        }

        // Validate Email
        const emailInput = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            isValid = false;
            alert('Por favor, introduce un correo electrónico válido.');
        }

        // Validate Message
        const messageInput = document.getElementById('message');
        if (messageInput.value.trim() === '') {
            isValid = false;
            alert('Por favor, escribe un mensaje.');
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});

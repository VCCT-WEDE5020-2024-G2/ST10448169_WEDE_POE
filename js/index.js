document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const messageField = document.getElementById('message');
            let valid = true;

            if (nameField.value.trim() === '') {
                alert('Name is required!');
                valid = false;
            }

            if (emailField.value.trim() === '') {
                alert('Email is required!');
                valid = false;
            }

            // Basic email format validation
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!emailPattern.test(emailField.value.trim())) {
                alert('Please enter a valid email address!');
                valid = false;
            }

            if (messageField.value.trim() === '') {
                alert('Message cannot be empty!');
                valid = false;
            }

            if (!valid) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });
    }

    const openModalBtn = document.getElementById('openNewsletterModal');
    const closeModalBtn = document.getElementById('closeNewsletterModal');
    const modal = document.getElementById('newsletterModal');

    if (openModalBtn && closeModalBtn && modal) {
        openModalBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

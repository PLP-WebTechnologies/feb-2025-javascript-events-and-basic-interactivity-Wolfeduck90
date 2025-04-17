// Form Validation
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const contactInput = document.getElementById('contact');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate all fields
    if (
        nameInput.value.trim() === "" ||
        surnameInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        passwordInput.value.trim() === "" ||
        contactInput.value.trim() === "" ||
        passwordInput.value.length < 8 ||
        !/[A-Z]/.test(passwordInput.value) ||
        !/[a-z]/.test(passwordInput.value) ||
        !/[0-9]/.test(passwordInput.value) ||
        !/[^A-Za-z0-9]/.test(passwordInput.value)
    ) {
        errorMessage.classList.remove('hidden'); // Show error message
    } else {
        errorMessage.classList.add('hidden'); // Hide error message
        alert(`Welcome, ${nameInput.value} ${surnameInput.value}!`);
    }
});

// Toggle Visibility
const toggleInfoButton = document.getElementById('toggleInfoButton');
const infoSection = document.getElementById('infoSection');

toggleInfoButton.addEventListener('click', function () {
    infoSection.classList.toggle('hidden');
});

// Counter
const counterButton = document.getElementById('counterButton');
const counterDisplay = document.getElementById('counter');
let count = 0;

counterButton.addEventListener('click', function () {
    count += 1;
    counterDisplay.textContent = count;
});
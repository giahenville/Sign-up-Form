//animation
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".transform");
    container.classList.remove("translate-y-full");
});

const passwordConfirm = () => {
    let password = document.getElementById('password').value;
    let confirmPasswordInput = document.getElementById('password_confirm');
    let confirmPassword = confirmPasswordInput.value;

    if (password === confirmPassword) {
        confirmPasswordInput.style.border = '1px solid rgb(34 197 94 / var(--tw-border-opacity))';
        confirmPasswordInput.setCustomValidity(''); // Reset custom validity message
    } else {
        confirmPasswordInput.style.border = '1px solid rgb(239 68 68 / var(--tw-border-opacity))';
        confirmPasswordInput.setCustomValidity('Passwords do not match.')
    }
}

let formInputs = document.querySelectorAll('.rounded-sm');

const borderColors = () => {
    formInputs.forEach((input) => {
        if (input.value === "") {
            input.style.border = '1px solid #F5F5F5';
        } else if (input.checkValidity()) {
            input.style.border = '1px solid rgb(34 197 94 / var(--tw-border-opacity))';
        } else {
            input.style.border = '1px solid rgb(239 68 68 / var(--tw-border-opacity))';
        }
    });
};

borderColors();
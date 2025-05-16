document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const cpfInput = document.getElementById('cpf');
    const birthdateInput = document.getElementById('birthdate');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const errorMessageDiv = document.getElementById('signupErrorMessage');

    if (birthdateInput) {
        const setInitialBirthdateType = () => {
            if (!birthdateInput.value) {
                birthdateInput.type = 'text';
            } else {
                birthdateInput.type = 'date';
            }
        };

        birthdateInput.addEventListener('focus', function() {
            this.type = 'date';
        });

        birthdateInput.addEventListener('blur', function() {
            setInitialBirthdateType();
        });

        setInitialBirthdateType();
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            clearErrorMessage();

            const cpf = cpfInput.value.trim();
            const birthdate = birthdateInput.type === 'date' ? birthdateInput.value : (birthdateInput.value.trim() !== '' ? birthdateInput.value : '');
            const password = passwordInput.value.trim();
            const confirmPassword = confirmPasswordInput.value.trim();

            if (cpf === '') {
                displayErrorMessage('Por favor, digite seu CPF.');
                cpfInput.focus();
                return;
            }

            if (birthdate === '') {
                displayErrorMessage('Por favor, digite sua data de nascimento.');
                birthdateInput.focus();
                return;
            }

            if (password === '') {
                displayErrorMessage('Por favor, digite sua senha.');
                passwordInput.focus();
                return;
            }

            if (password.length < 6) {
                displayErrorMessage('A senha deve ter pelo menos 6 caracteres.');
                passwordInput.focus();
                return;
            }

            if (confirmPassword === '') {
                displayErrorMessage('Por favor, confirme sua senha.');
                confirmPasswordInput.focus();
                return;
            }

            if (password !== confirmPassword) {
                displayErrorMessage('As senhas não coincidem.');
                confirmPasswordInput.focus();
                return;
            }

            console.log('Tentativa de cadastro com:', { cpf, birthdate, password });
            displayLoadingMessage('Processando cadastro...');

            setTimeout(() => {
                alert('Cadastro realizado com sucesso! (Funcionalidade mockada). Você já pode fazer login.');
                clearErrorMessage();
                window.location.href = 'login.html';
            }, 1500);
        });
    }

    if(cpfInput) cpfInput.addEventListener('input', clearErrorMessage);
    if(birthdateInput) birthdateInput.addEventListener('input', clearErrorMessage);
    if(passwordInput) passwordInput.addEventListener('input', clearErrorMessage);
    if(confirmPasswordInput) confirmPasswordInput.addEventListener('input', clearErrorMessage);

    function displayErrorMessage(message) {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.display = 'block';
    }

    function displayLoadingMessage(message) {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.color = '#555';
        errorMessageDiv.style.display = 'block';
    }

    function clearErrorMessage() {
        if (errorMessageDiv) {
            errorMessageDiv.textContent = '';
            errorMessageDiv.style.display = 'none';
            errorMessageDiv.style.color = '#D32F2F';
        }
    }
});
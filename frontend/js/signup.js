document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const cpfInput = document.getElementById('cpf');
    const birthdateInput = document.getElementById('birthdate');
    const errorMessageDiv = document.getElementById('signupErrorMessage');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            clearErrorMessage();

            const cpf = cpfInput.value.trim();
            const birthdate = birthdateInput.value.trim();

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

            console.log('Tentativa de cadastro com:', { cpf, birthdate });
            displayLoadingMessage('Processando cadastro...');

            setTimeout(() => {
                // Simulação de lógica de backend
                // Aqui você poderia adicionar uma verificação mockada
                // Por exemplo, se um CPF específico já existe ou se a data é válida

                // Exemplo de sucesso mockado:
                alert('Cadastro solicitado! (Funcionalidade mockada). Em um cenário real, você receberia um e-mail ou SMS para continuar.');
                clearErrorMessage();
                // Poderia redirecionar para login ou uma tela de "verifique seu email"
                // window.location.href = 'login.html';

                // Exemplo de erro mockado:
                // displayErrorMessage('CPF já cadastrado ou dados inválidos.');

            }, 1500);
        });
    }

    cpfInput.addEventListener('input', clearErrorMessage);
    birthdateInput.addEventListener('input', clearErrorMessage);

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
        errorMessageDiv.textContent = '';
        errorMessageDiv.style.display = 'none';
        errorMessageDiv.style.color = '#D32F2F';
    }
});
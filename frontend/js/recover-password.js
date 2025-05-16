document.addEventListener('DOMContentLoaded', function() {
    const recoverPasswordForm = document.getElementById('recoverPasswordForm');
    const cpfInput = document.getElementById('cpf');
    const birthdateInput = document.getElementById('birthdate');
    const sendByEmailBtn = document.getElementById('sendByEmailBtn');
    const sendBySmsBtn = document.getElementById('sendBySmsBtn');
    const errorMessageDiv = document.getElementById('recoverErrorMessage');

    function validateInputs() {
        clearErrorMessage();
        const cpf = cpfInput.value.trim();
        const birthdate = birthdateInput.value.trim();

        if (cpf === '') {
            displayErrorMessage('Por favor, digite seu CPF.');
            cpfInput.focus();
            return false;
        }

        if (birthdate === '') {
            displayErrorMessage('Por favor, digite sua data de nascimento.');
            birthdateInput.focus();
            return false;
        }
        return { cpf, birthdate };
    }

    if (sendByEmailBtn) {
        sendByEmailBtn.addEventListener('click', function() {
            const validationResult = validateInputs();
            if (!validationResult) return;

            const { cpf, birthdate } = validationResult;
            console.log('Solicitação de recuperação por Email para:', { cpf, birthdate });
            displayLoadingMessage('Enviando solicitação por Email...');

            setTimeout(() => {
                // Simulação de lógica de backend para envio por email
                alert('Um link para redefinição de senha foi enviado para o seu e-mail cadastrado. (Mockado)');
                clearErrorMessage();
            }, 1500);
        });
    }

    if (sendBySmsBtn) {
        sendBySmsBtn.addEventListener('click', function() {
            const validationResult = validateInputs();
            if (!validationResult) return;

            const { cpf, birthdate } = validationResult;
            console.log('Solicitação de recuperação por SMS para:', { cpf, birthdate });
            displayLoadingMessage('Enviando solicitação por SMS...');

            setTimeout(() => {
                // Simulação de lógica de backend para envio por SMS
                alert('Um código para redefinição de senha foi enviado para o seu celular cadastrado. (Mockado)');
                clearErrorMessage();
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
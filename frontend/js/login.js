document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const cpfInput = document.getElementById('cpf');
    const passwordInput = document.getElementById('password');
    const errorMessageDiv = document.getElementById('errorMessage');

    // Limpa a mensagem de erro ao digitar nos campos
    cpfInput.addEventListener('input', clearErrorMessage);
    passwordInput.addEventListener('input', clearErrorMessage);

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        clearErrorMessage(); // Limpa mensagens de erro anteriores

        const cpf = cpfInput.value.trim();
        const password = passwordInput.value.trim();

        // Validação básica de campos vazios
        if (cpf === '') {
            displayErrorMessage('Por favor, digite seu CPF.');
            cpfInput.focus();
            return;
        }

        if (password === '') {
            displayErrorMessage('Por favor, digite sua senha.');
            passwordInput.focus();
            return;
        }

        // Lógica de autenticação MOCKADA (Pessoa 2 implementará o "backend" disso)
        // Para este MVP, vamos usar credenciais fixas
        const MOCK_CPF = "12345678900"; // Exemplo de CPF válido
        const MOCK_PASSWORD = "password123"; // Exemplo de senha válida

        console.log('Tentativa de login com:', { cpf, password }); // Para depuração

        // Simula uma pequena demora da API
        displayLoadingMessage('Autenticando...');

        setTimeout(() => {
            if (cpf === MOCK_CPF && password === MOCK_PASSWORD) {
                // Sucesso no login
                clearErrorMessage();
                alert('Login bem-sucedido! Redirecionando...'); // Feedback temporário
                // Redirecionar para a tela principal placeholder
                window.location.href = 'home.html'; // Crie um home.html simples
            } else {
                // Falha no login
                displayErrorMessage('Usuário ou senha inválidos.');
            }
        }, 1000); // Simula 1 segundo de espera
    });

    function displayErrorMessage(message) {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.display = 'block'; // Garante que está visível
    }

    function displayLoadingMessage(message) {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.color = '#555'; // Cor diferente para loading
        errorMessageDiv.style.display = 'block';
    }

    function clearErrorMessage() {
        errorMessageDiv.textContent = '';
        errorMessageDiv.style.display = 'none'; // Esconde o container
        errorMessageDiv.style.color = '#D32F2F'; // Reseta a cor para erro padrão
    }

    // Adiciona funcionalidade básica para os outros botões (apenas visual no MVP)
    const biometricButton = document.querySelector('.btn-secondary');
    if (biometricButton) {
        biometricButton.addEventListener('click', () => {
            alert('Funcionalidade "Entrar com biometria" ainda não implementada neste MVP.');
        });
    }

    const forgotPasswordLink = document.querySelector('.forgot-password');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Funcionalidade "Esqueci minha senha" ainda não implementada neste MVP.');
        });
    }

    const signupLink = document.querySelector('.signup-link a');
    if (signupLink) {
        signupLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Funcionalidade "Cadastre-se" ainda não implementada neste MVP.');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const cpfInput = document.getElementById('cpf');
    const passwordInput = document.getElementById('password');
    const errorMessageDiv = document.getElementById('errorMessage');
    const rememberMeCheckbox = document.getElementById('remember');

    // Constantes para gerenciamento de sessão
    const SESSION_DURATION = 30 * 1000; // 30 segundos em milissegundos (apenas para teste)
    // const SESSION_DURATION = 30 * 24 * 60 * 60 * 1000; // 30 dias em milissegundos (produção)
    const STORAGE_KEYS = {
        CREDENTIALS: 'promedica_credentials',
        SESSION_EXPIRY: 'promedica_session_expiry'
    };

    // Verifica sessão existente ao carregar a página
    checkExistingSession();

    // Limpa a mensagem de erro ao digitar nos campos
    cpfInput.addEventListener('input', clearErrorMessage);
    passwordInput.addEventListener('input', clearErrorMessage);

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        clearErrorMessage();

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
        const MOCK_CPF = "12345678900";
        const MOCK_PASSWORD = "password123";

        console.log('Tentativa de login com:', { cpf, password });

        displayLoadingMessage('Autenticando...');

        setTimeout(() => {
            if (cpf === MOCK_CPF && password === MOCK_PASSWORD) {
                // Sucesso no login
                clearErrorMessage();
                
                // Gerencia funcionalidade "Lembrar-me"
                if (rememberMeCheckbox.checked) {
                    saveCredentials(cpf, password);
                } else {
                    clearStoredCredentials();
                }

                // Define expiração da sessão
                setSessionExpiry();

                // Redireciona para a página inicial
                window.location.href = 'home.html';
            } else {
                displayErrorMessage('Usuário ou senha inválidos.');
            }
        }, 1000);
    });

    /**
     * Verifica se existe uma sessão válida armazenada e, se existir,
     * realiza o login automático com as credenciais salvas
     */
    function checkExistingSession() {
        const storedCredentials = getStoredCredentials();
        const sessionExpiry = localStorage.getItem(STORAGE_KEYS.SESSION_EXPIRY);

        if (storedCredentials && sessionExpiry) {
            const now = new Date().getTime();
            if (now < parseInt(sessionExpiry)) {
                // Login automático com credenciais armazenadas
                cpfInput.value = storedCredentials.cpf;
                passwordInput.value = storedCredentials.password;
                loginForm.dispatchEvent(new Event('submit'));
            } else {
                // Sessão expirada
                clearStoredCredentials();
            }
        }
    }

    /**
     * Salva as credenciais do usuário no localStorage quando
     * a opção "Lembrar-me" está marcada
     * @param {string} cpf - CPF do usuário
     * @param {string} password - Senha do usuário
     */
    function saveCredentials(cpf, password) {
        const credentials = {
            cpf: cpf,
            password: password
        };
        localStorage.setItem(STORAGE_KEYS.CREDENTIALS, JSON.stringify(credentials));
    }

    /**
     * Recupera as credenciais armazenadas no localStorage
     * @returns {Object|null} Objeto contendo CPF e senha, ou null se não houver credenciais salvas
     */
    function getStoredCredentials() {
        const stored = localStorage.getItem(STORAGE_KEYS.CREDENTIALS);
        return stored ? JSON.parse(stored) : null;
    }

    /**
     * Remove as credenciais e informações de sessão do localStorage
     * quando o usuário faz logout ou quando a sessão expira
     */
    function clearStoredCredentials() {
        localStorage.removeItem(STORAGE_KEYS.CREDENTIALS);
        localStorage.removeItem(STORAGE_KEYS.SESSION_EXPIRY);
    }

    /**
     * Define a data de expiração da sessão atual
     * baseada na duração configurada (30 dias)
     */
    function setSessionExpiry() {
        const expiryTime = new Date().getTime() + SESSION_DURATION;
        localStorage.setItem(STORAGE_KEYS.SESSION_EXPIRY, expiryTime.toString());
    }

    /**
     * Exibe uma mensagem de erro no formulário de login
     * @param {string} message - Mensagem de erro a ser exibida
     */
    function displayErrorMessage(message) {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.display = 'block';
    }

    /**
     * Exibe uma mensagem de carregamento durante o processo de autenticação
     * @param {string} message - Mensagem de carregamento a ser exibida
     */
    function displayLoadingMessage(message) {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.color = '#555';
        errorMessageDiv.style.display = 'block';
    }

    /**
     * Limpa qualquer mensagem de erro ou carregamento exibida no formulário
     */
    function clearErrorMessage() {
        errorMessageDiv.textContent = '';
        errorMessageDiv.style.display = 'none';
        errorMessageDiv.style.color = '#D32F2F';
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
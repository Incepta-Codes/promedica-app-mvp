document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const cpfInput = document.getElementById('cpf');
    const passwordInput = document.getElementById('password');
    const errorMessageDiv = document.getElementById('errorMessage');
    const rememberMeCheckbox = document.getElementById('remember');

    const SESSION_DURATION = 30 * 24 * 60 * 60 * 1000; // 30 dias em milissegundos
    const STORAGE_KEYS = {
        CREDENTIALS: 'promedica_credentials',
        SESSION_EXPIRY: 'promedica_session_expiry'
    };

    checkExistingSession();

    if (cpfInput) {
        cpfInput.addEventListener('input', clearErrorMessage);
    }
    if (passwordInput) {
        passwordInput.addEventListener('input', clearErrorMessage);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            clearErrorMessage();

            const cpf = cpfInput.value.trim();
            const password = passwordInput.value.trim();

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

            const MOCK_CPF = "12345678900";
            const MOCK_PASSWORD = "password123";

            displayLoadingMessage('Autenticando...');

            setTimeout(() => {
                if (cpf === MOCK_CPF && password === MOCK_PASSWORD) {
                    clearErrorMessage();
                    
                    if (rememberMeCheckbox && rememberMeCheckbox.checked) {
                        saveCredentials(cpf, password);
                    } else {
                        clearStoredCredentials();
                    }

                    setSessionExpiry();
                    window.location.href = 'home.html';
                } else {
                    displayErrorMessage('Usuário ou senha inválidos.');
                }
            }, 1000);
        });
    }

    function checkExistingSession() {
        const storedCredentials = getStoredCredentials();
        const sessionExpiry = localStorage.getItem(STORAGE_KEYS.SESSION_EXPIRY);

        if (storedCredentials && sessionExpiry) {
            const now = new Date().getTime();
            if (now < parseInt(sessionExpiry)) {
                if (cpfInput && passwordInput && loginForm) {
                    cpfInput.value = storedCredentials.cpf;
                    passwordInput.value = storedCredentials.password;
                    loginForm.dispatchEvent(new Event('submit'));
                }
            } else {
                clearStoredCredentials();
            }
        }
    }

    function saveCredentials(cpf, password) {
        const credentials = {
            cpf: cpf,
            password: password
        };
        localStorage.setItem(STORAGE_KEYS.CREDENTIALS, JSON.stringify(credentials));
    }

    function getStoredCredentials() {
        const stored = localStorage.getItem(STORAGE_KEYS.CREDENTIALS);
        try {
            return stored ? JSON.parse(stored) : null;
        } catch (e) {
            console.error("Erro ao parsear credenciais do localStorage:", e);
            localStorage.removeItem(STORAGE_KEYS.CREDENTIALS);
            return null;
        }
    }

    function clearStoredCredentials() {
        localStorage.removeItem(STORAGE_KEYS.CREDENTIALS);
        localStorage.removeItem(STORAGE_KEYS.SESSION_EXPIRY);
    }

    function setSessionExpiry() {
        const expiryTime = new Date().getTime() + SESSION_DURATION;
        localStorage.setItem(STORAGE_KEYS.SESSION_EXPIRY, expiryTime.toString());
    }

    function displayErrorMessage(message) {
        if (errorMessageDiv) {
            errorMessageDiv.textContent = message;
            errorMessageDiv.style.display = 'block';
        }
    }

    function displayLoadingMessage(message) {
        if (errorMessageDiv) {
            errorMessageDiv.textContent = message;
            errorMessageDiv.style.color = '#555';
            errorMessageDiv.style.display = 'block';
        }
    }

    function clearErrorMessage() {
        if (errorMessageDiv) {
            errorMessageDiv.textContent = '';
            errorMessageDiv.style.display = 'none';
            errorMessageDiv.style.color = '#D32F2F';
        }
    }

    const biometricButton = document.querySelector('.btn-biometric');
    if (biometricButton) {
        biometricButton.addEventListener('click', () => {
            alert('Funcionalidade "Entrar com biometria" ainda não implementada neste MVP.');
        });
    }
});
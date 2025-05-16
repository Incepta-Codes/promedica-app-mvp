document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const cpfInput = document.getElementById('cpf');
    const passwordInput = document.getElementById('password');
    const errorMessageDiv = document.getElementById('errorMessage');
    const rememberMeCheckbox = document.getElementById('remember');

    // Constantes para gerenciamento de sessão
    const SESSION_DURATION = 30 * 24 * 60 * 60 * 1000; // 30 dias em milissegundos (produção)
    const STORAGE_KEYS = {
        CREDENTIALS: 'promedica_credentials',
        SESSION_EXPIRY: 'promedica_session_expiry'
    };

    // Verifica sessão existente ao carregar a página
    checkExistingSession();

    // Limpa a mensagem de erro ao digitar nos campos
    if (cpfInput) { // Adiciona verificação se o elemento existe
        cpfInput.addEventListener('input', clearErrorMessage);
    }
    if (passwordInput) { // Adiciona verificação se o elemento existe
        passwordInput.addEventListener('input', clearErrorMessage);
    }

    if (loginForm) { // Adiciona verificação se o formulário existe
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

            // Lógica de autenticação MOCKADA
            const MOCK_CPF = "12345678900";
            const MOCK_PASSWORD = "password123";

            console.log('Tentativa de login com:', { cpf, password });

            displayLoadingMessage('Autenticando...');

            setTimeout(() => {
                console.log("Verificando credenciais...");
                console.log(`Digitado: CPF='${cpf}', Senha='${password}'`);
                console.log(`Mock: CPF='${MOCK_CPF}', Senha='${MOCK_PASSWORD}'`);

                if (cpf === MOCK_CPF && password === MOCK_PASSWORD) {
                    console.log("Credenciais CORRESPONDEM!");
                    // Sucesso no login
                    clearErrorMessage();
                    
                    // Gerencia funcionalidade "Lembrar-me"
                    if (rememberMeCheckbox && rememberMeCheckbox.checked) { // Adiciona verificação se o elemento existe
                        saveCredentials(cpf, password);
                    } else {
                        clearStoredCredentials(); // Garante que se não marcou, limpa qualquer resquício
                    }

                    // Define expiração da sessão
                    setSessionExpiry();
                    console.log("Sessão definida. Tentando redirecionar...");
                    // alert("DEBUG: Login bem-sucedido! Prestes a redirecionar."); // Removido o alert para não interromper o fluxo normal, mas pode ser reativado para debug
                    
                    // Redireciona para a página inicial
                    window.location.href = 'home.html';
                } else {
                    console.log("Credenciais NÃO correspondem.");
                    displayErrorMessage('Usuário ou senha inválidos.');
                }
            }, 1000);
        });
    }


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
                if (cpfInput && passwordInput && loginForm) { // Garante que os elementos existem
                    cpfInput.value = storedCredentials.cpf;
                    passwordInput.value = storedCredentials.password;
                    // Para simular o login automático de forma mais robusta,
                    // podemos preencher os campos e então disparar o submit do formulário
                    // ou chamar diretamente a lógica de sucesso do login.
                    // Disparar o submit é mais próximo do fluxo do usuário.
                    loginForm.dispatchEvent(new Event('submit'));
                }
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
            password: password // ATENÇÃO: Armazenar senha em plain text no localStorage é inseguro para produção!
        };
        localStorage.setItem(STORAGE_KEYS.CREDENTIALS, JSON.stringify(credentials));
    }

    /**
     * Recupera as credenciais armazenadas no localStorage
     * @returns {Object|null} Objeto contendo CPF e senha, ou null se não houver credenciais salvas
     */
    function getStoredCredentials() {
        const stored = localStorage.getItem(STORAGE_KEYS.CREDENTIALS);
        try {
            return stored ? JSON.parse(stored) : null;
        } catch (e) {
            console.error("Erro ao parsear credenciais do localStorage:", e);
            localStorage.removeItem(STORAGE_KEYS.CREDENTIALS); // Limpa credenciais inválidas
            return null;
        }
    }

    /**
     * Remove as credenciais e informações de sessão do localStorage
     * quando o usuário faz logout ou quando a sessão expira
     */
    function clearStoredCredentials() {
        localStorage.removeItem(STORAGE_KEYS.CREDENTIALS);
        localStorage.removeItem(STORAGE_KEYS.SESSION_EXPIRY);
        console.log("Credenciais e sessão limpas do localStorage.");
    }

    /**
     * Define a data de expiração da sessão atual
     * baseada na duração configurada
     */
    function setSessionExpiry() {
        const expiryTime = new Date().getTime() + SESSION_DURATION;
        localStorage.setItem(STORAGE_KEYS.SESSION_EXPIRY, expiryTime.toString());
        console.log("Expiração da sessão definida para:", new Date(expiryTime));
    }

    /**
     * Exibe uma mensagem de erro no formulário de login
     * @param {string} message - Mensagem de erro a ser exibida
     */
    function displayErrorMessage(message) {
        if (errorMessageDiv) { // Adiciona verificação
            errorMessageDiv.textContent = message;
            errorMessageDiv.style.display = 'block';
        } else {
            console.error("Elemento errorMessageDiv não encontrado para exibir:", message);
        }
    }

    /**
     * Exibe uma mensagem de carregamento durante o processo de autenticação
     * @param {string} message - Mensagem de carregamento a ser exibida
     */
    function displayLoadingMessage(message) {
        if (errorMessageDiv) { // Adiciona verificação
            errorMessageDiv.textContent = message;
            errorMessageDiv.style.color = '#555';
            errorMessageDiv.style.display = 'block';
        } else {
            console.error("Elemento errorMessageDiv não encontrado para exibir loading:", message);
        }
    }

    /**
     * Limpa qualquer mensagem de erro ou carregamento exibida no formulário
     */
    function clearErrorMessage() {
        if (errorMessageDiv) { // Adiciona verificação
            errorMessageDiv.textContent = '';
            errorMessageDiv.style.display = 'none';
            errorMessageDiv.style.color = '#D32F2F';
        }
    }

    // Adiciona funcionalidade básica para os outros botões (apenas visual no MVP)
    // Assegure-se que este seletor '.btn-secondary' seja único para o botão de biometria
    // ou use um ID específico para evitar conflitos.
    const biometricButton = document.querySelector('.btn-biometric'); // Tornando o seletor mais específico
    if (biometricButton) {
        biometricButton.addEventListener('click', () => {
            alert('Funcionalidade "Entrar com biometria" ainda não implementada neste MVP.');
        });
    }

    // O listener para 'Esqueci minha senha' e 'Cadastre-se' foi removido
    // pois a navegação agora é feita diretamente pelos links href.

});
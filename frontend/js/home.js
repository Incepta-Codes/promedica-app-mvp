document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o usuário está autenticado
    checkAuthentication();

    // Adiciona evento de logout ao botão
    const logoutButton = document.querySelector('.logout-btn');
    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
    }
});

/**
 * Verifica se o usuário está autenticado antes de mostrar a página
 * Se não estiver autenticado, redireciona para a página de login
 */
function checkAuthentication() {
    const sessionExpiry = localStorage.getItem('promedica_session_expiry');
    const credentials = localStorage.getItem('promedica_credentials');

    if (!sessionExpiry || !credentials) {
        redirectToLogin();
        return;
    }

    const now = new Date().getTime();
    if (now > parseInt(sessionExpiry)) {
        // Sessão expirada
        clearStoredCredentials();
        redirectToLogin();
    }
}

/**
 * Realiza o logout do usuário, limpando as credenciais armazenadas
 * e redirecionando para a página de login
 */
function handleLogout(event) {
    event.preventDefault();
    clearStoredCredentials();
    redirectToLogin();
}

/**
 * Remove as credenciais e informações de sessão do localStorage
 */
function clearStoredCredentials() {
    localStorage.removeItem('promedica_credentials');
    localStorage.removeItem('promedica_session_expiry');
}

/**
 * Redireciona o usuário para a página de login
 */
function redirectToLogin() {
    window.location.href = 'login.html';
} 
document.addEventListener('DOMContentLoaded', function() {
    checkAuthentication();

    const logoutLink = document.getElementById('logoutLink');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(event) {
            event.preventDefault();
            handleLogout();
        });
    }
});

function checkAuthentication() {
    const sessionExpiry = localStorage.getItem('promedica_session_expiry');
    console.log("[home.js] Verificando autenticação...");
    console.log("[home.js] Valor de sessionExpiry do localStorage:", sessionExpiry);

    if (!sessionExpiry) {
        console.log("[home.js] Chave 'promedica_session_expiry' NÃO encontrada no localStorage. Redirecionando para login.");
        redirectToLogin();
        return;
    }

    const now = new Date().getTime();
    const expiryTime = parseInt(sessionExpiry);

    if (isNaN(expiryTime)) {
        console.log("[home.js] Valor de 'promedica_session_expiry' não é um número válido. Limpando e redirecionando.");
        clearStoredCredentials();
        redirectToLogin();
        return;
    }
    
    console.log("[home.js] Tempo atual:", now);
    console.log("[home.js] Tempo de expiração:", expiryTime);

    if (now > expiryTime) {
        console.log("[home.js] Sessão EXPIRADA (agora > expiração). Limpando e redirecionando para login.");
        clearStoredCredentials();
        redirectToLogin();
    } else {
        console.log("[home.js] Sessão VÁLIDA. Usuário pode permanecer na página.");
    }
}

function handleLogout() {
    console.log("[home.js] Iniciando logout...");
    clearStoredCredentials();
    redirectToLogin();
}

function clearStoredCredentials() {
    localStorage.removeItem('promedica_credentials');
    localStorage.removeItem('promedica_session_expiry');
    console.log("[home.js] Credenciais e sessão limpas do localStorage.");
}

function redirectToLogin() {
    console.log("[home.js] Redirecionando para login.html...");
    window.location.href = 'login.html';
}
document.addEventListener('DOMContentLoaded', function() {
    const providerSearchForm = document.getElementById('providerSearchForm');
    const estadoSelect = document.getElementById('estado');
    const cidadeSelect = document.getElementById('cidade');
    const tipoServicoSelect = document.getElementById('tipoServico');
    const especialidadeSelect = document.getElementById('especialidade');
    const errorMessageDiv = document.getElementById('searchErrorMessage');

    if (providerSearchForm) {
        providerSearchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            clearErrorMessage();

            const estado = estadoSelect.value;
            const cidade = cidadeSelect.value;
            const tipoServico = tipoServicoSelect.value;
            const especialidade = especialidadeSelect.value;

            // Validação básica (verifica se algo foi selecionado)
            // Os <select> com 'required' e option disabled selected já ajudam,
            // mas uma verificação JS pode ser útil para feedback mais dinâmico.
            if (!estado || !cidade || !tipoServico || !especialidade) {
                displayErrorMessage('Por favor, preencha todos os filtros para realizar a busca.');
                return;
            }

            console.log('Iniciando busca com os filtros:', {
                estado,
                cidade,
                tipoServico,
                especialidade
            });
            displayLoadingMessage('Pesquisando na rede credenciada...');

            setTimeout(() => {
                // Simulação de lógica de backend e resultados
                clearErrorMessage();
                alert('Busca realizada (mockado)! Os resultados seriam exibidos em uma nova tela ou abaixo.');
                // Em um fluxo real, você poderia redirecionar para uma página de resultados:
                // window.location.href = `search-results.html?estado=${estado}&cidade=${cidade}...`;
                // Ou carregar os resultados dinamicamente nesta página.
            }, 1500);
        });
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
            errorMessageDiv.style.color = '#555'; // Cor diferente para loading
            errorMessageDiv.style.display = 'block';
        }
    }

    function clearErrorMessage() {
        if (errorMessageDiv) {
            errorMessageDiv.textContent = '';
            errorMessageDiv.style.display = 'none';
            errorMessageDiv.style.color = '#D32F2F'; // Reseta a cor para erro padrão
        }
    }
});
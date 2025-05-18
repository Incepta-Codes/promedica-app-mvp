document.addEventListener('DOMContentLoaded', function() {
    const providerSearchForm = document.getElementById('providerSearchForm');
    const estadoSelect = document.getElementById('estado');
    const cidadeSelect = document.getElementById('cidade');
    const tipoServicoSelect = document.getElementById('tipoServico');
    const especialidadeSelect = document.getElementById('especialidade');
    const searchErrorMessageDiv = document.getElementById('searchErrorMessage');

    if (providerSearchForm) {
        providerSearchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            clearErrorMessage();

            const estado = estadoSelect.value;
            const cidade = cidadeSelect.value;
            const tipoServico = tipoServicoSelect.value;
            const especialidade = especialidadeSelect.value;

            if (!estado || !cidade || !tipoServico || !especialidade) {
                displayErrorMessage('Por favor, preencha todos os filtros para pesquisar.');
                return;
            }

            console.log('Pesquisando com filtros:', {
                estado,
                cidade,
                tipoServico,
                especialidade
            });

            displayLoadingMessage('Pesquisando...');

            setTimeout(() => {
                clearErrorMessage();
                window.location.href = 'search-results.html';
            }, 1000);
        });
    }

    function displayErrorMessage(message) {
        if (searchErrorMessageDiv) {
            searchErrorMessageDiv.textContent = message;
            searchErrorMessageDiv.style.display = 'block';
        }
    }

    function displayLoadingMessage(message) {
        if (searchErrorMessageDiv) {
            searchErrorMessageDiv.textContent = message;
            searchErrorMessageDiv.style.color = '#555';
            searchErrorMessageDiv.style.display = 'block';
        }
    }

    function clearErrorMessage() {
        if (searchErrorMessageDiv) {
            searchErrorMessageDiv.textContent = '';
            searchErrorMessageDiv.style.display = 'none';
            searchErrorMessageDiv.style.color = '#D32F2F';
        }
    }

    [estadoSelect, cidadeSelect, tipoServicoSelect, especialidadeSelect].forEach(selectElement => {
        if (selectElement) {
            selectElement.addEventListener('change', clearErrorMessage);
        }
    });
});
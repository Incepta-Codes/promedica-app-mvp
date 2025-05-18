document.addEventListener('DOMContentLoaded', function() {
    const agendarButtons = document.querySelectorAll('.btn-agendar');
    const phoneLinks = document.querySelectorAll('.phone-link');
    const mapLinks = document.querySelectorAll('.map-link');
    const nextResultPageLink = document.querySelector('.footer-nav-arrow');

    agendarButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Botão "Agendar" clicado! (Funcionalidade mockada)');
        });
    });

    phoneLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const phoneNumber = this.textContent.trim(); // Pega o número do texto do link
            alert(`Ligar para: ${phoneNumber} (Funcionalidade mockada - abriria o discador)`);
        });
    });

    mapLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Link "Ver mapa" clicado! (Funcionalidade mockada - abriria o app de mapas)');
        });
    });

    if (nextResultPageLink) {
        nextResultPageLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Navegar para próxima página de resultados. (Funcionalidade mockada)');
        });
    }
});
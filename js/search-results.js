document.addEventListener('DOMContentLoaded', function() {
    const agendarButtons = document.querySelectorAll('.btn-agendar');
    const phoneLinks = document.querySelectorAll('.phone-link');
    const mapLinks = document.querySelectorAll('.map-link');
    const nextResultPageLink = document.querySelector('.footer-nav-arrow');

    // Elementos do Modal de Confirmação
    const confirmationModal = document.getElementById('confirmationModal');
    const confirmationTextElement = document.getElementById('confirmationText');
    const confirmDateSpan = document.getElementById('confirmDate');
    const confirmTimeSpan = document.getElementById('confirmTime');
    const confirmYesBtn = document.getElementById('confirmYesBtn');
    const confirmNoBtn = document.getElementById('confirmNoBtn');

    let currentAppointmentData = null;

    agendarButtons.forEach(button => {
        button.addEventListener('click', function() {
            const resultItem = this.closest('.result-item');
            currentAppointmentData = {
                id: resultItem.dataset.id,
                location: resultItem.dataset.location,
                professional: resultItem.dataset.professional,
                date: resultItem.dataset.date,
                time: resultItem.dataset.time,
            };

            if (confirmDateSpan) confirmDateSpan.textContent = currentAppointmentData.date;
            if (confirmTimeSpan) confirmTimeSpan.textContent = currentAppointmentData.time;
            
            if (confirmationModal) confirmationModal.style.display = 'flex';
        });
    });

    if (confirmYesBtn) {
        confirmYesBtn.addEventListener('click', function() {
            console.log('Agendamento confirmado para:', currentAppointmentData);
            alert(`Agendamento para ${currentAppointmentData.location} com ${currentAppointmentData.professional} em ${currentAppointmentData.date} às ${currentAppointmentData.time} CONFIRMADO! (Mockado)`);
            if (confirmationModal) confirmationModal.style.display = 'none';
        });
    }

    if (confirmNoBtn) {
        confirmNoBtn.addEventListener('click', function() {
            if (confirmationModal) confirmationModal.style.display = 'none';
            currentAppointmentData = null;
            console.log('Agendamento cancelado.');
        });
    }

    phoneLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const phoneNumber = this.textContent.trim();
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

    if (confirmationModal) {
        confirmationModal.addEventListener('click', function(event) {
            if (event.target === confirmationModal) {
                confirmationModal.style.display = 'none';
                currentAppointmentData = null;
            }
        });
    }
});
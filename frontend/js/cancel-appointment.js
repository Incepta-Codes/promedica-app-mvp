document.addEventListener('DOMContentLoaded', function() {
    const appointmentListDiv = document.getElementById('appointmentList');
    const cancelButtons = document.querySelectorAll('.btn-cancel-action');
    const noAppointmentsMessage = document.getElementById('noAppointmentsMessage');

    const cancelModal = document.getElementById('cancelConfirmModal');
    const cancelConfirmYesBtn = document.getElementById('cancelConfirmYesBtn');
    const cancelConfirmNoBtn = document.getElementById('cancelConfirmNoBtn');
    const cancelConfirmText = document.getElementById('cancelConfirmText');

    let appointmentToCancel = null;

    function checkEmptyList() {
        const remainingCards = appointmentListDiv.querySelectorAll('.appointment-card');
        if (remainingCards.length === 0 && noAppointmentsMessage) {
            noAppointmentsMessage.style.display = 'block';
        } else if (noAppointmentsMessage) {
            noAppointmentsMessage.style.display = 'none';
        }
    }
    
    checkEmptyList();

    cancelButtons.forEach(button => {
        button.addEventListener('click', function() {
            appointmentToCancel = this.closest('.appointment-card');
            const professional = appointmentToCancel.querySelector('.card-body p:nth-child(2)').textContent.replace('Profissional: ', '');
            const date = appointmentToCancel.querySelector('.date strong').textContent;
            const time = appointmentToCancel.querySelector('.time strong').textContent;

            if (cancelConfirmText) {
                 cancelConfirmText.innerHTML = `Tem certeza que deseja desmarcar a consulta com ${professional} em ${date} às ${time}?`;
            }

            if (cancelModal) cancelModal.style.display = 'flex';
        });
    });

    if (cancelConfirmYesBtn) {
        cancelConfirmYesBtn.addEventListener('click', function() {
            if (appointmentToCancel) {
                appointmentToCancel.remove();
                console.log('Consulta desmarcada:', appointmentToCancel.dataset.appointmentId);
                alert('Consulta desmarcada com sucesso! (Mockado)');
                checkEmptyList();
            }
            if (cancelModal) cancelModal.style.display = 'none';
            appointmentToCancel = null;
        });
    }

    if (cancelConfirmNoBtn) {
        cancelConfirmNoBtn.addEventListener('click', function() {
            if (cancelModal) cancelModal.style.display = 'none';
            appointmentToCancel = null;
        });
    }

    if (cancelModal) {
        cancelModal.addEventListener('click', function(event) {
            if (event.target === cancelModal) {
                cancelModal.style.display = 'none';
                appointmentToCancel = null;
            }
        });
    }
});
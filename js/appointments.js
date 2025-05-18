document.addEventListener('DOMContentLoaded', function() {
    const copyBarcodeButtons = document.querySelectorAll('.btn-copy-barcode');
    const myAppointmentsListDiv = document.getElementById('myAppointmentsList');
    const noMyAppointmentsMessage = document.getElementById('noMyAppointmentsMessage');

    function checkEmptyList() {
        const remainingCards = myAppointmentsListDiv.querySelectorAll('.appointment-card');
        if (remainingCards.length === 0 && noMyAppointmentsMessage) {
            noMyAppointmentsMessage.style.display = 'block';
        } else if (noMyAppointmentsMessage) {
            noMyAppointmentsMessage.style.display = 'none';
        }
    }

    checkEmptyList();

    copyBarcodeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const appointmentCard = this.closest('.appointment-card');
            const barcodeData = appointmentCard.dataset.barcode;
            
            navigator.clipboard.writeText(barcodeData).then(function() {
                alert('Código de barras (' + barcodeData + ') copiado para a área de transferência! (Mockado)');
            }).catch(function(err) {
                console.error('Falha ao copiar código de barras: ', err);
                alert('Falha ao copiar código de barras. Verifique as permissões do navegador ou tente manualmente.');
            });
        });
    });
});
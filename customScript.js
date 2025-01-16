// Filter søgning - Under Ticket Status.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#searchinput input').addEventListener('input', function () {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
      const rowText = row.textContent.toLowerCase();
      row.style.display = rowText.includes(searchValue) ? '' : 'none';
    });
  });
});

// Håndtere klik-funktion på tabellen - Tickets (ændret fra dobbeltklik til enkeltklik).
document.querySelectorAll('table tbody tr').forEach(row => {
  row.addEventListener('click', function () {
    // Tjek, om klikket virker ved at logge rækkeindholdet
    console.log('Klikket på række: ', this);

    // Tjek om cellerne er tilgængelige
    if (this.cells.length >= 8) { 
      // Henter data fra den klikkede række
      var ticketNumber = this.cells[0].textContent;
      var ticketCustomerName = this.cells[1].textContent;
      var ticketEmail = this.cells[2].textContent;
      var ticketTitle = this.cells[3].textContent;
      var ticketDescription = this.cells[7].textContent; 
      var ticketStatus = this.cells[4].textContent;
      var ticketPriority = this.cells[5].textContent;
      var ticketCreated = this.cells[6].textContent;

      // Fylder modal felterne med data fra den klikkede række
      document.getElementById('modalTicketNumber').value = ticketNumber;
      document.getElementById('modalTicketCustomerName').value = ticketCustomerName;
      document.getElementById('modalTicketEmail').value = ticketEmail;
      document.getElementById('modalTicketTitle').value = ticketTitle;
      document.getElementById('modalTicketDescription').value = ticketDescription;
      document.getElementById('modalTicketStatus').value = ticketStatus;
      document.getElementById('modalTicketPriority').value = ticketPriority;
      document.getElementById('modalTicketCreated').value = ticketCreated;

      // Åbner modal vinduet
      var ticketModal = new bootstrap.Modal(document.getElementById('ticketModal'));
      ticketModal.show();
    } else {
      console.log("Denne række har ikke nok celler.");
    }
  });
});

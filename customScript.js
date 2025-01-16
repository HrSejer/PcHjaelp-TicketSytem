
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
  
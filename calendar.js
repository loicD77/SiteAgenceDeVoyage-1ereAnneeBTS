// Écouter les modifications du menu déroulant des mois
document.getElementById('monthSelect').addEventListener('change', function() {
  var selectedMonth = this.value;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById('calendarDays').innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', 'get_calendar_days.php?month=' + selectedMonth, true);
  xhr.send();
});
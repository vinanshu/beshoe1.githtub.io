document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    var countdown = 3; // Change to 3 seconds
  
    var countdownInterval = setInterval(function() {
      countdown--;
      countdownElement.textContent = countdown;
      if (countdown <= 0) {
        clearInterval(countdownInterval);
        window.location.href = 'index.html'; // Change to home.html
      }
    }, 1000);
  });
  
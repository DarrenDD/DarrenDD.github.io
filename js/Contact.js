// Initialize EmailJS
(function() {
  emailjs.init('hN6kdLAQkBby1Pqb0'); // Replace with your EmailJS public key
})();

document.getElementById('rsvp-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Send the form using EmailJS
  emailjs.sendForm('service_hwt9jfv', 'template_6m0je1i', this)
    .then(function(response) {
      alert('RSVP successfully!');
    }, function(error) {
      alert('FAILED to send form. Error: ' + JSON.stringify(error));
    });
});
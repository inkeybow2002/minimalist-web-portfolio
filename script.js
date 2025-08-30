document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent! Thank you for contacting me.');
    this.reset();
});
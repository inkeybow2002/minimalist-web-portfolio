document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Notify the user that the message has been sent
    alert('Message sent! Thank you for contacting me.');
    // Reset the form fields after submission
    this.reset();
});
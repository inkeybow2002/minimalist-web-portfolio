document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior to avoid page refresh
    event.preventDefault();
    try {
        // Notify the user that the message has been sent successfully
        alert('Message sent! Thank you for contacting me.');
        // Reset the form fields to clear input after submission
        this.reset();
    } catch (error) {
        console.error('Error during form submission:', error);
        alert('There was an error sending your message. Please try again later.');
    }
});
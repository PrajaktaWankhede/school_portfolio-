// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Display an alert message
    alert("Thank you for reaching out! We will get back to you soon.");

    // Clear the form
    document.getElementById("contact-form").reset();
});
ss
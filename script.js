console.log("JavaScript is running!");

// Example: Adding interactivity to the "Learn More" button
document.getElementById("learn-more").addEventListener("click", function() {
    alert("Get ready for an epic journey through Rome!");
});

// Example: Contact form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("form-response").classList.remove("hidden");
});

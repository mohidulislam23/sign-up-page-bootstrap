// script.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".content__input--form");
    const submitButton = form.querySelector("button[type='submit']");
    const googleButton = document.querySelector(".content__submit button");
    const successAlert = document.querySelector(".alert-success");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      // Show the spinner in the submit button
      submitButton.querySelector(".spinner-border").classList.remove("d-none");
      
      // Simulate form submission delay (for demonstration purposes)
      setTimeout(function() {
        // Hide the spinner in the submit button
        submitButton.querySelector(".spinner-border").classList.add("d-none");
        
        // Show the success alert
        successAlert.classList.remove("d-none");
        
        // Reset the form
        form.reset();
      }, 2000);
    });
    
    googleButton.addEventListener("click", function() {
      // Show the spinner in the Google button
      googleButton.querySelector(".spinner-border").classList.remove("d-none");
      
      // Simulate button click delay (for demonstration purposes)
      setTimeout(function() {
        // Hide the spinner in the Google button
        googleButton.querySelector(".spinner-border").classList.add("d-none");
        
        // Show the success alert
        successAlert.classList.remove("d-none");
      }, 1500);
    });
  });
  
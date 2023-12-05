// script.js

// Example JavaScript to enhance the user experience
document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the "Get Weather" button
    const weatherForm = document.querySelector('form[action="/weather"]');
    weatherForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting (for demonstration purposes)
  
      // Your custom logic for handling the form submission can go here
  
      // For demonstration, let's just log the entered city to the console
      const cityInput = document.getElementById('city');
      console.log('Selected City:', cityInput.value);
    });
  });
  
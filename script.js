const navLinks = document.querySelectorAll('nav ul li a:not([href="resume.html"]):not([href="index.html"])');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});


// Form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  // Check if any required fields are empty
  if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
    e.preventDefault();
    alert('Please fill out all required fields.');
  }
});

const toggle = document.getElementById('darkModeToggle');

toggle.addEventListener('change', function() {
  if (toggle.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function enableDarkMode() {
  // Add CSS class to enable dark mode styles
  document.body.classList.add('dark-mode');
  // Store the user's preference in local storage or cookie if needed
  // ...
}

function disableDarkMode() {
  // Remove CSS class to disable dark mode styles
  document.body.classList.remove('dark-mode');
  // Store the user's preference in local storage or cookie if needed
  // ...
}

// Check the user's preference from local storage or cookie and set the initial state of the toggle
// ...

// Add this script to your project and link it in the HTML file using <script src="script.js"></script>

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    // Perform form validation here if needed
  
    // Create an object with the form data
    var formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };
  
    // Perform an AJAX request to submit the form data to the server
    // You can customize this part based on your server-side implementation
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/submit-contact-form"); // Replace with your server endpoint
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Handle the successful form submission
        alert("Message sent successfully!");
        // Reset the form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
      } else {
        // Handle the form submission error
        alert("An error occurred. Please try again later.");
      }
    };
    xhr.send(JSON.stringify(formData));
  });
  
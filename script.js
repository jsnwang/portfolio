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

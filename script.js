// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
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

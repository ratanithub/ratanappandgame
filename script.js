// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href').substring(1); // Get the target section ID
    const targetSection = document.getElementById(targetId); // Find the target section
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
  });
});

// Button hover animation
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
  ctaButton.addEventListener('mouseenter', () => {
    ctaButton.style.transform = 'scale(1.1)';
    ctaButton.style.transition = 'transform 0.3s ease';
  });

  ctaButton.addEventListener('mouseleave', () => {
    ctaButton.style.transform = 'scale(1)';
  });
}

// Form submission handling (basic example)
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for now
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;

    // Basic validation
    if (name && email && message) {
      alert(`Thank you, ${name}! We have received your message.`);
      contactForm.reset(); // Clear the form
    } else {
      alert('Please fill out all fields.');
    }
  });
}

// Animations on Scroll 
// Adding event listener to scroll event
window.addEventListener('scroll', function() {
    // Getting elements to animate
    const animatableElements = document.querySelectorAll('.animate-on-scroll');
  
    // Looping through elements and animating when in view
    animatableElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
  
      if (isInView) {
        element.classList.add('animated');
        element.style.transform = `translateY(0) scale(1)`;
        element.style.opacity = 1;
      } else {
        element.classList.remove('animated');
        element.style.transform = `translateY(20px) scale(0.9)`;
        element.style.opacity = 0.5;
      }
    });
  });

  // Getting navigation menu and toggle button
const navMenu = document.querySelector('.nav ul');
const toggleButton = document.querySelector('.nav.btn');

// Adding event listener to toggle button
toggleButton.addEventListener('click', function() {
  navMenu.classList.toggle('open');
});

// Getting testimonials container and items
const testimonialsContainer = document.querySelector('.testimonials-content');
const testimonialItems = document.querySelectorAll('.testimonials-content.Group');

// Setting up carousel
let currentIndex = 0;

function nextTestimonial() {
  testimonialItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % testimonialItems.length;
  testimonialItems[currentIndex].classList.add('active');
}

function previousTestimonial() {
  testimonialItems[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
  testimonialItems[currentIndex].classList.add('active');
}

// Adding event listeners to navigation buttons
document.querySelector('.testimonials-content.next').addEventListener('click', nextTestimonial);
document.querySelector('.testimonials-content.prev').addEventListener('click', previousTestimonial);

// Getting FAQ items
const faqItems = document.querySelectorAll('.faq-item');

// Adding event listener to FAQ items
faqItems.forEach((item) => {
  item.addEventListener('click', function() {
    // Togglling expanded state
    item.classList.toggle('expanded');

    // Togglling arrow icon
    const arrowIcon = item.querySelector('.arrow-icon');
    arrowIcon.classList.toggle('rotated');
  });
});

// Getting newsletter form and input field
const newsletterForm = document.querySelector('.footer-lists.newsletter-form');
const emailInput = document.querySelector('.footer-lists.newsletter-form input[type="email"]');

// Adding event listener to form submission
newsletterForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Getting email value and validate
  const emailValue = emailInput.value.trim();
  if (emailValue && validateEmail(emailValue)) {
    // Submitting form or perform API call
    console.log('Form submitted successfully!');
  } else {
    alert('Please enter a valid email address.');
  }
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
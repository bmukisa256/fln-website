// script.js

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // FAQ Accordion using Bootstrap's Collapse
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      header.classList.toggle('active');
      const content = header.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });

  // Gallery filter
  const filterButtons = document.querySelectorAll('.filter-button');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox for gallery images
  const galleryImages = document.querySelectorAll('.gallery-item img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      const lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      document.body.appendChild(lightbox);

      const lightboxImg = document.createElement('img');
      lightboxImg.src = img.src;
      lightbox.appendChild(lightboxImg);

      lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
      });
    });
  });

  // Form validation
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      form.querySelectorAll('input, select, textarea').forEach(field => {
        if (field.hasAttribute('required') && !field.value.trim()) {
          isValid = false;
          field.classList.add('is-invalid');
        } else {
          field.classList.remove('is-invalid');
        }
      });

      if (isValid) {
        // Here you would typically send the form data to a server
        alert('Form submitted successfully!');
        form.reset();
      } else {
        alert('Please fill in all required fields.');
      }
    });
  });

  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', () => {
    animateOnScroll();

    const scrollPosition = window.scrollY;
    const navbar = document.getElementById('navbar');

    if (scrollPosition > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  animateOnScroll(); // Initial check on page load

  // Mobile Sidebar Toggle
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mobileSidebar = document.getElementById('mobileSidebar');
  const closeSidebar = document.getElementById('closeSidebar');

  mobileNavToggle.addEventListener('click', () => {
    mobileSidebar.style.transform = 'translateX(0)';
  });

  closeSidebar.addEventListener('click', () => {
    mobileSidebar.style.transform = 'translateX(-100%)';
  });

  // Close sidebar when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileSidebar.contains(e.target) && !mobileNavToggle.contains(e.target)) {
      mobileSidebar.style.transform = 'translateX(-100%)';
    }
  });
});

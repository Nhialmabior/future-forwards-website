// future.js

document.addEventListener('DOMContentLoaded', () => {

  // ===== NAVIGATION TOGGLE =====
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });
  }

  // ===== AUTO-HIGHLIGHT ACTIVE LINK =====
  const currentPage = window.location.pathname.split("/").pop() || 'future.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href');
    link.classList.toggle('active', linkPage === currentPage);
  });

  // ===== SMOOTH SCROLL FOR ANCHORS =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ===== CONTACT FORM HANDLER =====
  document.querySelectorAll('form').forEach(form => {
    if (form.classList.contains('contact-form') || form.id === 'contact-form') {
      form.addEventListener('submit', e => {
        e.preventDefault(); // prevent mailto
        alert('Thank you! Your message has been sent.');
        form.reset();
      });
    }
  });

  // ===== GALLERY LIGHTBOX =====
  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <img src="${img.src}" alt="${img.alt}">
        </div>
      `;
      document.body.appendChild(modal);

      const closeModal = () => modal.remove();

      modal.querySelector('.close').addEventListener('click', closeModal);
      modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
      });
    });
  });

  // ===== NAVBAR SCROLL EFFECT =====
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ===== SCROLL-FADE ANIMATION =====
  const faders = document.querySelectorAll('.fade-in, .hero, .mission, .programs, .about, .involved, .gallery, .contact');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));

});

// Volunteer Modal Toggle
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("volunteerModal");
  const openBtn = document.getElementById("openVolunteerModal");
  const closeBtn = modal.querySelector(".close-modal");

  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    // Close when clicking outside
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const volunteerModal = document.getElementById("volunteerModal");
  const volunteerBtn = document.getElementById("volunteerBtn");
  const closeModal = document.querySelector(".close-modal");

  if (volunteerBtn && volunteerModal && closeModal) {
    // Open modal
    volunteerBtn.addEventListener("click", (e) => {
      e.preventDefault();
      volunteerModal.style.display = "flex";
    });

    // Close modal (X button)
    closeModal.addEventListener("click", () => {
      volunteerModal.style.display = "none";
    });

    // Close when clicking outside modal
    window.addEventListener("click", (e) => {
      if (e.target === volunteerModal) {
        volunteerModal.style.display = "none";
      }
    });
  }
});// Highlight active nav link automatically
document.addEventListener("DOMContentLoaded", function () {
  const currentLocation = window.location.pathname.split("/").pop();
  const menuItems = document.querySelectorAll(".nav-links a");

  menuItems.forEach(item => {
    if (item.getAttribute("href") === currentLocation) {
      item.classList.add("active");
    }
  });
});


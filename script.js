// =========================
// Theme Toggle
// =========================
const toggleBtn = document.querySelector('.theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.setAttribute('data-theme', savedTheme);
}

toggleBtn.addEventListener('click', () => {
  const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

// =========================
// Contact Form Validation
// =========================
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.querySelector('#name');
  const email = form.querySelector('#email');
  const message = form.querySelector('#message');

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let valid = true;

  // Name validation
  if (name.value.trim() === '') {
    name.classList.add('is-invalid');
    valid = false;
  } else {
    name.classList.remove('is-invalid');
  }

  // Email validation
  if (!email.value.match(emailPattern)) {
    email.classList.add('is-invalid');
    valid = false;
  } else {
    email.classList.remove('is-invalid');
  }

  // Message validation
  if (message.value.trim() === '') {
    message.classList.add('is-invalid');
    valid = false;
  } else {
    message.classList.remove('is-invalid');
  }

  // Success
  if (valid) {
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.textContent = "Sending...";
    setTimeout(() => {
      submitBtn.textContent = "Send";
      form.reset();
      const confirmation = document.createElement("p");
      confirmation.textContent = "Message sent successfully!";
      confirmation.style.color = "green";
      form.appendChild(confirmation);
      setTimeout(() => confirmation.remove(), 4000);
    }, 1000);
  }
});

// =========================
// Project Modal
// =========================
const projectBtn = document.getElementById('projectBtn');
const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
if (projectBtn && projectModal) {
  projectBtn.addEventListener('click', () => {
    projectModal.show();
  });
}

// =========================
// Animate on Scroll (Fade In)
// =========================
const faders = document.querySelectorAll("section, .card");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = "translateY(0)";
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(30px)";
  appearOnScroll.observe(section);
});

// =========================
// Resume Button Bounce Effect
// =========================
const resumeBtn = document.querySelector('#resume a.btn');
if (resumeBtn) {
  resumeBtn.addEventListener('mouseover', () => {
    resumeBtn.style.transform = "scale(1.05)";
    resumeBtn.style.transition = "transform 0.2s ease";
  });

  resumeBtn.addEventListener('mouseout', () => {
    resumeBtn.style.transform = "scale(1)";
  });
}

(function () {
      emailjs.init("N-auEFwK1WuXt3-U1");
    })();

function sendEmail(form) {
    emailjs.sendForm("racheal-200", "template_6fcxr9i", form)
      .then(() => alert("Message sent successfully!"))
      .catch(error => alert("Sending failed: " + JSON.stringify(error)));
    return false;
  }
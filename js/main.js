// Mark active nav link
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// Mobile hamburger toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    const [s1, s2, s3] = hamburger.querySelectorAll('span');
    s1.style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
    s2.style.opacity   = open ? '0' : '1';
    s3.style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// Contact form — static site, no backend
const form = document.getElementById('contact-form');
const success = document.getElementById('form-success');

if (form && success) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    success.style.display = 'block';
    form.reset();
    setTimeout(() => { success.style.display = 'none'; }, 6000);
  });
}

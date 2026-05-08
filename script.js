// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) nav.style.boxShadow = window.scrollY > 30 ? '0 2px 16px rgba(0,0,0,0.25)' : 'none';
});

// Contact form validation
function submitForm() {
  const name = document.getElementById('cName')?.value.trim();
  const email = document.getElementById('cEmail')?.value.trim();
  const message = document.getElementById('cMessage')?.value.trim();
  const alert = document.getElementById('formAlert');
  if (!alert) return;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) return showAlert(alert, 'danger', 'Please enter your full name.');
  if (!email || !emailRegex.test(email)) return showAlert(alert, 'danger', 'Please enter a valid email address.');
  if (!message || message.length < 10) return showAlert(alert, 'danger', 'Message must be at least 10 characters.');

  showAlert(alert, 'success', 'Thank you! Your message has been sent successfully.');
  ['cName','cEmail','cSubject','cMessage'].forEach(id => { const el = document.getElementById(id); if(el) el.value = ''; });
}

function showAlert(el, type, msg) {
  el.className = `alert alert-${type}`;
  el.textContent = msg;
  el.classList.remove('d-none');
  setTimeout(() => el.classList.add('d-none'), 5000);
}

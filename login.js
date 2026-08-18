/* ============================================
   SPIDER-VERSE ACADEMY — Login Logic
   ============================================ */

// ─── DOM REFERENCES ───────────────────────
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');
const viewSignin = document.getElementById('view-signin');
const viewSignup = document.getElementById('view-signup');
const toSignup = document.getElementById('to-signup');
const toSignin = document.getElementById('to-signin');
const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');
const btnSignin = document.getElementById('btn-signin');
const loginCard = document.getElementById('login-card');

// ─── VIEW SWITCHING (Sign In / Sign Up) ───
if (toSignup) {
  toSignup.addEventListener('click', (e) => {
    e.preventDefault();
    if (viewSignin) viewSignin.classList.remove('active');
    if (viewSignup) viewSignup.classList.add('active');
  });
}

if (toSignin) {
  toSignin.addEventListener('click', (e) => {
    e.preventDefault();
    if (viewSignup) viewSignup.classList.remove('active');
    if (viewSignin) viewSignin.classList.add('active');
  });
}

// ─── PASSWORD TOGGLE ──────────────────────
if (togglePassword && passwordInput) {
  togglePassword.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';

    const eyeOpen = togglePassword.querySelector('.eye-open');
    const eyeClosed = togglePassword.querySelector('.eye-closed');

    if (eyeOpen && eyeClosed) {
      if (isPassword) {
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'block';
      } else {
        eyeOpen.style.display = 'block';
        eyeClosed.style.display = 'none';
      }
    }
  });
}

// ─── SIGN IN FORM SUBMIT ─────────────────
function executeLogin() {
  if (btnSignin) btnSignin.classList.add('loading');
  if (loginCard) loginCard.classList.add('success');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 400);
}

if (signinForm) {
  signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    executeLogin();
  });
}

if (btnSignin) {
  btnSignin.addEventListener('click', (e) => {
    e.preventDefault();
    executeLogin();
  });
}

// ─── SIGN UP FORM SUBMIT ─────────────────
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = signupForm.querySelector('.btn-signin');
    if (btn) btn.classList.add('loading');
    if (loginCard) loginCard.classList.add('success');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 400);
  });
}

// ─── SOCIAL AUTH BUTTONS ─────────────────
['btn-google', 'btn-github', 'btn-discord'].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      executeLogin();
    });
  }
});

// ─── FLOATING PARTICLES ──────────────────
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  const colors = [
    'rgba(0, 229, 255, 0.6)',
    'rgba(255, 23, 68, 0.6)',
    'rgba(213, 0, 249, 0.5)',
    'rgba(255, 234, 0, 0.5)',
    'rgba(255, 255, 255, 0.3)',
  ];

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * 10;
    const color = colors[Math.floor(Math.random() * colors.length)];

    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      bottom: -10px;
      background: ${color};
      box-shadow: 0 0 ${size * 3}px ${color};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;

    container.appendChild(particle);
  }
}

createParticles();

// ─── INPUT FOCUS GLOW ANIMATION ───────────
document.querySelectorAll('.form-input').forEach(input => {
  input.addEventListener('focus', () => {
    input.closest('.input-wrapper').classList.add('focused');
  });
  input.addEventListener('blur', () => {
    input.closest('.input-wrapper').classList.remove('focused');
  });
});

// ─── KEYBOARD: Enter to submit ────────────
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const activeView = document.querySelector('.form-view.active');
    if (activeView) {
      const form = activeView.querySelector('form');
      if (form) form.requestSubmit();
    }
  }
});

console.log('🕸️ Spider-Verse Academy — Login page loaded.');

/* ==========================================================================
   ADAPTLEARN — App & Interaction Logic
   ========================================================================== */

// ─── DATA COLLECTIONS: 15 RICH MULTIVERSE COURSES ──────────────
const COURSES = [
  // ── 1. Artificial Intelligence & Machine Learning ──
  {
    id: 1,
    domain: 'Artificial Intelligence & Machine Learning',
    domainColor: '#FFE600',
    category: 'ai-ml',
    name: 'Machine Learning for Everybody – Full Course',
    creator: 'freeCodeCamp.org',
    focus: 'ML theory, algorithms, classification, and practical workflows.',
    youtubeId: 'i_LwzRVP7bg',
    link: 'https://www.youtube.com/watch?v=i_LwzRVP7bg',
    views: '4.8M',
    likes: '128K',
    comments: '4.2K',
    desc: 'Comprehensive introduction to core machine learning concepts, statistical models, supervised vs unsupervised learning, and end-to-end practical workflows.',
    progress: 75,
    status: 'in-progress'
  },
  {
    id: 2,
    domain: 'Artificial Intelligence & Machine Learning',
    domainColor: '#FFE600',
    category: 'ai-ml',
    name: 'Machine Learning with Python and Scikit-Learn',
    creator: 'freeCodeCamp.org',
    focus: 'Data preprocessing, Scikit-Learn pipelines, decision trees, and regression models.',
    youtubeId: 'hDKCxebp88A',
    link: 'https://www.youtube.com/watch?v=hDKCxebp88A',
    views: '890K',
    likes: '34K',
    comments: '1.5K',
    desc: 'Hands-on guide to building production ML pipelines in Python, feature scaling, model selection, hyperparameter tuning, and decision trees.',
    progress: 40,
    status: 'in-progress'
  },
  {
    id: 3,
    domain: 'Artificial Intelligence & Machine Learning',
    domainColor: '#FFE600',
    category: 'ai-ml',
    name: 'Python Machine Learning Tutorial (Data Science)',
    creator: 'Programming with Mosh',
    focus: 'Practical jumpstart into Pandas, NumPy, and training initial ML models.',
    youtubeId: '7eh4d6sabA0',
    link: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
    views: '3.6M',
    likes: '95K',
    comments: '3.1K',
    desc: 'Clear, step-by-step masterclass covering Jupyter Notebook setup, Pandas data manipulation, data cleansing, and training scikit-learn estimators.',
    progress: 90,
    status: 'in-progress'
  },
  {
    id: 4,
    domain: 'Artificial Intelligence & Machine Learning',
    domainColor: '#FFE600',
    category: 'ai-ml',
    name: 'But what is a Neural Network? | Deep Learning Chapter 1',
    creator: '3Blue1Brown',
    focus: 'Visual, intuitive breakdown of neural network architecture, weights, biases, and activation.',
    youtubeId: 'aircAruvnKk',
    link: 'https://www.youtube.com/watch?v=aircAruvnKk',
    views: '16M',
    likes: '620K',
    comments: '24K',
    desc: 'World-renowned geometric animations illustrating multi-layer perceptrons, matrix transformations, gradient descent, and backpropagation foundations.',
    progress: 100,
    status: 'completed'
  },
  {
    id: 5,
    domain: 'Artificial Intelligence & Machine Learning',
    domainColor: '#FFE600',
    category: 'ai-ml',
    name: 'OpenCV Course - Full Tutorial with Python',
    creator: 'freeCodeCamp.org',
    focus: 'Computer vision, image/video manipulation, edge detection, and object tracking.',
    youtubeId: 'oXlwWbU8l2o',
    link: 'https://www.youtube.com/watch?v=oXlwWbU8l2o',
    views: '2.1M',
    likes: '68K',
    comments: '1.9K',
    desc: 'Explore real-time computer vision pipelines, image thresholds, contours, face recognition, and real-time webcam video stream processing.',
    progress: 0,
    status: 'new'
  },

  // ── 2. Full Stack Web Development ──
  {
    id: 6,
    domain: 'Full Stack Web Development',
    domainColor: '#FFE600',
    category: 'web-dev',
    name: 'Full Stack Web Development for Beginners',
    creator: 'freeCodeCamp.org',
    focus: 'Complete overview covering HTML, CSS, JavaScript, Node.js, and MongoDB.',
    youtubeId: 'nu_pCVPKzTk',
    link: 'https://www.youtube.com/watch?v=nu_pCVPKzTk',
    views: '5.2M',
    likes: '145K',
    comments: '5.4K',
    desc: 'All-in-one developer roadmap covering front-end foundations, interactive DOM scripting, backend Express servers, and MongoDB database integration.',
    progress: 85,
    status: 'in-progress'
  },
  {
    id: 7,
    domain: 'Full Stack Web Development',
    domainColor: '#FFE600',
    category: 'web-dev',
    name: 'Learn HTML & CSS – Full Course for Beginners',
    creator: 'freeCodeCamp.org',
    focus: 'Core web layout structures, Flexbox, Grid, and responsive styling.',
    youtubeId: 'a_iQb1lnAEQ',
    link: 'https://www.youtube.com/watch?v=a_iQb1lnAEQ',
    views: '7.8M',
    likes: '210K',
    comments: '8.2K',
    desc: 'The definitive blueprint for modern responsive web layout, semantic HTML5 tags, CSS custom properties, and dynamic flex/grid systems.',
    progress: 100,
    status: 'completed'
  },
  {
    id: 8,
    domain: 'Full Stack Web Development',
    domainColor: '#FFE600',
    category: 'web-dev',
    name: 'React Tutorial for Beginners',
    creator: 'Programming with Mosh',
    focus: 'React components, JSX, props, state management, and building clean interfaces.',
    youtubeId: 'SqcY0GlETPk',
    link: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
    views: '4.1M',
    likes: '118K',
    comments: '4.9K',
    desc: 'Fast-paced, modern React walkthrough teaching modular components, hooks, props validation, unidirectional data flow, and styling techniques.',
    progress: 60,
    status: 'in-progress'
  },
  {
    id: 9,
    domain: 'Full Stack Web Development',
    domainColor: '#FFE600',
    category: 'web-dev',
    name: 'React JS Full Course for Beginners',
    creator: 'Dave Gray',
    focus: 'Comprehensive deep dive into React hooks, router, and full project builds.',
    youtubeId: 'RVFAyFWO4go',
    link: 'https://www.youtube.com/watch?v=RVFAyFWO4go',
    views: '1.9M',
    likes: '56K',
    comments: '2.8K',
    desc: 'Comprehensive 8-hour masterclass covering custom hooks, Context API, React Router v6, Axios REST API querying, and full-stack deployment.',
    progress: 25,
    status: 'in-progress'
  },
  {
    id: 10,
    domain: 'Full Stack Web Development',
    domainColor: '#FFE600',
    category: 'web-dev',
    name: 'Node.js and Express.js – Full Course',
    creator: 'freeCodeCamp.org',
    focus: 'Backend server architecture, REST API design, routing, and middleware.',
    youtubeId: 'Oe421EPjeBE',
    link: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
    views: '3.2M',
    likes: '92K',
    comments: '3.7K',
    desc: 'Deep dive into asynchronous Node.js runtimes, Express routing pipelines, custom middleware, auth tokens, and API architectural patterns.',
    progress: 0,
    status: 'new'
  },

  // ── 3. UI/UX & Digital Design ──
  {
    id: 11,
    domain: 'UI/UX & Digital Design',
    domainColor: '#FFE600',
    category: 'ui-ux',
    name: 'UI / UX Design Tutorial – Wireframe, Mockup & Design in Figma',
    creator: 'freeCodeCamp.org',
    focus: 'User interface design foundations, wireframing, and component structures.',
    youtubeId: 'c9Wg6Cb_YlU',
    link: 'https://www.youtube.com/watch?v=c9Wg6Cb_YlU',
    views: '2.7M',
    likes: '84K',
    comments: '2.4K',
    desc: 'Learn visual hierarchy, wireframing principles, color theory, typography pairing, and building interactive mockups directly inside Figma.',
    progress: 95,
    status: 'in-progress'
  },
  {
    id: 12,
    domain: 'UI/UX & Digital Design',
    domainColor: '#FFE600',
    category: 'ui-ux',
    name: 'Free Figma UX Design UI Essentials Course',
    creator: 'Bring Your Own Laptop',
    focus: 'Practical layout design, typography, spacing systems, and UI kits in Figma.',
    youtubeId: 'kbZejnPXyLM',
    link: 'https://www.youtube.com/watch?v=kbZejnPXyLM',
    views: '3.8M',
    likes: '110K',
    comments: '4.6K',
    desc: 'Essential UI toolkit covering Figma vectors, frame grids, responsive constraints, typography scales, micro-interactions, and component variants.',
    progress: 50,
    status: 'in-progress'
  },
  {
    id: 13,
    domain: 'UI/UX & Digital Design',
    domainColor: '#FFE600',
    category: 'ui-ux',
    name: 'Figma Tutorial for UI Design – Course for Beginners',
    creator: 'freeCodeCamp.org',
    focus: 'In-depth vector networks, Auto Layout, responsive constraints, and design systems.',
    youtubeId: 'jwCmIBJ8Jtc',
    link: 'https://www.youtube.com/watch?v=jwCmIBJ8Jtc',
    views: '1.4M',
    likes: '48K',
    comments: '1.8K',
    desc: 'Master Figma Auto Layout 5.0, design system tokens, responsive component hierarchies, and team component library architecture.',
    progress: 100,
    status: 'completed'
  },
  {
    id: 14,
    domain: 'UI/UX & Digital Design',
    domainColor: '#FFE600',
    category: 'ui-ux',
    name: 'Learn Figma – Full UI/UX Design Course',
    creator: 'freeCodeCamp.org',
    focus: 'Modern UI design workflows, interactive prototyping, and developer handoff.',
    youtubeId: 'mT_Jjn8RJdo',
    link: 'https://www.youtube.com/watch?v=mT_Jjn8RJdo',
    views: '980K',
    likes: '36K',
    comments: '1.2K',
    desc: 'End-to-end product design workflow from user personas and journey maps to high-fidelity clickable interactive prototypes and code exports.',
    progress: 0,
    status: 'new'
  },
  {
    id: 15,
    domain: 'UI/UX & Digital Design',
    domainColor: '#FFE600',
    category: 'ui-ux',
    name: 'Figma Tutorial for Beginners (Crash Course)',
    creator: 'Flux Academy',
    focus: 'Rapid walkthrough of Figma tools, canvas navigation, and design fundamentals.',
    youtubeId: 'jQ1sfKIl50E',
    link: 'https://www.youtube.com/watch?v=jQ1sfKIl50E',
    views: '2.3M',
    likes: '72K',
    comments: '2.5K',
    desc: 'Ultra-fast, high-impact crash course on mastering Figma shortcuts, essential UI mechanics, layout frames, and rapid prototype delivery.',
    progress: 0,
    status: 'new'
  }
];

const PROJECTS = [
  { id: 1, emoji: '⚡', name: 'Dimensional Quantum Shader', desc: 'WebGL & Three.js shader reproducing multiverse chromatic aberration portal physics.', tags: ['WebGL', 'GLSL', 'Three.js'] },
  { id: 2, emoji: '🕸️', name: 'Spider-Bot Autonomous Agent', desc: 'Autonomous reinforcement learning agent navigating maze topologies.', tags: ['Python', 'PyTorch', 'RL'] },
  { id: 3, emoji: '🧬', name: 'Multiverse Spaced Repetition Engine', desc: 'Custom spaced-repetition neural flashcard scheduler with real-time websocket sync.', tags: ['TypeScript', 'Redis', 'WebSockets'] },
  { id: 4, emoji: '📊', name: 'Neural Output Telemetry Dashboard', desc: 'High-throughput real-time telemetry visualizer for concurrent multi-agent streams.', tags: ['Canvas API', 'Chart.js'] },
  { id: 5, emoji: '💬', name: 'Multiverse Intercom Audio Chat', desc: 'Decentralized audio voice channel with low-latency WebRTC streams.', tags: ['WebRTC', 'Node.js'] },
];

const SKILLS = [
  { name: 'Artificial Intelligence & ML', value: 94, color: '#00F0FF' },
  { name: 'Full-Stack Web Development', value: 88, color: '#FF2A55' },
  { name: 'UI/UX & Digital Design', value: 92, color: '#FFE600' },
  { name: 'System Architecture', value: 76, color: '#00FF66' },
  { name: 'Cybersecurity & Quantum Crypto', value: 55, color: '#D500F9' },
];

// ─── DOM REFERENCES ──────────────────────────────────────────
const sidebar = document.getElementById('sidebar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const themeToggle = document.getElementById('theme-toggle');
const navItems = document.querySelectorAll('.nav-item[data-page]');
const pages = document.querySelectorAll('.page');
const heroCtaBtn = document.getElementById('hero-cta-btn');
const btnViewLearningWall = document.getElementById('btn-view-learning-wall');
const btnStartMission = document.getElementById('btn-start-mission');
const btnViewAllProjects = document.getElementById('btn-view-all-projects');
const btnCalibrate = document.getElementById('btn-calibrate');
const searchInput = document.getElementById('search-input');

// ─── TAB SWITCHING LOGIC (7 TABS) ───────────────────────────
function switchPage(pageId) {
  pages.forEach(p => p.classList.remove('active'));
  navItems.forEach(n => n.classList.remove('active'));

  const targetPage = document.getElementById(`page-${pageId}`);
  const targetNav = document.querySelector(`.nav-item[data-page="${pageId}"]`);

  if (targetPage) targetPage.classList.add('active');
  if (targetNav) targetNav.classList.add('active');

  if (sidebar) sidebar.classList.remove('open');
  const overlay = document.querySelector('.sidebar-overlay');
  if (overlay) overlay.classList.remove('visible');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (pageId === 'analytics') {
    setTimeout(renderAnalyticsChart, 100);
  }
}

navItems.forEach(item => {
  item.addEventListener('click', () => switchPage(item.dataset.page));
});

// Interactive Button Navigations
if (heroCtaBtn) {
  heroCtaBtn.addEventListener('click', () => {
    switchPage('course');
  });
}

if (btnViewLearningWall) {
  btnViewLearningWall.addEventListener('click', () => {
    switchPage('my-learning');
  });
}

if (btnStartMission) {
  btnStartMission.addEventListener('click', () => {
    window.open('https://www.youtube.com/watch?v=i_LwzRVP7bg', '_blank');
  });
}

if (btnViewAllProjects) {
  btnViewAllProjects.addEventListener('click', () => {
    switchPage('projects');
  });
}

const navSettings = document.getElementById('nav-settings');
if (navSettings) {
  navSettings.addEventListener('click', () => {
    switchPage('profile');
  });
}

const navSignout = document.getElementById('nav-signout');
if (navSignout) {
  navSignout.addEventListener('click', () => {
    if (confirm('Disconnect from Earth-1610 neural stream and sign out?')) {
      window.location.href = 'login.html';
    }
  });
}

const notifBtn = document.getElementById('notif-btn');
if (notifBtn) {
  notifBtn.addEventListener('click', () => {
    alert('🔔 Multiverse Notifications:\n1. ⚡ New AI Drill unlocked in Interview Arena\n2. 🔥 12-Day Streak bonus active (+50 XP)\n3. 🤖 Transformer Neural Architecture lab ready');
  });
}

const headerAvatar = document.getElementById('header-avatar');
if (headerAvatar) {
  headerAvatar.addEventListener('click', () => {
    switchPage('profile');
  });
}

// Global button click delegate for Arena, Sandboxes, Shelf buttons
document.addEventListener('click', (e) => {
  const target = e.target.closest('button');
  if (!target) return;

  if (target.innerText.includes('Launch Code Arena')) {
    e.preventDefault();
    switchPage('interview-prep');
    const field = document.getElementById('chat-input-field');
    if (field) {
      field.focus();
      field.value = 'I am ready to solve the Multiverse Graph Traversal challenge. Give me the problem setup!';
    }
  } else if (target.innerText.includes('Start Design Canvas')) {
    e.preventDefault();
    switchPage('interview-prep');
    const field = document.getElementById('chat-input-field');
    if (field) {
      field.focus();
      field.value = 'Let us design the Zero-G Spaced Repetition Web Scaler architecture with Redis and WebSockets.';
    }
  } else if (target.classList.contains('neo-btn-icon-sm')) {
    e.preventDefault();
    switchPage('projects');
  }
});

if (btnCalibrate) {
  btnCalibrate.addEventListener('click', () => {
    btnCalibrate.textContent = 'Syncing...';
    btnCalibrate.style.background = '#00F0FF';
    setTimeout(() => {
      btnCalibrate.textContent = 'Calibrated 100%';
      btnCalibrate.style.background = '#00FF66';
      setTimeout(() => {
        btnCalibrate.textContent = 'Calibrate';
        btnCalibrate.style.background = '#FFE600';
      }, 2000);
    }, 800);
  });
}

// ─── SEARCH SHORTCUT & GLOBAL FILTER ────────────────────────
window.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (searchInput) searchInput.focus();
  }
});

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const activePage = document.querySelector('.page.active');
    
    // Auto navigate to course if searching
    if (query && (!activePage || activePage.id !== 'page-course')) {
      switchPage('course');
    }
    
    const filtered = COURSES.filter(c => 
      c.name.toLowerCase().includes(query) ||
      c.domain.toLowerCase().includes(query) ||
      c.creator.toLowerCase().includes(query) ||
      c.focus.toLowerCase().includes(query)
    );
    
    const fullGrid = document.getElementById('courses-full-grid');
    if (fullGrid) {
      if (filtered.length === 0) {
        fullGrid.innerHTML = `
          <div class="neo-box" style="grid-column: 1/-1; padding: 40px; text-align: center;">
            <h2 style="font-family: 'Bebas Neue'; font-size: 2rem; color: var(--neon-red);">No Dimensions Found</h2>
            <p style="color: var(--text-muted); margin-top: 8px;">Try searching for "Machine Learning", "React", "Figma", or "Python"</p>
          </div>
        `;
      } else {
        fullGrid.innerHTML = filtered.map(c => renderCourseCard(c)).join('');
      }
    }
  });
}

// ─── MOBILE MENU OVERLAY ────────────────────────────────────
if (mobileMenuBtn && sidebar) {
  let overlay = document.querySelector('.sidebar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
  }

  mobileMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('visible');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
  });
}

// ─── THEME TOGGLE (DARK / LIGHT) ─────────────────────────────
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('adaptlearn-theme', theme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}

const savedTheme = localStorage.getItem('adaptlearn-theme');
if (savedTheme) setTheme(savedTheme);

// ─── RENDER RICH COURSE CARDS ────────────────────────────────
function renderCourseCard(course) {
  const thumbUrl = `https://img.youtube.com/vi/${course.youtubeId}/hqdefault.jpg`;
  
  return `
    <div class="course-card neo-card" data-category="${course.category}" data-status="${course.status}">
      <!-- Top left of the box: Domain in Yellow Color -->
      <div class="course-card-top-tag">
        <span class="course-domain-badge">${course.domain}</span>
        <span class="course-creator-tag">👤 ${course.creator}</span>
      </div>

      <!-- Thumbnail with Video Duration / Play Overlay -->
      <div class="course-thumb-wrap">
        <img class="course-thumbnail-img" src="${thumbUrl}" alt="${course.name}" loading="lazy" onerror="this.src='hero_silhouette.jpg';">
        <a href="${course.link}" target="_blank" rel="noopener noreferrer" class="thumb-play-overlay" title="Watch on YouTube">
          <div class="play-btn-circle">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
        </a>
      </div>

      <!-- Course Body -->
      <div class="course-content-area">
        <h3 class="course-title">${course.name}</h3>
        <p class="course-focus-text"><strong>Focus:</strong> ${course.focus}</p>

        <!-- Progress Tracker -->
        <div class="course-progress-container">
          <div class="course-progress-header">
            <span>Progress: ${course.progress}%</span>
            <span class="course-status-pill status--${course.status}">${course.status.toUpperCase()}</span>
          </div>
          <div class="course-progress-bar">
            <div class="course-progress-fill" style="width:${course.progress}%;"></div>
          </div>
        </div>

        <!-- On the bottom of the box but above the button start mission: Views, Likes, Comments, and Description -->
        <div class="course-meta-bottom-box neo-box">
          <!-- Views, Likes, Comments Row -->
          <div class="course-stats-telemetry-row">
            <div class="stat-telemetry-item" title="Views">
              <span class="stat-icon">👁️</span>
              <span class="stat-val">${course.views}</span>
              <span class="stat-name">views</span>
            </div>
            <div class="stat-telemetry-item" title="Likes">
              <span class="stat-icon">👍</span>
              <span class="stat-val">${course.likes}</span>
              <span class="stat-name">likes</span>
            </div>
            <div class="stat-telemetry-item" title="Comments">
              <span class="stat-icon">💬</span>
              <span class="stat-val">${course.comments}</span>
              <span class="stat-name">comments</span>
            </div>
          </div>

          <!-- Description -->
          <div class="course-video-description">
            <p class="desc-text">${course.desc}</p>
          </div>
        </div>

        <!-- Start Mission Button -->
        <a href="${course.link}" target="_blank" rel="noopener noreferrer" class="neo-btn neo-btn--red course-start-btn">
          <span>Start Mission</span>
          <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </div>
  `;
}

function renderFullCourses(filter = 'all') {
  const fullGrid = document.getElementById('courses-full-grid');
  if (!fullGrid) return;
  const filtered = filter === 'all' 
    ? COURSES 
    : COURSES.filter(c => c.category === filter || c.status === filter);
  fullGrid.innerHTML = filtered.map(c => renderCourseCard(c)).join('');
}
renderFullCourses();

const myLearningGrid = document.getElementById('my-learning-grid');
if (myLearningGrid) {
  myLearningGrid.innerHTML = COURSES.filter(c => c.progress > 0).map(c => renderCourseCard(c)).join('');
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderFullCourses(btn.dataset.filter);
  });
});

// ─── RENDER PROJECT CARDS ────────────────────────────────────
function renderProjectCard(project) {
  return `
    <div class="project-card neo-card">
      <div class="project-thumb">${project.emoji}</div>
      <div class="project-info">
        <div class="project-name">${project.name}</div>
        <div class="project-desc">${project.desc}</div>
        <div class="project-tags">${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
      </div>
    </div>
  `;
}

const projFull = document.getElementById('projects-full-grid');
if (projFull) {
  projFull.innerHTML = PROJECTS.map(p => renderProjectCard(p)).join('');
}

// ─── RENDER SKILLS BREAKDOWN ─────────────────────────────────
const skillsEl = document.getElementById('skills-breakdown');
if (skillsEl) {
  skillsEl.innerHTML = SKILLS.map(s => `
    <div class="skill-row">
      <span class="skill-label">${s.name}</span>
      <div class="skill-bar">
        <div class="skill-bar-fill" style="width:${s.value}%; background: ${s.color}"></div>
      </div>
      <span class="skill-value">${s.value}%</span>
    </div>
  `).join('');
}

// ─── WEEKLY NEURAL OUTPUT INTERACTION ────────────────────────
const neuralFreqSelect = document.getElementById('neural-frequency-select');
if (neuralFreqSelect) {
  neuralFreqSelect.addEventListener('change', (e) => {
    const bars = document.querySelectorAll('.bar-fill');
    const isDaily = e.target.value === 'daily';
    const weeklyHeights = ['45%', '75%', '60%', '90%', '55%', '85%', '40%'];
    const dailyHeights = ['60%', '80%', '40%', '95%', '70%', '50%', '85%'];
    
    bars.forEach((bar, idx) => {
      bar.style.height = isDaily ? dailyHeights[idx] : weeklyHeights[idx];
    });
  });
}

// ─── CANVAS ANALYTICS BAR CHART ─────────────────────────────
function drawBarChart(canvasId, labels, data, colors) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;
  const padL = 40, padR = 16, padT = 16, padB = 32;
  const chartW = w - padL - padR;
  const chartH = h - padT - padB;

  ctx.clearRect(0, 0, w, h);
  const maxVal = Math.max(...data) * 1.15;
  const barWidth = chartW / data.length * 0.5;
  const gap = chartW / data.length;

  const gridLines = 4;
  ctx.strokeStyle = 'rgba(255,255,255,0.08)';
  ctx.lineWidth = 1;
  ctx.font = '11px Space Grotesk, sans-serif';
  ctx.fillStyle = '#6B6B84';
  ctx.textAlign = 'right';

  for (let i = 0; i <= gridLines; i++) {
    const y = padT + (chartH / gridLines) * i;
    const val = (maxVal - (maxVal / gridLines) * i).toFixed(1);
    ctx.beginPath();
    ctx.moveTo(padL, y);
    ctx.lineTo(w - padR, y);
    ctx.stroke();
    ctx.fillText(val + 'h', padL - 8, y + 4);
  }

  ctx.textAlign = 'center';
  data.forEach((val, i) => {
    const x = padL + gap * i + (gap - barWidth) / 2;
    const barH = (val / maxVal) * chartH;
    const y = padT + chartH - barH;

    ctx.fillStyle = colors[i % colors.length];
    ctx.fillRect(x, y, barWidth, barH);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, barWidth, barH);

    ctx.fillStyle = '#A0A0B8';
    ctx.fillText(labels[i], x + barWidth / 2, h - 8);
  });
}

function renderAnalyticsChart() {
  const barLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const barData = [2.4, 3.8, 2.1, 4.5, 3.2, 4.0, 1.8];
  const barColors = ['#00F0FF', '#FF2A55', '#00F0FF', '#FF2A55', '#00F0FF', '#FF2A55', '#00F0FF'];
  drawBarChart('analytics-bar-chart', barLabels, barData, barColors);
}

renderAnalyticsChart();

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(renderAnalyticsChart, 150);
});

// ─── PARALLAX MOUSE TRACKING ────────────────────────────────
function initParallax() {
  const layerStars = document.getElementById('layer-stars');
  const layerCity = document.getElementById('layer-cityscape');
  const layerGrid = document.getElementById('layer-comic-grid');
  const layerShards = document.getElementById('layer-shards');

  if (!layerStars && !layerCity && !layerGrid && !layerShards) return;

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function animate() {
    currentX += (mouseX - currentX) * 0.06;
    currentY += (mouseY - currentY) * 0.06;

    if (layerStars) layerStars.style.transform = `translate3d(${currentX * -10}px, ${currentY * -10}px, 0)`;
    if (layerCity) layerCity.style.transform = `translate3d(${currentX * -18}px, ${currentY * -6}px, 0)`;
    if (layerGrid) layerGrid.style.transform = `translate3d(${currentX * 8}px, ${currentY * 8}px, 0)`;
    if (layerShards) layerShards.style.transform = `translate3d(${currentX * 22}px, ${currentY * 22}px, 0)`;

    requestAnimationFrame(animate);
  }
  animate();
}
initParallax();

// ─── AI INTERVIEW COACH CHAT LOGIC ──────────────────────────
const chatForm = document.getElementById('chat-input-form');
const chatField = document.getElementById('chat-input-field');
const chatThread = document.getElementById('chat-messages-thread');

function appendChatMessage(sender, text, isUser = false) {
  if (!chatThread) return;
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${isUser ? 'chat-msg--user' : 'chat-msg--bot'}`;
  
  msgDiv.innerHTML = `
    <div class="chat-avatar ${isUser ? 'avatar--user' : 'avatar--bot'}">${isUser ? 'M' : '🕷️'}</div>
    <div class="chat-bubble neo-box">
      <div class="chat-sender">${sender} <span class="chat-timestamp">Just now</span></div>
      <p>${text}</p>
    </div>
  `;
  
  chatThread.appendChild(msgDiv);
  chatThread.scrollTop = chatThread.scrollHeight;
}

function handleInterviewBotResponse(userPrompt) {
  setTimeout(() => {
    let response = '';
    const q = userPrompt.toLowerCase();
    
    if (q.includes('graph') || q.includes('cycle')) {
      response = `⚡ <strong>Great query on Graph Cycle Detection!</strong><br><br>In a directed graph, use <strong>DFS with 3-color coloring (White, Gray, Black)</strong> or <strong>Kahn's Topological Sort algorithm</strong> (in-degree tracking). If you encounter a Gray node during DFS traversal, a back-edge exists, confirming a directed cycle with <code>O(V + E)</code> time complexity!`;
    } else if (q.includes('cache') || q.includes('lru')) {
      response = `🧠 <strong>System Design Drill: Distributed LRU Cache</strong><br><br>Optimal architecture combines a <strong>Doubly Linked List</strong> (for O(1) node eviction/promotion) with a <strong>Hash Map</strong> (for O(1) key lookups). For multi-node distributed scale, partition across nodes using <strong>Consistent Hashing</strong> and write-through Redis nodes!`;
    } else if (q.includes('transformer') || q.includes('attention') || q.includes('learning')) {
      response = `🤖 <strong>Transformer Neural Drill:</strong><br><br>Self-attention computes <code>Softmax(Q * K^T / sqrt(d_k)) * V</code> allowing every token in Earth-1610 clusters to attend to all other tokens concurrently, resolving the vanishing gradient and sequential bottlenecks of traditional RNNs!`;
    } else {
      response = `🎯 <strong>Solid technical response, Miles!</strong> Your dimensional reasoning is sharp. Consider analyzing the <em>Space-Time complexity tradeoffs</em> and edge conditions for production environments. What's your next interview focus area?`;
    }
    
    appendChatMessage('M.O.D.E.L. Interview AI', response, false);
  }, 750);
}

if (chatForm && chatField) {
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatField.value.trim();
    if (!text) return;
    
    appendChatMessage('Miles Morales', text, true);
    chatField.value = '';
    handleInterviewBotResponse(text);
  });
}

document.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('quick-reply-btn')) {
    const replyText = e.target.dataset.reply || e.target.innerText;
    appendChatMessage('Miles Morales', replyText, true);
    handleInterviewBotResponse(replyText);
  }
});

console.log('⚡ ADAPTLEARN Multiverse Courses and AI Interview Coach initialized.');

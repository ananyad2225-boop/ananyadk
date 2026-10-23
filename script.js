/**
 * Portfolio Interactive Scripts
 * Ananya D K - AI & ML Engineer
 */

document.addEventListener('DOMContentLoaded', () => {
  // ---------------------------------------------------------------------------
  // 1. Theme Management (Dark / Light)
  // ---------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const currentTheme = storedTheme || (systemPrefersDark ? 'dark' : 'dark'); // Default dark
  document.body.setAttribute('data-theme', currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
      showToast(`Switched to ${nextTheme} mode`);
    });
  }

  // ---------------------------------------------------------------------------
  // 2. Mobile Menu Navigation
  // ---------------------------------------------------------------------------
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on click outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 3. Smooth Scroll Spy & Active Nav Highlighting
  // ---------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  
  function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (correspondingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          correspondingLink.classList.add('active');
        } else {
          correspondingLink.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  // ---------------------------------------------------------------------------
  // 4. Scroll To Top Floating Button
  // ---------------------------------------------------------------------------
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 320) {
      scrollTopBtn?.classList.add('visible');
    } else {
      scrollTopBtn?.classList.remove('visible');
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 5. Project Filtering
  // ---------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ---------------------------------------------------------------------------
  // 6. Project Modal Deep Dive Data
  // ---------------------------------------------------------------------------
  const projectData = {
    analyzer: {
      badge: 'AI & NLP Project',
      badgeClass: 'badge-ai',
      title: 'AI Presentation Analyzer',
      tagline: 'Automated Feedback & Presentation Intelligence System',
      description: 'An AI-powered presentation critique platform developed to assist students and speakers in refining their verbal delivery, pacing, structure, and stage presence.',
      problem: 'Many students struggle with public speaking and presentation delivery due to a lack of immediate, objective, and constructive feedback.',
      features: [
        'Automated speech-to-text transcription and verbal pacing analysis.',
        'Clarity, filler-word frequency, and timing evaluation.',
        'Objective scoring breakdown with targeted recommendations.',
        'Clean web interface for reviewing feedback reports.'
      ],
      tech: ['Python', 'Natural Language Processing', 'Web Technologies', 'Speech Analysis', 'Analytics Dashboard']
    },
    robot: {
      badge: 'IoT & Embedded Robotics',
      badgeClass: 'badge-iot',
      title: 'Gesture-Controlled Robot',
      tagline: 'Real-time Telemetric Robotics Prototype using ESP32',
      description: 'An embedded robotics system engineered with ESP32 microcontrollers that captures physical hand gestures in real-time and translates them into fluid directional commands for a motorized rover.',
      problem: 'Traditional joystick controls require dedicated hardware remotes; gesture-based systems offer intuitive, contact-free physical human-machine interaction.',
      features: [
        'Hardware sensor telemetry reading directional tilt and acceleration.',
        'Low-latency wireless signal transmission to the rover chassis.',
        'Programmed in Arduino IDE with custom motor control logic.',
        'Fail-safe stop routines when gestures fall outside valid operational ranges.'
      ],
      tech: ['ESP32', 'Arduino IDE', 'Accelerometer / Gyroscope', 'Motor Drivers', 'Embedded C++', 'IoT Prototyping']
    },
    portal: {
      badge: 'Web Application & Database',
      badgeClass: 'badge-web',
      title: 'Student Internship Portal',
      tagline: 'Centralized Opportunity & Application Management Platform',
      description: 'A full-stack web application designed to connect college students with curated internship postings, allowing candidates to search, apply, and monitor application milestones.',
      problem: 'Internship discovery across disparate platforms leads to missed opportunities and disorganised tracking for university students.',
      features: [
        'Relational MySQL schema storing verified listings and candidate profiles.',
        'Intuitive search, industry filtering, and eligibility criteria checks.',
        'Student dashboard tracking application submission status.',
        'Secure user authentication and structured backend handlers.'
      ],
      tech: ['Python', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'RESTful Endpoints']
    },
    planner: {
      badge: 'Productivity Web App',
      badgeClass: 'badge-web',
      title: 'Student Planner & Academic Suite',
      tagline: 'Academic Task Management & Study Habit Tracker',
      description: 'A responsive productivity dashboard created to help engineering students balance coursework, assignment deadlines, exam preparations, and study streaks.',
      problem: 'High academic workload often results in missed deadlines and burnout without structured task prioritization.',
      features: [
        'Dynamic task backlog with priority tags and completion indicators.',
        'Streak tracking logic to foster consistent daily study habits.',
        'Fast client-side persistence with LocalStorage for offline reliability.',
        'Clean, distraction-free user interface built with responsive CSS.'
      ],
      tech: ['JavaScript (ES6+)', 'HTML5 Semantic Layout', 'CSS3 Flex/Grid', 'LocalStorage API', 'Responsive UI']
    }
  };

  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  const modalOverlay = document.getElementById('modal-overlay');
  const detailBtns = document.querySelectorAll('.view-details-btn');

  function openProjectModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    modalBody.innerHTML = `
      <span class="modal-header-badge ${data.badgeClass}">${data.badge}</span>
      <h2 class="modal-title" id="modal-title">${data.title}</h2>
      <p class="modal-text" style="font-weight: 500; color: var(--text-primary); margin-bottom: 0.8rem;">${data.tagline}</p>
      <p class="modal-text">${data.description}</p>
      
      <h4 class="modal-section-heading"><i class="fa-solid fa-bullseye"></i> The Challenge</h4>
      <p class="modal-text">${data.problem}</p>

      <h4 class="modal-section-heading"><i class="fa-solid fa-list-check"></i> Key Capabilities</h4>
      <ul class="modal-list">
        ${data.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> <span>${f}</span></li>`).join('')}
      </ul>

      <h4 class="modal-section-heading"><i class="fa-solid fa-microchip"></i> Technologies & Tools</h4>
      <div class="modal-tech-stack">
        ${data.tech.map(t => `<span class="modal-tech-tag">${t}</span>`).join('')}
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  }

  function closeProjectModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  detailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const proj = btn.getAttribute('data-project');
      openProjectModal(proj);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeProjectModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeProjectModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // ---------------------------------------------------------------------------
  // 7. Copy To Clipboard with Toast Notification
  // ---------------------------------------------------------------------------
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;

    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-clipboard');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`);
          btn.innerHTML = '<i class="fa-solid fa-check" style="color: var(--accent-emerald);"></i>';
          setTimeout(() => {
            btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
          }, 2000);
        }).catch(err => {
          console.error('Clipboard copy failed:', err);
          showToast('Failed to copy. Please select and copy manually.');
        });
      }
    });
  });

  // ---------------------------------------------------------------------------
  // 8. Contact Form Handling
  // ---------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !subject || !message) {
        if (formStatus) {
          formStatus.className = 'form-status error';
          formStatus.textContent = 'Please fill out all required fields.';
        }
        return;
      }

      // Generate mailto link as fallback/direct send
      const mailtoLink = `mailto:ananyad2225@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Ananya,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

      if (formStatus) {
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Thank you! Opening your email client to dispatch the message...';
      }

      showToast('Opening your email client...');

      setTimeout(() => {
        window.location.href = mailtoLink;
        contactForm.reset();
        setTimeout(() => {
          if (formStatus) formStatus.textContent = '';
        }, 5000);
      }, 700);
    });
  }
});

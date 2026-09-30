// Configuration
const TOTAL_FRAMES = 240;
const LERP_FACTOR = 0.12; // Controls smooth spring inertia (lower = smoother/slower, higher = faster)

const canvas = document.getElementById('animation-canvas');
const ctx = canvas.getContext('2d');

const loader = document.getElementById('loader');
const loaderBar = document.getElementById('loader-bar');
const loaderPercent = document.getElementById('loader-percent');

const images = [];
let loadedCount = 0;

let currentFrame = 0;
let targetFrame = 0;
let isAnimationRunning = false;
let isLoaded = false;

// Format frame index: 1 -> "001", 240 -> "240"
function getFramePath(index) {
  const paddedIndex = String(index).padStart(3, '0');
  return `/ezgif-312a86b1faec8854-jpg/ezgif-frame-${paddedIndex}.jpg`;
}

// Resize Canvas for High-DPI Display
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.scale(dpr, dpr);

  // Render current frame immediately on resize
  if (isLoaded && images[Math.round(currentFrame)]) {
    renderFrame(Math.round(currentFrame));
  }
}

// Render specific frame index to Canvas with 'object-fit: cover' logic
function renderFrame(index) {
  const frameIndex = Math.min(Math.max(0, index), TOTAL_FRAMES - 1);
  const img = images[frameIndex];

  if (!img || !img.complete || img.naturalWidth === 0) return;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Calculate object-fit cover scale
  const imgRatio = img.naturalWidth / img.naturalHeight;
  const viewportRatio = viewportWidth / viewportHeight;

  let renderWidth, renderHeight;

  if (viewportRatio > imgRatio) {
    renderWidth = viewportWidth;
    renderHeight = viewportWidth / imgRatio;
  } else {
    renderHeight = viewportHeight;
    renderWidth = viewportHeight * imgRatio;
  }

  const offsetX = (viewportWidth - renderWidth) / 2;
  const offsetY = (viewportHeight - renderHeight) / 2;

  // Clear canvas and draw smooth image frame
  ctx.clearRect(0, 0, viewportWidth, viewportHeight);
  ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
}

// Update Target Frame based on window scroll progress
function updateTargetFrame() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  if (maxScroll <= 0) return;

  const scrollFraction = Math.min(Math.max(0, scrollTop / maxScroll), 1);
  targetFrame = scrollFraction * (TOTAL_FRAMES - 1);

  if (!isAnimationRunning) {
    isAnimationRunning = true;
    requestAnimationFrame(animateFrames);
  }

  updateActiveNavLink();
}

// Smooth Animation Loop using Lerp (Linear Interpolation)
function animateFrames() {
  const diff = targetFrame - currentFrame;
  currentFrame += diff * LERP_FACTOR;

  const renderedIndex = Math.round(currentFrame);
  renderFrame(renderedIndex);

  if (Math.abs(diff) > 0.005) {
    requestAnimationFrame(animateFrames);
  } else {
    currentFrame = targetFrame;
    renderFrame(Math.round(currentFrame));
    isAnimationRunning = false;
  }
}

// Update active state of Navbar Links on Scroll
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollPosition = window.scrollY + 200;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Preload All 240 Frames with Progress Tracking
function preloadImages() {
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const img = new Image();
    img.src = getFramePath(i);

    img.onload = onImageLoad;
    img.onerror = onImageLoad;

    images.push(img);
  }
}

function onImageLoad() {
  loadedCount++;
  const progress = Math.floor((loadedCount / TOTAL_FRAMES) * 100);

  if (loaderBar) loaderBar.style.width = `${progress}%`;
  if (loaderPercent) loaderPercent.textContent = `${progress}%`;

  if (loadedCount === TOTAL_FRAMES) {
    onAllImagesLoaded();
  }
}

function onAllImagesLoaded() {
  isLoaded = true;
  resizeCanvas();
  updateTargetFrame();
  renderFrame(0);

  setTimeout(() => {
    if (loader) loader.classList.add('loaded');
  }, 200);
}

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Event Listeners
window.addEventListener('resize', resizeCanvas);
window.addEventListener('scroll', updateTargetFrame, { passive: true });

// Keyboard navigation (Up/Down arrow key scrolling)
window.addEventListener('keydown', (e) => {
  const step = 100;
  if (e.key === 'ArrowDown') {
    window.scrollBy({ top: step, behavior: 'smooth' });
  } else if (e.key === 'ArrowUp') {
    window.scrollBy({ top: -step, behavior: 'smooth' });
  }
});

// Initialize
resizeCanvas();
preloadImages();

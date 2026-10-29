const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const heroVideo = document.querySelector('#hero-background-video');
const heroVideoToggle = document.querySelector('#hero-video-toggle');
const schoolLifeClips = [
  'https://videos.pexels.com/video-files/5734828/5734828-hd_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/27862411/12247080_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/8363881/8363881-hd_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/8940723/8940723-uhd_2560_1440_25fps.mp4'
];
let activeClip = 0;

heroVideo.addEventListener('ended', () => {
  activeClip = (activeClip + 1) % schoolLifeClips.length;
  heroVideo.src = schoolLifeClips[activeClip];
  heroVideo.load();
  heroVideo.play().catch(() => {});
});

heroVideoToggle.addEventListener('click', () => {
  if (heroVideo.paused) {
    heroVideo.play().catch(() => {});
    heroVideoToggle.setAttribute('aria-label', 'Pause background video');
    heroVideoToggle.setAttribute('aria-pressed', 'false');
    heroVideoToggle.firstElementChild.textContent = 'Ⅱ';
  } else {
    heroVideo.pause();
    heroVideoToggle.setAttribute('aria-label', 'Play background video');
    heroVideoToggle.setAttribute('aria-pressed', 'true');
    heroVideoToggle.firstElementChild.textContent = '▶';
  }
});

const enquiryForm = document.querySelector('#enquiry-form');
const formFeedback = document.querySelector('#form-feedback');

enquiryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formFeedback.textContent = 'Thanks for filling this out. This front-end demo does not send or store enquiries yet.';
});

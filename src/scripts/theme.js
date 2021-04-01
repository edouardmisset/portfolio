// DOM Elements
const lightButton = document.querySelector('#light');
const darkButton = document.querySelector('#dark');
const { body } = document;

// Apply the cached theme on reload
const theme = localStorage.getItem('theme');

if (theme) {
  body.classList.add(theme);
}

// Button Event Handlers
lightButton.addEventListener('click', () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
});

darkButton.addEventListener('click', () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
});

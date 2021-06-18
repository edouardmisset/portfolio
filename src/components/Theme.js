import './Theme.css';

// DOM Elements
const root = document.querySelector('#root');

// Apply the cached theme on reload
const theme = localStorage.getItem('theme');
if (theme) {
  root.classList.add(theme);
}

export default function Theme() {
  function switchTheme(e) {
    // Case light and case dark
    if (root.classList.contains('light')) {
      root.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
      e.target.textContent = '🌞';
    } else {
      root.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
      e.target.textContent = '🌝';
    }
  }

  return (
    <button
      type="button"
      id="theme-switch"
      name="theme-switch"
      className="switch"
      onClick={switchTheme}
    >
      🌝
    </button>
  );
}

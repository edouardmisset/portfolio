import './Theme.css';

// DOM Elements
const root = document.querySelector('#root');

// Apply the cached theme on reload
// const theme = localStorage.getItem('theme');
// if (theme) {
//   root.classList.add(theme);
// }

export default function Theme() {
  // Button Event Handlers
  function switchTheme() {
    // Case light and case dark
    if (root.classList.contains('light')) {
      root.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <button
      type="button"
      id="themeSwitch"
      name="theme-switch"
      className="switch"
      onClick={switchTheme}
    >
      Sun / Moon
    </button>
  );
}

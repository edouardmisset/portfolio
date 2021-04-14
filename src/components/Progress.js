import { useState, useEffect } from 'react';
import './Progress.css';

// const window = document.querySelector('window');

export default function Progress() {
  const [progressValue, setProgressValue] = useState(0);
  // const [scrollableHeight, setScrollableHeight] = useState(0);
  // const [scrolledHeight, setscrolledHeight] = useState(0);

  function handleProgressUpdate() {
    const { body } = document;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const viewportHeight = document.documentElement.clientHeight;
    const scrollableHeight = docHeight - viewportHeight;
    const scrolledHeight = window.scrollY;
    setProgressValue(scrolledHeight / scrollableHeight);
  }

  // Get the viewport height when component loads
  useEffect(() => {
    window.addEventListener('scroll', handleProgressUpdate);
  }, []);

  return (
    <>
      <progress value={progressValue} />
    </>
  );
}

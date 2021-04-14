import { useEffect, useState } from 'react';
import './Progress.css';

// const window = document.querySelector('window');

export default function Progress() {
  const [viewportHeight, setViewportHeight] = useState(0);

  // Get the viewport height when component loads
  useEffect(() => {
    const { body } = document;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    setViewportHeight(document.documentElement.clientHeight);
    console.log(viewportHeight, docHeight);
  }, []);

  function handleProgressUpdate() {
    console.log(viewportHeight);
  }

  return (
    <>
      <progress value="0" onScroll={handleProgressUpdate} />
    </>
  );
}

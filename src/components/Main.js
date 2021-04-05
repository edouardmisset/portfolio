import './Main.css';
import Contact from './Contact';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Theme from './Theme';

export default function Main() {
  return (
    <main>
      <Theme />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}

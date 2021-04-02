import './Main.css';
import Section from './Section';
import Contact from './Contact';

export default function Main() {
  return (
    <main>
      <Section className="section" sectionName="about" />
      <Section className="section" sectionName="skills" />
      <Section className="section" sectionName="portfolio" />
      <Contact />
    </main>
  );
}

import './Main.css';
import Section from './Section';

export default function Main() {
  return (
    <main>
      <Section className="section" sectionName="about" />
      <Section className="section" sectionName="skills" />
      <Section className="section" sectionName="portfolio" />
      <Section className="section" sectionName="contact" />
    </main>
  );
}

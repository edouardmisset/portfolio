import './Skills.css';
import Skill from './Skill';

export default function Skills() {
  return (
    <section>
      <h2 className="section-title" id="skills">
        Skills
      </h2>
      <h3 className="list-title">Front-End</h3>
      <ul className="list-skills">
        {/* Add icons to the language's name */}
        {/* Add gauge to the language */}
        <li className="skill-item">
          <Skill name="HTML" level="90" />
        </li>
        <li className="skill-item">
          <Skill name="CSS" level="80" />
        </li>
        <li className="skill-item">
          <Skill name="JS" level="70" />
        </li>
        <li className="skill-item">
          <Skill name="React" level="60" />
        </li>
      </ul>
      <h3 className="list-title">Back-End</h3>
      <ul className="list-skills">
        {/* Add icons to the language's name */}
        {/* Add gauge to the language */}
        <li className="skill-item">
          <Skill name="NodeJS" level="30" />
        </li>
        <li className="skill-item">
          <Skill name="Express" level="30" />
        </li>
        <li className="skill-item">
          <Skill name="SQL" level="40" />
        </li>
      </ul>
    </section>
  );
}

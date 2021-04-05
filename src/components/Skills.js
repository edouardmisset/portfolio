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
          <Skill name="HTML" level="90" color="var(--html)" />
        </li>
        <li className="skill-item">
          <Skill name="CSS" level="80" color="var(--css)" />
        </li>
        <li className="skill-item">
          <Skill name="JS" level="70" color="var(--javascript)" />
        </li>
        <li className="skill-item">
          <Skill name="React" level="60" color="var(--react)" />
        </li>
      </ul>
      <h3 className="list-title">Back-End</h3>
      <ul className="list-skills">
        {/* Add icons to the language's name */}
        {/* Add gauge to the language */}
        <li className="skill-item">
          <Skill name="NodeJS" level="30" color="var(--nodeJS)" />
        </li>
        <li className="skill-item">
          <Skill name="Express" level="30" color="var(--express)" />
        </li>
        <li className="skill-item">
          <Skill name="MySQL" level="40" color="var(--mysql)" />
        </li>
      </ul>
    </section>
  );
}

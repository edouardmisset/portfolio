import './Skills.css';
import Skill from './Skill';
import htmlIcon from '../assets/icons/HTML-icon.png';
import cssIcon from '../assets/icons/CSS-icon.png';
import jsIcon from '../assets/icons/JS-icon.png';
import reactIcon from '../assets/icons/React-icon.png';
import nodeJSIcon from '../assets/icons/nodeJS-icon.png';
import expressJSIcon from '../assets/icons/expressJS-icon.png';
import MySQLIcon from '../assets/icons/MySQL-icon.png';

export default function Skills() {
  return (
    <section>
      <h2 className="section-title" id="skills">
        Skills
      </h2>
      <h3 className="list-title">Front-End</h3>
      <ul className="list-skills">
        <li className="skill-item">
          <Skill name="HTML" level="90" color="var(--html)" icon={htmlIcon} />
        </li>
        <li className="skill-item">
          <Skill name="CSS" level="80" color="var(--css)" icon={cssIcon} />
        </li>
        <li className="skill-item">
          <Skill name="JS" level="70" color="var(--javascript)" icon={jsIcon} />
        </li>
        <li className="skill-item">
          <Skill
            name="React"
            level="60"
            color="var(--react)"
            icon={reactIcon}
          />
        </li>
      </ul>
      <h3 className="list-title">Back-End</h3>
      <ul className="list-skills">
        <li className="skill-item">
          <Skill
            name="NodeJS"
            level="30"
            color="var(--nodeJS)"
            icon={nodeJSIcon}
          />
        </li>
        <li className="skill-item">
          <Skill
            name="Express"
            level="30"
            color="var(--express)"
            icon={expressJSIcon}
          />
        </li>
        <li className="skill-item">
          <Skill
            name="MySQL"
            level="40"
            color="var(--mysql)"
            icon={MySQLIcon}
          />
        </li>
      </ul>
    </section>
  );
}

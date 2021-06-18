import './Skills.css';
import Skill from './Skill';
import htmlIcon from '../assets/icons/HTML-icon.png';
import cssIcon from '../assets/icons/CSS-icon.png';
import jsIcon from '../assets/icons/JS-icon.png';
import reactIcon from '../assets/icons/React-icon.png';
import nodeJSIcon from '../assets/icons/nodeJS-icon.png';
import expressJSIcon from '../assets/icons/expressJS-icon.png';
import MySQLIcon from '../assets/icons/MySQL-icon.png';
import postgreSQL from '../assets/icons/postgresql.png';
import mongoDB from '../assets/icons/mongodb.png';

export default function Skills() {
  return (
    <section>
      <h2 className="section-title" id="skills">
        Skills
      </h2>
      <div className="stack" id="front-end">
        <h3 className="list-title">Front-End</h3>
        <ul className="skills-list">
          <li className="skill-item">
            <Skill name="HTML" color="var(--html)" icon={htmlIcon} />
          </li>
          <li className="skill-item">
            <Skill name="CSS" color="var(--css)" icon={cssIcon} />
          </li>
          <li className="skill-item">
            <Skill name="JS" color="var(--javascript)" icon={jsIcon} />
          </li>
          <li className="skill-item">
            <Skill name="React" color="var(--react)" icon={reactIcon} />
          </li>
        </ul>
      </div>
      <div className="stack" id="back-end">
        {/* <img src={front} alt={} height="32" width="32" title={}></img> */}
        {/* <img src={back} alt={} height="32" width="32" title={}></img> */}
        <h3 className="list-title">Back-End</h3>
        <ul className="skills-list">
          <li className="skill-item">
            <Skill name="NodeJS" color="var(--nodeJS)" icon={nodeJSIcon} />
          </li>
          <li className="skill-item">
            <Skill name="Express" color="var(--express)" icon={expressJSIcon} />
          </li>
          <li className="skill-item">
            <Skill name="MySQL" color="var(--mysql)" icon={MySQLIcon} />
          </li>
          <li className="skill-item">
            <Skill
              name="PostgreSQL"
              color="var(--postgresql)"
              icon={postgreSQL}
            />
          </li>
          <li className="skill-item">
            <Skill name="MongoDB" color="var(--mongodb)" icon={mongoDB} />
          </li>
        </ul>
      </div>
    </section>
  );
}

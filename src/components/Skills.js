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
      <div className="stacks">
        <div className="stack" id="front-end">
          <div className="stack-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-monitor"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <h3 className="list-title">Front-End</h3>
          </div>
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
          <div className="stack-title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-server"
            >
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" />
              <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
            <h3 className="list-title">Back-End</h3>
          </div>
          <ul className="skills-list">
            <li className="skill-item">
              <Skill name="NodeJS" color="var(--nodeJS)" icon={nodeJSIcon} />
            </li>
            <li className="skill-item">
              <Skill
                name="Express"
                color="var(--express)"
                icon={expressJSIcon}
              />
            </li>
            <li className="skill-item">
              <Skill name="MySQL" color="var(--mysql)" icon={MySQLIcon} />
            </li>
            <li className="skill-item">
              <Skill
                name="Postgre"
                color="var(--postgresql)"
                icon={postgreSQL}
              />
            </li>
            <li className="skill-item">
              <Skill name="Mongo" color="var(--mongodb)" icon={mongoDB} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

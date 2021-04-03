import './Skills.css';

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
        <li className="skill-item">HTML</li>
        <li className="skill-item">CSS</li>
        <li className="skill-item">JS</li>
        <li className="skill-item">React</li>
      </ul>
      <h3 className="list-title">Back-End</h3>
      <ul className="list-skills">
        {/* Add icons to the language's name */}
        {/* Add gauge to the language */}
        <li className="skill-item">NodeJS</li>
        <li className="skill-item">Express</li>
        <li className="skill-item">SQL</li>
      </ul>
    </section>
  );
}

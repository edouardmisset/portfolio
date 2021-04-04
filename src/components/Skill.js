import './Skill.css';

export default function Skill({ name, level }) {
  return (
    <span className="skill" id={name}>
      <h5 className="language">{name}</h5>
      <div className="gauge">
        <div className={level} style={{ width: `${parseInt(level, 10)}%` }} />
      </div>
    </span>
  );
}

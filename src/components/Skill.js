import './Skill.css';

export default function Skill({ name, level, color, icon }) {
  return (
    <span className="skill" id={name}>
      <h5 className="language">
        <img src={icon} width="32" height="32" alt={name} title={name} />
        {name}
      </h5>
      <div className="gauge">
        <div
          className={level}
          style={{
            width: `${parseInt(level, 10)}%`,
            backgroundColor: `${color}`,
          }}
        />
      </div>
    </span>
  );
}

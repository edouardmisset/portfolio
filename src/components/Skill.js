import './Skill.css';

export default function Skill({ name, color, icon }) {
  return (
    <div
      className="skill"
      id={name}
      style={{
        backgroundColor: `${color}`,
      }}
    >
      <div className="skill-background">
        <img
          className="language-icon"
          src={icon}
          width="32"
          height="32"
          alt={name}
          title={name}
        />
        <h5 className="language">{name}</h5>
      </div>
    </div>
  );
}

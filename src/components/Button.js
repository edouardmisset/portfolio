import './Button.css';

const Button = ({ ...props }) => {
  return (
    <button
      type="button"
      id={props.id}
      name={props.name}
      className={props.class}
    >
      Click me !
    </button>
  );
};

export default Button;

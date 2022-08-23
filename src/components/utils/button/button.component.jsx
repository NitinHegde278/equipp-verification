import "./button.styles.css";

const Button = ({ clickEvent, style, children }) => {
  return (
    <button className="button-common" style={{ ...style }} onClick={clickEvent}>
      {children}
    </button>
  );
};

export default Button;

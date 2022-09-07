import "./button.styles.css";

const Button = ({ clickEvent, page, style, isDisabled, children }) => {
  return (
    <button
      className={`button-common ${page && "smallWidth"}`}
      style={{ ...style }}
      onClick={clickEvent}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;

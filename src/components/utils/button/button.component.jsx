import "./button.styles.css";

const Button = ({ clickEvent, page, style, children }) => {
  return (
    <button
      className={`button-common ${page && "smallWidth"}`}
      style={{ ...style }}
      onClick={clickEvent}
    >
      {children}
    </button>
  );
};

export default Button;

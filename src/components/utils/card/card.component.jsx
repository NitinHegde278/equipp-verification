import "./card.styles.css";

const Card = ({ title, subTitle, subText, Image, style, children }) => {
  return (
    <div
      className="card card-main d-flex flex-column align-items-center"
      style={{ ...style }}
    >
      {title && (
        <div className="card-title card-main-title">
          {title} <br /> {subTitle && <div>{subTitle}</div>}
        </div>
      )}
      {subText && <div className="card-subtitle">{subText}</div>}

      <div className="card-body d-flex flex-column align-items-center">
        {Image && <Image />}
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Card;

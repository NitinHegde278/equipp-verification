import "./card.styles.css";

const Card = ({ title, subTitle, subText, Image, children }) => {
  return (
    <div className="card d-flex flex-column align-items-center">
      {title && (
        <div className="card-title">
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

import "./card.styles.css";

const Card = ({ title, subText, image, children }) => {
  return (
    <div className="card d-flex flex-column align-items-center">
      <div className="card-title">{title}</div>
      <div className="card-subtitle">{subText}</div>
      <div className="card-body d-flex flex-column align-items-center">
        <img className="imgArt" src={image} alt={image} />
        <span>{children}</span>
      </div>
    </div>
  );
};

export default Card;

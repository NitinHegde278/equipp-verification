import Card from "../utils/card/card.component";
import { ReactComponent as NoOrderArt } from "../../assets/images/noOrderArt.svg";
import "./no-order-card.styles.css";
import Button from "../utils/button/button.component";
import { TEXT } from "../../utils/constants";

const NoOrderCard = () => {
  return (
    <Card Image={NoOrderArt}>
      <div className="main-text">{TEXT.cardNoOrderTitle}</div>
      <div className="sub-text">
        {TEXT.cardNoOrderSubtitle1}{" "}
        <div className="mobile d-inline">{TEXT.cardNoOrderMobile}</div>{" "}
        {TEXT.cardNoOrderSubtitle2}
      </div>
      <Button
        style={{
          border: `1px solid #C76537`,
          color: `#426572`,
          background: `#FFFFFF`,
        }}
      >
        GO BACK HOME
      </Button>
    </Card>
  );
};

export default NoOrderCard;

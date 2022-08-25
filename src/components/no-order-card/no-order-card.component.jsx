import Card from "../utils/card/card.component";
import { ReactComponent as NoOrderArt } from "../../assets/images/noOrderArt.svg";
import "./no-order-card.styles.css";
import Button from "../utils/button/button.component";

const NoOrderCard = () => {
  return (
    <Card Image={NoOrderArt}>
      <div className="main-text">You have not placed any order with us.</div>
      <div className="sub-text">
        Reach out to <div className="mobile d-inline">+91-987654321</div> to
        check our inventory
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

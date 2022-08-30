import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "../utils/button/button.component";
import Card from "../utils/card/card.component";
import InfoIcon from "../../assets/icons/infoIcon.svg";
import "./checkout-summary.styles.css";

const CheckoutSummary = ({ handleTitle }) => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.state);
    handleTitle("CHECKOUT");
  });

  return (
    <div className="container row checkout-container">
      <div className="col-md-8 col-sm-6 col-6 d-flex justify-content-end detail-container">
        <Card style={{ width: `90%`, height: `78vh` }} />
      </div>
      <div className="col-md-4 col-sm-6 col-6 d-flex flex-column align-items-center text-center summary-container">
        <Card style={{ width: `90%`, height: `38vh` }} />
        <div className="kyc-text">
          <img src={InfoIcon} alt="Info icon" /> &nbsp; Documents for KYC and
          Verification will be asked
        </div>
        <Button
          style={{
            background: `linear-gradient(263.44deg, #C76537 0.13%, #EF9571 30.69%, #BC5137 62.42%, #F6996B 117.66%)`,
            color: `#FFFFFF`,
            width: `90%`,
          }}
        >
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;

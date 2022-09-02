import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "../utils/button/button.component";
import Card from "../utils/card/card.component";
import InfoIcon from "../../assets/icons/infoIcon.svg";
import "./checkout-summary.styles.css";
import CheckoutCard from "../utils/checkout-card/checkout-card.component";

const CheckoutSummary = ({ handleTitle }) => {
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
    handleTitle("CHECKOUT");
  });

  return (
    <div className="container row checkout-container">
      <div className="col-md-7 d-flex justify-content-end detail-container">
        <Card style={{ width: `85%`, height: `430px` }}>
          <CheckoutCard />
        </Card>
      </div>
      <div className="col-md-5 d-flex flex-column align-items-start summary-container">
        <Card style={{ width: `70%`, height: `210px` }}>
          <div className="summary-title text-start">Order Summary</div>
          <div className="summary-block d-flex flex-row justify-content-between text-start">
            <div className="summary-content summary-header">
              <div>Monthly Rental</div>
              <div>Insurance</div>
              <div>GST - 18%</div>
            </div>
            <div className="summary-content summary-value">
              <div> ₹ {state?.monthlyRental}</div>
              <div> ₹ {state?.insurance}</div>
              <div> ₹ {state?.gst}</div>
            </div>
          </div>
          <div className="total-block d-flex flex-row justify-content-between text-start">
            <div className="total">Total Amount</div>
            <div className="amount">
              ₹ {state?.monthlyRental + state?.insurance + state?.gst}
            </div>
          </div>
          <div className="paying text-end">paying for 1 month</div>
        </Card>
        <div className="kyc-text">
          <img src={InfoIcon} alt="Info icon" /> &nbsp; Documents for KYC and
          Verification will be asked
        </div>
        <Button
          style={{
            background: `linear-gradient(263.44deg, #C76537 0.13%, #EF9571 30.69%, #BC5137 62.42%, #F6996B 117.66%)`,
            color: `#FFFFFF`,
            width: `70%`,
          }}
        >
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;

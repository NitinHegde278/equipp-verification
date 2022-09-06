import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../utils/button/button.component";
import InfoIcon from "../../assets/icons/infoIcon.svg";
import "./checkout-summary.styles.css";
import CheckoutCard from "../utils/checkout-card/checkout-card.component";
import { TEXT } from "../../utils/constants";

const CheckoutSummary = ({ handleTitle }) => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    handleTitle("CHECKOUT");
  }, [state, handleTitle]);

  const handleContinue = () => {
    navigate("/layout/checkoutAddress", { state: state });
  };

  return (
    <div className="container row checkout-container">
      <div className="col-md-7 d-flex justify-content-end detail-container">
        <div className="card detail-card">
          <CheckoutCard order={state} />
        </div>
      </div>
      <div className="col-md-5 d-flex flex-column align-items-start summary-container">
        <div className="card summary-card">
          <div className="card-title summary-title text-start">
            {TEXT.checkoutSummaryTitle}
          </div>
          <div className="container summary-block d-flex flex-row justify-content-between text-start">
            <div className="summary-content summary-header">
              <div>{TEXT.checkoutSummaryMonthly}</div>
              <div>{TEXT.checkoutSummaryInsurance}</div>
              <div>{TEXT.checkoutSummaryGST}</div>
            </div>
            <div className="summary-content summary-value">
              <div> ₹ {state?.monthlyRental}</div>
              <div> ₹ {state?.insurance}</div>
              <div> ₹ {state?.gst}</div>
            </div>
          </div>
          <div className="container total-block d-flex flex-row justify-content-between text-start">
            <div className="total">{TEXT.checkoutSummaryTotal}</div>
            <div className="amount">
              ₹ {state?.monthlyRental + state?.insurance + state?.gst}
            </div>
          </div>
          <div className="paying text-end">{TEXT.checkoutSummaryPaying}</div>
        </div>
        <div className="kyc-text">
          <img src={InfoIcon} alt="Info icon" /> &nbsp;{" "}
          {TEXT.checkoutSummaryKYC}
        </div>
        <Button
          style={{
            background: `linear-gradient(263.44deg, #C76537 0.13%, #EF9571 30.69%, #BC5137 62.42%, #F6996B 117.66%)`,
            color: `#FFFFFF`,
            width: `65%`,
          }}
          clickEvent={handleContinue}
        >
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;

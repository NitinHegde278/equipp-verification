import LaptopPlaceholder from "../../../assets/images/LaptopPlaceholder2.png";
import { TEXT } from "../../../utils/constants";
import "./checkout-card.styles.css";

const CheckoutCard = ({ order }) => {
  const handleClose = () => {
    window.history.back();
  };

  return (
    <div className="container checkout-card-container">
      <div className="card-group checkout-card row">
        <div className="card d-flex justify-content-center image-box">
          <img
            className="img"
            src={LaptopPlaceholder}
            alt="Laptop placeholder"
          />
        </div>
        <div className="card detail-box">
          <div className="card-title checkout-title d-flex">
            {order?.productName}
          </div>
          <div className="btn-close close" onClick={handleClose}></div>
          <div>
            <div className="amount text-start">
              Rs. {order?.monthlyRental + order?.insurance + order?.gst}
            </div>
            <div className="installment d-flex gap-1">
              {TEXT.checkoutCardInstallment1}
              <div className="content">
                {order?.paymentCycleDone + 1}
                {order?.paymentCycleDone + 1 === 1
                  ? "st"
                  : order?.paymentCycleDone + 1 === 2
                  ? "nd"
                  : order?.paymentCycleDone + 1 === 3
                  ? "rd"
                  : "th"}
              </div>
              {TEXT.checkoutCardInstallment2}
            </div>
          </div>
          <div className="card-footer d-flex gap-1">
            {TEXT.checkoutCardCycle}{" "}
            <div className="content">
              {order?.paymentCycleDone + 1}/{order?.paymentCycleTotal}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;

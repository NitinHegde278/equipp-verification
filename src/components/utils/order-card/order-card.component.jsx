import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DownOrangeArrow from "../../../assets/icons/downOrangeArrow.svg";
import LaptopPlaceholder from "../../../assets/images/LaptopPlaceholder2.png";
import { MONTH, TEXT } from "../../../utils/constants";
import Button from "../button/button.component";
import "./order-card.styles.css";

const OrderCard = ({ order }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const dueDate = new Date(parseInt(order?.nextDue));
  const startDate = new Date(parseInt(order?.startDate));
  const endDate = new Date(parseInt(order?.endDate));

  const handleShow = () => {
    setShow(!show);
  };

  const handlePayNow = () => {
    navigate("/layout/checkoutSummary", { state: order });
  };

  return (
    <div className="container card-container">
      <div className="card-group order-card row">
        <div
          className={`card d-flex justify-content-center image-container ${
            !show && "border-style"
          }`}
        >
          <img
            className="img img-fluid"
            src={LaptopPlaceholder}
            alt="Laptop placeholder"
          />
        </div>
        <div className={`card main-container ${!show && "border-style"}`}>
          <div className="card-title order-title">{order?.productName}</div>
          <div className="card-body">
            <div className="payment-cycle">
              {TEXT.orderCardPaymentCycle}{" "}
              <div className="d-inline content">
                {order?.paymentCycleDone}/{order?.paymentCycleTotal}
              </div>
            </div>
            <div className="next-due">
              {TEXT.orderCardNextDue} {dueDate.getDate() < 10 && "0"}
              {dueDate.getDate()} {MONTH[dueDate.getMonth()]}
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between order-footer">
            <div className="show" onClick={handleShow}>
              {show ? "Show Less" : "Show More"}{" "}
              <img
                src={DownOrangeArrow}
                className={show ? "show-less" : "show-more"}
                alt="Up Arrow"
              />
            </div>
            <div className="pay-now">
              <Button
                style={{
                  border: `1px solid #C76537`,
                  color: `#426572`,
                  background: `#FFFFFF`,
                  width: `70px`,
                  height: `25px`,
                  fontSize: `10px`,
                  borderRadius: `5px`,
                }}
                clickEvent={handlePayNow}
              >
                PAY NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`card row d-flex justify-content-center mid-details ${
          !show && "d-none"
        }`}
      >
        <div className="mid-container">
          <div className="d-flex flex-row justify-content-between text-start mid-header">
            <div className="box">{TEXT.orderCardPrice}</div>
            <div className="box">{TEXT.orderCardQty}</div>
            <div className="box">{TEXT.orderCardRentalPeriod}</div>
          </div>
          <div className="d-flex flex-row justify-content-between text-start mid-value">
            <div className="box">
              Rs. {order?.monthlyRental + order?.insurance + order?.gst}
              <div className="per-month">{TEXT.orderCardPerMonth}</div>
            </div>
            <div className="box">{order?.productQuantity} Unit</div>
            <div className="box">{order?.paymentCycleTotal} Months</div>
          </div>
        </div>
      </div>
      <div
        className={`card row end-details d-flex justify-content-center ${
          !show && "d-none"
        }`}
      >
        <div className="end-container d-flex flex-row">
          <div className="end-container1 d-flex flex-row text-start">
            <div className="end-header">
              <div>{TEXT.orderCardMonthly}</div>
              <div>{TEXT.orderCardInsurance}</div>
              <div>{TEXT.orderCardGST}</div>
            </div>
            <div className="end-value">
              <div> ₹ {order?.monthlyRental}</div>
              <div> ₹ {order?.insurance}</div>
              <div> ₹ {order?.gst}</div>
            </div>
          </div>
          <div className="end-container2 d-flex flex-row">
            <div className="end-header end-date-header text-start">
              <div>{TEXT.orderCardStartDate}</div>
              <div>{TEXT.orderCardEndDate}</div>
              <div>{TEXT.orderCardBillingDate}</div>
            </div>
            <div className="end-value end-dates text-end">
              <div>
                {startDate.getDate() < 10 && "0"}
                {startDate.getDate()} {MONTH[startDate.getMonth()].slice(0, 3)}{" "}
                {startDate.getFullYear()}
              </div>
              <div>
                {endDate.getDate() < 10 && "0"}
                {endDate.getDate()} {MONTH[endDate.getMonth()].slice(0, 3)}{" "}
                {endDate.getFullYear()}
              </div>
              <div>{dueDate.getDate()}th Every Month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

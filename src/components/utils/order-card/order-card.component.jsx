import { useState } from "react";
import DownOrangeArrow from "../../../assets/icons/downOrangeArrow.svg";
import UpOrangeArrow from "../../../assets/icons/upOrangeArrow.svg";
import LaptopPlaceholder from "../../../assets/images/LaptopPlaceholder2.png";
import "./order-card.styles.css";

const OrderCard = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="container card-container">
      <div className="card-group row">
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
          <div className="card-body"></div>
          <div className="card-footer show" onClick={handleShow}>
            {show ? "Show Less" : "Show More"} &nbsp;
            {show ? (
              <img src={UpOrangeArrow} alt="Up Arrow" />
            ) : (
              <img src={DownOrangeArrow} alt="Down Arrow" />
            )}
          </div>
        </div>
      </div>
      <div className={`card row mid-details ${!show && "d-none"}`}></div>
      <div className={`card row end-details ${!show && "d-none"}`}></div>
    </div>
  );
};

export default OrderCard;

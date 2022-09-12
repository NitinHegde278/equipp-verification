import { useEffect } from "react";
import { TEXT } from "../../utils/constants";
import Card from "../utils/card/card.component";
import { ReactComponent as ChooseAddressArt } from "../../assets/images/ChooseAddressArt.svg";
import LocationIcon from "../../assets/icons/locationIcon.svg";
import GreenRightArrow from "../../assets/icons/greenRightArrow.svg";
import "./checkout-address.styles.css";
import Button from "../utils/button/button.component";
import { useNavigate } from "react-router";

const CheckoutAddress = ({ handleTitle }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/layout/chooseType");
  };

  useEffect(() => {
    handleTitle("");
  });

  return (
    <Card title={TEXT.checkoutAddressTitle} Image={ChooseAddressArt}>
      <div className="container d-flex address-container">
        <div className="location-icon">
          <img src={LocationIcon} alt="Location icon" />
        </div>
        <div className="text-start address">{TEXT.checkoutAddressInfo}</div>
      </div>
      <Button
        style={{
          border: `1px solid #C76537`,
          color: `#426572`,
          background: `#FFFFFF`,
        }}
        clickEvent={handleNavigation}
      >
        CONTINUE &nbsp;
        <img src={GreenRightArrow} alt="arrow" />
      </Button>
    </Card>
  );
};

export default CheckoutAddress;

import { useEffect } from "react";
import { ADDRESS_INFO, TEXT } from "../../utils/constants";
import Card from "../utils/card/card.component";
import { ReactComponent as ChooseAddressArt } from "../../assets/images/ChooseAddressArt.svg";
import LocationIcon from "../../assets/icons/locationIcon.svg";
import GreenRightArrow from "../../assets/icons/greenRightArrow.svg";
import "./checkout-address.styles.css";
import Button from "../utils/button/button.component";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { UserDataContext } from "../../contexts/user-data.context";

const CheckoutAddress = ({ handleTitle }) => {
  const navigate = useNavigate();
  const { addressSelect, changeInput } = useContext(UserDataContext);

  const handleNavigation = () => {
    navigate("/layout/chooseType");
  };

  useEffect(() => {
    handleTitle("");
  });

  const handleAddressSelect = (addressId) => {
    changeInput("addressSelect", addressId);
  };

  return (
    <Card title={TEXT.checkoutAddressTitle} Image={ChooseAddressArt}>
      <div className="address-container">
        {ADDRESS_INFO.map((address) => {
          return (
            <div
              className={`container d-flex address-box ${
                addressSelect === address?.addressId && "isActive"
              }`}
              key={address?.addressId}
              onClick={() => handleAddressSelect(address?.addressId)}
            >
              <div className="location-icon">
                <img src={LocationIcon} alt="Location icon" />
              </div>
              <div className="text-start address">{address?.address}</div>
            </div>
          );
        })}
      </div>

      <Button
        style={{
          border: `1px solid #C76537`,
          color: `#426572`,
          background: `#FFFFFF`,
          width: `100%`,
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

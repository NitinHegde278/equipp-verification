import Button from "../utils/button/button.component";
import { ReactComponent as MobileArt } from "../../assets/images/mobileArt.svg";
import GreenRightArrow from "../../assets/icons/greenRightArrow.svg";
import Card from "../utils/card/card.component";
import "./mobile-card.styles.css";
import { useContext } from "react";
import { UserDataContext } from "../../contexts/user-data.context";
import { useNavigate } from "react-router-dom";

const MobileCard = () => {
  const navigate = useNavigate();
  const { mobileNumber, changeInput } = useContext(UserDataContext);

  const handleChange = (event) => {
    event.preventDefault();
    const input = event.target;
    changeInput(input.name, input.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Mock case: If the user already exists (Mock backend response)
    if (mobileNumber === "1234567891") {
      const mockResponse = {
        mobileNumber: "1234567891",
        fullName: "Nitin Hegde",
        emailId: "test123@gmail.com",
        otp: "123456",
      };
      changeInput("fullName", mockResponse.fullName);
      changeInput("emailId", mockResponse.emailId);
      changeInput("otp", mockResponse.otp);
      navigate("/layout/otp");
    } else {
      changeInput("fullName", "");
      changeInput("emailId", "");
      navigate("/layout/nameEmail");
    }
  };

  return (
    <Card
      title="Enter Mobile Number to login"
      subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      Image={MobileArt}
    >
      <form className="mobile-form" onSubmit={handleSubmit}>
        <div className="form-group d-flex flex-column align-items-center">
          <input
            id="mobileNumber"
            name="mobileNumber"
            className="form-control"
            type="text"
            value={mobileNumber}
            placeholder="Enter mobile number"
            onChange={handleChange}
            minLength="10"
            maxLength="10"
            pattern="[1-9]{1}[0-9]{9}"
            required
          />
        </div>
        <Button
          style={{
            border: `1px solid #C76537`,
            color: `#426572`,
            background: `#FFFFFF`,
          }}
        >
          CONTINUE &nbsp;
          <img src={GreenRightArrow} alt="arrow" />
        </Button>
      </form>
    </Card>
  );
};

export default MobileCard;

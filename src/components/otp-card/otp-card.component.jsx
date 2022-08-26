import { useCallback, useContext, useEffect, useState } from "react";
import { ReactComponent as OtpArt } from "../../assets/images/otpArt.svg";
import { UserDataContext } from "../../contexts/user-data.context";
import GreenRightArrow from "../../assets/icons/greenRightArrow.svg";
import Button from "../utils/button/button.component";
import Card from "../utils/card/card.component";
import "./otp-card.styles.css";
import { useNavigate } from "react-router-dom";

const OtpCard = () => {
  const navigate = useNavigate();
  const { fullName, mobileNumber, emailId, otp } = useContext(UserDataContext);
  const [otpObj, setOtpObj] = useState({});
  const [otpError, setOtpError] = useState("");
  const [timer, setTimer] = useState(60);
  const timeOutCallback = useCallback(
    () => setTimer((currTimer) => currTimer - 1),
    []
  );

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);

  const maskedMobileNumber = mobileNumber.replace(
    mobileNumber.substring(2, 9),
    "*******"
  );

  const maskedEmailId = emailId.replace(emailId.substring(2, 6), "****");

  useEffect(() => {
    const otpField = document.querySelectorAll(".otp-field");
    otpField.forEach((otpElement, index) => {
      otpElement.dataset.id = index;

      otpElement.addEventListener("keyup", () => {
        if (otpElement.value.length === 1) {
          if (otpField[otpField.length - 1].value.length === 1) return;
          otpField[parseInt(otpElement.dataset.id) + 1].focus();
        }
      });
    });
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setOtpError("");
    const input = event.target;
    setOtpObj({ ...otpObj, [input.dataset.id]: input.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (otp === Object.values(otpObj).join("")) {
      navigate("/layout/orders");
    } else {
      setOtpError("The OTP entered is wrong. Please try again");
    }
  };

  return (
    <Card
      title={"Hello!"}
      subTitle={fullName}
      subText={`Please enter the OTP sent to +91${maskedMobileNumber} & ${maskedEmailId}`}
      Image={OtpArt}
    >
      <form className="otp-form" onSubmit={handleSubmit}>
        <div className="otp-container d-flex flex-row">
          <div className="form-group d-flex flex-column align-items-center">
            <input
              className="otp-field form-control"
              type="text"
              onChange={handleChange}
              minLength="1"
              maxLength="1"
              pattern="[0-9]"
              required
            />
          </div>
          <div className="form-group d-flex flex-column align-items-center">
            <input
              className="otp-field form-control"
              type="text"
              onChange={handleChange}
              minLength="1"
              maxLength="1"
              pattern="[0-9]"
              required
            />
          </div>
          <div className="form-group d-flex flex-column align-items-center">
            <input
              className="otp-field form-control"
              type="text"
              onChange={handleChange}
              minLength="1"
              maxLength="1"
              pattern="[0-9]"
              required
            />
          </div>
          <div className="form-group d-flex flex-column align-items-center">
            <input
              className="otp-field form-control"
              type="text"
              onChange={handleChange}
              minLength="1"
              maxLength="1"
              pattern="[0-9]"
              required
            />
          </div>
          <div className="form-group d-flex flex-column align-items-center">
            <input
              className="otp-field form-control"
              type="text"
              onChange={handleChange}
              minLength="1"
              maxLength="1"
              pattern="[0-9]"
              required
            />
          </div>
          <div className="form-group d-flex flex-column align-items-center">
            <input
              className="otp-field form-control"
              type="text"
              onChange={handleChange}
              minLength="1"
              maxLength="1"
              pattern="[0-9]"
              required
            />
          </div>
        </div>

        <div className="otp-resend">
          I haven't recieved a code (0:{timer < 10 && 0}
          {timer})
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
        {otpError && <div className="otp-error">{otpError}</div>}
      </form>
    </Card>
  );
};

export default OtpCard;

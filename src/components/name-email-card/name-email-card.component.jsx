import { ReactComponent as NameEmailArt } from "../../assets/images/nameEmailArt.svg";
import GreenArrow from "../../assets/images/greenArrow.svg";
import Card from "../utils/card/card.component";
import "./name-email-card.styles.css";
import Button from "../utils/button/button.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../contexts/user-data.context";

const NameEmailCard = () => {
  const navigate = useNavigate();
  const { fullName, emailId, changeInput } = useContext(UserDataContext);

  const handleChange = (event) => {
    event.preventDefault();
    const input = event.target;
    changeInput(input.name, input.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Assuming the otp will be coming from backend response (Mock backend)
    const mockResponse = {
      otp: "123456",
    };
    changeInput("otp", mockResponse.otp);
    navigate("/layout/otp");
  };

  return (
    <Card
      title="Enter Name & Email Id"
      subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      Image={NameEmailArt}
    >
      <form className="name-email-form" onSubmit={handleSubmit}>
        <div className="form-group d-flex flex-column align-items-center">
          <input
            id="fullName"
            name="fullName"
            className="form-control"
            type="text"
            value={fullName}
            placeholder="Enter full name"
            onChange={handleChange}
            minLength="3"
            maxLength="25"
            pattern="[a-zA-Z\s]+"
            required
          />
        </div>
        <div className="form-group d-flex flex-column align-items-center">
          <input
            id="emailId"
            name="emailId"
            className="form-control"
            type="email"
            value={emailId}
            placeholder="Enter Email ID"
            onChange={handleChange}
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
          <img src={GreenArrow} alt="arrow" />
        </Button>
      </form>
    </Card>
  );
};

export default NameEmailCard;

import { ReactComponent as ChooseTypeLogo } from "../../assets/images/ChooseTypeLogo.svg";
import { CHOOSE_TYPE, TEXT } from "../../utils/constants";
import Card from "../utils/card/card.component";
import GreenRightArrow from "../../assets/icons/greenRightArrow.svg";
import "./choose-type.styles.css";
import Button from "../utils/button/button.component";
import { useContext, useEffect } from "react";
import { VerificationContext } from "../../contexts/verification.context";
import { useNavigate } from "react-router";

const ChooseType = ({ handleTitle }) => {
  const navigate = useNavigate();
  const { typeSelect, changeInput } = useContext(VerificationContext);

  useEffect(() => {
    handleTitle("");
  });

  const handleNavigation = () => {
    navigate(`/layout/verificationAnchor/${CHOOSE_TYPE[typeSelect]}`);
  };

  const handleChange = (event) => {
    const input = event.target;
    let value;
    if (input.innerHTML === "STUDENT") {
      value = 1;
    } else if (input.innerHTML === "INDIVIDUAL PROFESSIONAL") {
      value = 2;
    } else if (input.innerHTML === "PARTNERSHIP FIRM") {
      value = 3;
    } else {
      value = 4;
    }
    changeInput("typeSelect", value);
  };

  return (
    <Card>
      <ChooseTypeLogo height={90} />
      <div className="choose-type d-flex flex-column align-items-center gap-3">
        <div className="type-title">{TEXT.chooseTypeTitle}</div>
        <div className="type-subtitle">{TEXT.chooseTypeSubtitle}</div>
        <div
          className={`check ${typeSelect === 1 && "isActive"}`}
          onClick={handleChange}
        >
          STUDENT
        </div>
        <div
          className={`check ${typeSelect === 2 && "isActive"}`}
          onClick={handleChange}
        >
          INDIVIDUAL PROFESSIONAL
        </div>
        <div className="professional-subtext">
          Salaried/ Sole Proprietor/ Freelancer
        </div>
        <div
          className={`check ${typeSelect === 3 && "isActive"}`}
          onClick={handleChange}
        >
          PARTNERSHIP FIRM
        </div>
        <div
          className={`check ${typeSelect === 4 && "isActive"}`}
          onClick={handleChange}
        >
          PVT LTD / PUBLIC / LLP
        </div>
        <Button
          style={{
            border: `1px solid #C76537`,
            color: `#426572`,
            background: `#FFFFFF`,
            width: `100%`,
            height: `40px`,
          }}
          clickEvent={handleNavigation}
        >
          CONTINUE &nbsp;
          <img src={GreenRightArrow} alt="arrow" />
        </Button>
      </div>
    </Card>
  );
};

export default ChooseType;

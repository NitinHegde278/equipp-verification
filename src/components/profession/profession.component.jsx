import { TEXT } from "../../utils/constants";
import Card from "../utils/card/card.component";
import { ReactComponent as ProfessionSvg } from "../../assets/images/Profession.svg";
import "./profession.styles.css";
import GreenRightArrow from "../../assets/icons/greenRightArrow.svg";
import { useContext, useEffect } from "react";
import { VerificationContext } from "../../contexts/verification.context";
import Button from "../utils/button/button.component";
import { useNavigate, useParams } from "react-router";

const Profession = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const { professionSelect, bankStatementTerms, bankFile, changeInput } =
    useContext(VerificationContext);

  useEffect(() => {
    if (!bankStatementTerms && bankFile.size === 0) {
      navigate(`/layout/verificationAnchor/${type}/panDetails`);
    }
  });

  const handleNavigation = () => {
    if (professionSelect === 2) {
      navigate(`/layout/verificationAnchor/${type}/workEmail`);
    } else {
      changeInput("professionStatus", "done");
      changeInput("verificationStatus", "done");
      navigate(`/layout/verificationAnchor/${type}`);
    }
  };

  const handleChange = (event) => {
    const input = event.target;
    changeInput("professionSelect", input.innerHTML === "FREELANCER" ? 1 : 2);
  };

  return (
    <Card
      title={TEXT.professionTitle}
      subTitle={TEXT.professionSubtitle}
      subText={TEXT.cardSubtitle}
      Image={ProfessionSvg}
    >
      <div className="profession-check d-flex flex-column gap-2">
        <div
          className={`check prof-freelancer ${
            professionSelect === 1 && "isActive"
          }`}
          onClick={handleChange}
        >
          FREELANCER
        </div>
        <div
          className={`check prof-salaried ${
            professionSelect === 2 && "isActive"
          }`}
          onClick={handleChange}
        >
          SALARIED
        </div>
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
    </Card>
  );
};

export default Profession;

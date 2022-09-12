import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import GreenRightArrow from "../../assets/icons/greenRightArrow.svg";
import { ReactComponent as WorkEmailSvg } from "../../assets/images/workEmail.svg";
import { VerificationContext } from "../../contexts/verification.context";
import { TEXT } from "../../utils/constants";
import Button from "../utils/button/button.component";
import Card from "../utils/card/card.component";
import "./work-email.styles.css";

const WorkEmail = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const { workEmail, bankFile, bankStatementTerms, changeInput } =
    useContext(VerificationContext);

  useEffect(() => {
    if (!bankStatementTerms && bankFile.size === 0) {
      navigate(`/layout/verificationAnchor/${type}/panDetails`);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (workEmail.length > 0) {
      changeInput("professionStatus", "done");
    } else {
      changeInput("professionalStatus", "fail");
    }
    navigate(`/layout/verificationAnchor/${type}`);
  };

  const handleChange = (event) => {
    const input = event.target;
    changeInput(input.name, input.value);
  };

  return (
    <Card
      title={TEXT.workEmailTitle}
      subText={TEXT.cardSubtitle}
      Image={WorkEmailSvg}
    >
      <form className="work-email-form" onSubmit={handleSubmit}>
        <div className="form-group d-flex flex-column align-items-center">
          <input
            id="workEmail"
            name="workEmail"
            className="form-control"
            type="email"
            value={workEmail}
            placeholder="Enter email id"
            onChange={handleChange}
            required
          />
        </div>
        <Button
          style={{
            border: `1px solid #C76537`,
            color: `#426572`,
            background: `#FFFFFF`,
            height: `40px`,
          }}
        >
          VERIFY &nbsp;
          <img src={GreenRightArrow} alt="arrow" />
        </Button>
      </form>
    </Card>
  );
};

export default WorkEmail;

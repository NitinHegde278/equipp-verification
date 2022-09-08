import { TEXT } from "../../utils/constants";
import Card from "../utils/card/card.component";
import { ReactComponent as VerifyBankSvg } from "../../assets/images/VerifyBank.svg";
import "./verify-bank.styles.css";
import { useContext } from "react";
import { VerificationContext } from "../../contexts/verification.context";
import GreenRightArrow from "../../assets/icons/greenRightArrow.svg";
import Button from "../utils/button/button.component";
import { useNavigate, useParams } from "react-router";

const VerifyBank = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const { verifyPassword, changeInput } = useContext(VerificationContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (verifyPassword.length !== 0) {
      changeInput("bankStatementStatus", "done");
    } else {
      changeInput("bankStatementStatus", "fail");
    }
    navigate(`/layout/verificationAnchor/${type}`);
  };

  const handleChange = (event) => {
    const input = event.target;
    changeInput(input.name, input.value);
  };

  return (
    <Card title={TEXT.verifyBankTitle} Image={VerifyBankSvg}>
      <form className="verify-bank-form" onSubmit={handleSubmit}>
        <div className="form-group d-flex align-items-center">
          <input
            id="verifyPassword"
            name="verifyPassword"
            className="form-control"
            type="password"
            placeholder="Enter password"
            value={verifyPassword}
            onChange={handleChange}
            required
          />
        </div>
        <Button
          style={{
            border: `1px solid #C76537`,
            color: `#426572`,
            background: `#FFFFFF`,
            width: `100%`,
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

export default VerifyBank;

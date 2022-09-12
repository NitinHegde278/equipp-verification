import { MONTH, TEXT } from "../../utils/constants";
import Card from "../utils/card/card.component";
import { ReactComponent as BankStatementSvg } from "../../assets/images/BankStatement.svg";
import GreenRightArrow from "../../assets/icons/greenRightArrow.svg";
import "./bank-statement.styles.css";
import Button from "../utils/button/button.component";
import { useContext, useEffect } from "react";
import { VerificationContext } from "../../contexts/verification.context";
import { useNavigate, useParams } from "react-router";

const BankStatement = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const {
    bankFile,
    bankStatementTerms,
    bankStatementPwd,
    dinStatus,
    selfieStatus,
    changeInput,
  } = useContext(VerificationContext);

  useEffect(() => {
    if (type === "pvtLlpPublic" && dinStatus === "pending") {
      navigate(`/layout/verificationAnchor/${type}/coPanGst`);
    } else if (
      (type === "student" || type === "workingProfessional") &&
      selfieStatus === "pending"
    ) {
      navigate(`/layout/verificationAnchor/${type}/panDetails`);
    } else if (type === "partnershipFirm" && selfieStatus === "pending") {
      navigate(`/layout/verificationAnchor/${type}/coPanGst`);
    }
  });

  const dateStringCreator = () => {
    const recentDate = new Date();
    let olderDate = new Date();
    olderDate.setMonth(olderDate.getMonth() - 6);

    return `${MONTH[olderDate.getMonth()].slice(0, 3)}
     ${String(olderDate.getFullYear()).slice(2, 4)} - ${MONTH[
      recentDate.getMonth()
    ].slice(0, 3)} ${String(recentDate.getFullYear()).slice(2, 4)}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (bankStatementTerms && bankFile.size > 0 && bankStatementPwd === 1) {
      navigate(`/layout/verificationAnchor/${type}/verifyBank`);
    } else if (bankStatementTerms && bankFile.size > 0) {
      changeInput("bankStatementStatus", "done");
      navigate(`/layout/verificationAnchor/${type}`);
    } else {
      changeInput("bankStatementStatus", "fail");
    }
  };

  const handleChange = (event) => {
    const input = event.target;
    if (input.name === "bankFile") {
      changeInput(input.name, input.files[0]);
    } else if (input.name === "bankStatementTerms") {
      changeInput(input.name, !bankStatementTerms);
    } else {
      changeInput("bankStatementPwd", input.innerHTML === "YES" ? 1 : 2);
    }
  };

  const handleFileUpload = () => {
    document.getElementById("bankFile").click();
  };

  return (
    <Card
      title={TEXT.bankStatementTitle}
      subText={TEXT.bankStatementSubtitle}
      Image={BankStatementSvg}
      bankDate={dateStringCreator()}
    >
      <form className="bank-details-form" onSubmit={handleSubmit}>
        <div className="form-group custom-file-button d-flex align-items-center">
          <input
            accept=".pdf,.jpeg,.png"
            id="bankFile"
            name="bankFile"
            className="form-control"
            type="file"
            onChange={handleChange}
            required
          />
          <div
            className="bank-box d-flex justify-content-between align-items-center p-2"
            onClick={handleFileUpload}
          >
            <div className="text d-flex">
              {bankFile.name ? bankFile.name : TEXT.panDetailsFileInput} &nbsp;
              <div className="bank-required">*</div>
            </div>
            <div className="bank-add">+</div>
          </div>
        </div>
        <div className="bank-file-label">{TEXT.bankStatementFileText}</div>
        <div className="pwd-protected">{TEXT.bankStatementPwdProtected}</div>
        <div className="pwd-checkbox d-flex justify-content-center gap-2">
          <div
            className={`check pwd-yes ${bankStatementPwd === 1 && "isActive"}`}
            onClick={handleChange}
          >
            YES
          </div>
          <div
            className={`check pwd-no ${bankStatementPwd === 2 && "isActive"}`}
            onClick={handleChange}
          >
            NO
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
          isDisabled={bankStatementTerms === false || bankFile.size === 0}
        >
          CONTINUE &nbsp;
          <img src={GreenRightArrow} alt="arrow" />
        </Button>

        <div className="form-group terms d-flex justify-content-center align-items-center gap-2">
          <input
            id="bankStatementTerms"
            name="bankStatementTerms"
            className="form-control form-check-input"
            type="checkbox"
            value={bankStatementTerms}
            onChange={handleChange}
            checked={bankStatementTerms}
            required
          />
          <div>{TEXT.bankStatementTerms}</div>
        </div>
      </form>
    </Card>
  );
};

export default BankStatement;

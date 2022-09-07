import { useNavigate, useParams } from "react-router";
import { ReactComponent as VerificationFirst } from "../../assets/images/VerificationFirst.svg";
import { TEXT } from "../../utils/constants";
import Button from "../utils/button/button.component";
import Card from "../utils/card/card.component";
import GreenRightArrow from "../../assets/icons/greenRightArrow.svg";
import GreenDone from "../../assets/icons/greenDone.svg";
import OrangeFail from "../../assets/icons/orangeFail.svg";
import "./verification-card.styles.css";
import { useContext } from "react";
import { VerificationContext } from "../../contexts/verification.context";

const VerificationCard = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const { panStatus, selfieStatus } = useContext(VerificationContext);

  const handleNavigation = () => {
    if (panStatus === "pending") {
      navigate("panDetails");
    } else if (selfieStatus === "pending") {
      navigate("selfie");
    }
  };

  return (
    <Card title={TEXT.verificationCardTitle} Image={VerificationFirst}>
      <div className="ver-card-container">
        {(type === "pvtLlpPublic" || type === "partnershipFirm") && (
          <div className="box pan-gst">
            <div className="content">{TEXT.verificationCardPanGST}</div>
            <div className="status">Pending</div>
          </div>
        )}
        {type !== "pvtLlpPublic" && (
          <div className="box pan-details">
            <div className="content">{TEXT.verificationCardPan}</div>
            <div className="status">
              {panStatus === "pending" ? (
                "Pending"
              ) : panStatus === "done" ? (
                <img src={GreenDone} alt="success" />
              ) : (
                <img src={OrangeFail} alt="fail" />
              )}
            </div>
          </div>
        )}
        {type !== "pvtLlpPublic" && (
          <div className="box take-selfie">
            <div className="content">{TEXT.verificationCardSelfie}</div>
            <div className="status">
              {selfieStatus === "pending" ? (
                "Pending"
              ) : selfieStatus === "done" ? (
                <img src={GreenDone} alt="success" />
              ) : (
                <img src={OrangeFail} alt="fail" />
              )}
            </div>
          </div>
        )}
        {(type === "workingProfessional" || type === "student") && (
          <div className="box bank-details">
            <div className="content">{TEXT.verificationCardBank}</div>
            <div className="status">Pending</div>
          </div>
        )}
        {type === "workingProfessional" && (
          <div className="box choose-profession">
            <div className="content">{TEXT.verificationCardProfession}</div>
            <div className="status">Pending</div>
          </div>
        )}
        {type === "pvtLlpPublic" && (
          <div className="box din">
            <div className="content">{TEXT.verificationCardDIN}</div>
            <div className="status">Pending</div>
          </div>
        )}
        {(type === "pvtLlpPublic" || type === "partnershipFirm") && (
          <div className="box co-bank">
            <div className="content">{TEXT.verificationCardCoBank}</div>
            <div className="status">Pending</div>
          </div>
        )}
      </div>

      <Button
        clickEvent={handleNavigation}
        style={{
          border: `1px solid #C76537`,
          color: `#426572`,
          background: `#FFFFFF`,
        }}
      >
        CONTINUE &nbsp;
        <img src={GreenRightArrow} alt="arrow" />
      </Button>
      <div className="verification-footer">{TEXT.verificationCardFooter}</div>
    </Card>
  );
};

export default VerificationCard;

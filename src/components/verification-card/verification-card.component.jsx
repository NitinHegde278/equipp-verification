import { useNavigate, useParams } from "react-router";
import { ReactComponent as VerificationFirst } from "../../assets/images/VerificationFirst.svg";
import { ReactComponent as VerificationInProcess } from "../../assets/images/VerificationInProcess.svg";
import { ReactComponent as VerificationFailed } from "../../assets/images/VerificationFailed.svg";
import { ReactComponent as VerificationSuccess } from "../../assets/images/VerificationSuccess.svg";
import { TEXT } from "../../utils/constants";
import Button from "../utils/button/button.component";
import Card from "../utils/card/card.component";
import GreenRightArrow from "../../assets/icons/greenRightArrow.svg";
import LogoutBlack from "../../assets/icons/logoutBlack.svg";
import "./verification-card.styles.css";
import { useContext } from "react";
import { VerificationContext } from "../../contexts/verification.context";
import InputStatus from "../utils/input-status/input.status.component";
import { useEffect } from "react";
import { verificationStatusProvider } from "../../utils/helper";

const VerificationCard = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const {
    verificationStatus,
    panStatus,
    selfieStatus,
    bankStatementStatus,
    professionStatus,
    coPanGstStatus,
    dinStatus,
    changeInput,
  } = useContext(VerificationContext);

  useEffect(() => {
    if (type !== "workingProfessional" && bankStatementStatus !== "pending") {
      verificationStatusProvider(
        changeInput,
        type,
        panStatus,
        selfieStatus,
        bankStatementStatus,
        professionStatus,
        coPanGstStatus,
        dinStatus
      );
    } else if (
      type === "workingProfessional" &&
      professionStatus !== "pending"
    ) {
      verificationStatusProvider(
        changeInput,
        type,
        panStatus,
        selfieStatus,
        bankStatementStatus,
        professionStatus,
        coPanGstStatus,
        dinStatus
      );
    }
    // eslint-disable-next-line
  }, [bankStatementStatus, professionStatus]);

  const handleLogout = () => {
    navigate("/layout/mobile");
  };

  const handleNavigation = () => {
    switch (type) {
      case "student":
        if (panStatus === "pending") {
          navigate("panDetails");
        } else if (selfieStatus === "pending") {
          navigate("selfie");
        } else if (bankStatementStatus === "pending") {
          navigate("bankStatement");
        }
        break;
      case "workingProfessional":
        if (panStatus === "pending") {
          navigate("panDetails");
        } else if (selfieStatus === "pending") {
          navigate("selfie");
        } else if (bankStatementStatus === "pending") {
          navigate("bankStatement");
        } else if (professionStatus === "pending") {
          navigate("profession");
        }
        break;
      case "partnershipFirm":
        if (coPanGstStatus === "pending") {
          navigate("coPanGst");
        } else if (panStatus === "pending") {
          navigate("panDetails");
        } else if (selfieStatus === "pending") {
          navigate("selfie");
        } else if (bankStatementStatus === "pending") {
          navigate("bankStatement");
        }
        break;
      case "pvtLlpPublic":
        if (coPanGstStatus === "pending") {
          navigate("coPanGst");
        } else if (dinStatus === "pending") {
          navigate("directorDin");
        } else if (bankStatementStatus === "pending") {
          navigate("bankStatement");
        }
        break;
      default:
        break;
    }
  };

  return (
    <Card
      title={TEXT.verificationCardTitle}
      Image={
        verificationStatus === "pending"
          ? VerificationFirst
          : verificationStatus === "process"
          ? VerificationInProcess
          : verificationStatus === "done"
          ? VerificationSuccess
          : VerificationFailed
      }
    >
      <img
        src={LogoutBlack}
        alt="Logout"
        className="img logout-img"
        onClick={handleLogout}
      />
      <div className="ver-card-container">
        {(type === "pvtLlpPublic" || type === "partnershipFirm") && (
          <div
            className={`box pan-gst ${
              type === "partnershipFirm" && "box-size"
            }`}
          >
            <div className="content">{TEXT.verificationCardPanGST}</div>
            <div className="status">
              <InputStatus input={coPanGstStatus} />
            </div>
          </div>
        )}
        {type !== "pvtLlpPublic" && (
          <div
            className={`box pan-details ${
              type === "workingProfessional" && "box-size"
            }`}
          >
            <div className="content">{TEXT.verificationCardPan}</div>
            <div className="status">
              <InputStatus input={panStatus} />
            </div>
          </div>
        )}
        {type !== "pvtLlpPublic" && (
          <div className="box take-selfie">
            <div className="content">{TEXT.verificationCardSelfie}</div>
            <div className="status">
              <InputStatus input={selfieStatus} />
            </div>
          </div>
        )}
        {(type === "workingProfessional" || type === "student") && (
          <div className="box bank-details">
            <div className="content">{TEXT.verificationCardBank}</div>
            <div className="status">
              <InputStatus input={bankStatementStatus} />
            </div>
          </div>
        )}
        {type === "workingProfessional" && (
          <div className="box choose-profession">
            <div className="content">{TEXT.verificationCardProfession}</div>
            <div className="status">
              <InputStatus input={professionStatus} />
            </div>
          </div>
        )}
        {type === "pvtLlpPublic" && (
          <div className="box din">
            <div className="content">{TEXT.verificationCardDIN}</div>
            <div className="status">
              <InputStatus input={dinStatus} />
            </div>
          </div>
        )}
        {(type === "pvtLlpPublic" || type === "partnershipFirm") && (
          <div className="box co-bank">
            <div className="content">{TEXT.verificationCardCoBank}</div>
            <div className="status">
              <InputStatus input={bankStatementStatus} />
            </div>
          </div>
        )}
      </div>

      <Button
        clickEvent={handleNavigation}
        style={{
          border: `1px solid #C76537`,
          color: `#426572`,
          background: `#FFFFFF`,
          width: `100%`,
          height: `45px`,
        }}
      >
        {verificationStatus === "pending" ? (
          <>
            CONTINUE &nbsp;
            <img src={GreenRightArrow} alt="arrow" />
          </>
        ) : verificationStatus === "process" ? (
          <>
            VERIFICATION IN PROCESS &nbsp;
            <img src={GreenRightArrow} alt="arrow" />
          </>
        ) : verificationStatus === "done" ? (
          "VIEW ORDER SUMMARY"
        ) : (
          "VERIFICATION FAILED"
        )}
      </Button>
      <div className="verification-footer">
        {verificationStatus === "pending" || verificationStatus === "process"
          ? TEXT.verificationCardFooter1
          : verificationStatus === "done"
          ? TEXT.verificationCardFooter2
          : TEXT.verificationCardFooter3}
      </div>
    </Card>
  );
};

export default VerificationCard;

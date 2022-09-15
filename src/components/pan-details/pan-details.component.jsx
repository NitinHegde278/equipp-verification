import { TEXT } from "../../utils/constants";
import Card from "../utils/card/card.component";
import { ReactComponent as PANDetailsSvg } from "../../assets/images/PANDetails.svg";
import { ReactComponent as PartnerPanSvg } from "../../assets/images/PartnerPan.svg";
import "./pan-details.styles.css";
import GreenRightArrow from "../../assets/icons/greenRightArrow.svg";
import InputErrorIcon from "../../assets/icons/inputError.svg";
import Button from "../utils/button/button.component";
import { useContext, useEffect } from "react";
import { VerificationContext } from "../../contexts/verification.context";
import { useNavigate, useParams } from "react-router";

const PanDetails = () => {
  const {
    changeInput,
    panMobileNumber,
    coPanGstStatus,
    panFile,
    panFileError,
  } = useContext(VerificationContext);
  const navigate = useNavigate();
  const { type } = useParams();

  useEffect(() => {
    if (type === "partnershipFirm" && coPanGstStatus === "pending") {
      navigate(`/layout/verificationAnchor/${type}/coPanGst`);
    }
  });

  const handleChange = (event) => {
    event.preventDefault();
    const input = event.target;
    if (input.name === "panFile") {
      changeInput(input.name, input.files[0]);
      if (input.files[0].size === 0) {
        changeInput("panFileError", true);
      } else {
        changeInput("panFileError", false);
      }
    } else {
      changeInput(input.name, input.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    changeInput("verificationStatus", "process");
    if (panMobileNumber.length === 10 && panFile.size > 0 && !panFileError) {
      changeInput("panStatus", "done");
    } else {
      changeInput("panStatus", "fail");
    }
    navigate(`/layout/verificationAnchor/${type}/selfie`);
  };

  const handleFileUpload = () => {
    document.getElementById("panFile").click();
  };

  return (
    <Card
      title={
        type === "partnershipFirm" ? TEXT.partnerPanTitle : TEXT.panDetailsTitle
      }
      subTitle={type === "partnershipFirm" && TEXT.partnerPanSubtitle}
      subText={
        type === "partnershipFirm"
          ? TEXT.partnerPanSubText
          : TEXT.panDetailsSubtitle
      }
      Image={type === "partnershipFirm" ? PartnerPanSvg : PANDetailsSvg}
    >
      <form className="pan-details-form" onSubmit={handleSubmit}>
        {panFileError && (
          <div className="pan-error text-start">{TEXT.wrongInput}</div>
        )}

        <div className="form-group custom-file-button d-flex align-items-center">
          <input
            accept="application/pdf,image/png,image/jpeg"
            id="panFile"
            name="panFile"
            className="form-control"
            type="file"
            onChange={handleChange}
            required
          />
          <div
            className="pan-box d-flex justify-content-between align-items-center p-2"
            onClick={handleFileUpload}
          >
            <div className="text d-flex">
              {panFile.name ? panFile.name : TEXT.panDetailsFileInput} &nbsp;
              <div className="pan-required">*</div>
            </div>
            <div className="pan-add">
              {!panFileError ? "+" : <img src={InputErrorIcon} alt="error" />}
            </div>
          </div>
        </div>
        <div className="pan-file-label">{TEXT.panDetailsFileText}</div>
        <div className="form-group d-flex align-items-center">
          <input
            id="panMobileNumber"
            name="panMobileNumber"
            className="form-control"
            type="text"
            value={panMobileNumber}
            placeholder="Enter mobile number linked to PAN Card"
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
            width: `100%`,
            height: `40px`,
          }}
        >
          CONTINUE &nbsp;
          <img src={GreenRightArrow} alt="arrow" />
        </Button>
      </form>
    </Card>
  );
};

export default PanDetails;

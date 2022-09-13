import { TEXT } from "../../utils/constants";
import Card from "../utils/card/card.component";
import { ReactComponent as PANDetailsSvg } from "../../assets/images/PANDetails.svg";
import { ReactComponent as PartnerPanSvg } from "../../assets/images/PartnerPan.svg";
import "./pan-details.styles.css";
import GreenRightArrow from "../../assets/icons/greenRightArrow.svg";
import Button from "../utils/button/button.component";
import { useContext, useEffect } from "react";
import { VerificationContext } from "../../contexts/verification.context";
import { useNavigate, useParams } from "react-router";

const PanDetails = () => {
  const { changeInput, panMobileNumber, coPanGstStatus, panFile } =
    useContext(VerificationContext);
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
    } else {
      changeInput(input.name, input.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (panMobileNumber.length === 10 && panFile.size > 0) {
      changeInput("verificationStatus", "process");
      changeInput("panStatus", "done");
    } else {
      changeInput("verificationStatus", "fail");
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
        <div className="form-group custom-file-button d-flex align-items-center">
          <input
            accept=".pdf,.jpeg,.png"
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
            <div className="pan-add">+</div>
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

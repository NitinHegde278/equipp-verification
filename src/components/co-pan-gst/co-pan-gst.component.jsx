import { TEXT } from "../../utils/constants";
import Card from "../utils/card/card.component";
import { ReactComponent as CoPanGstSvg } from "../../assets/images/CoPanGst.svg";
import GreenRightArrow from "../../assets/icons/greenRightArrow.svg";
import "./co-pan-gst.styles.css";
import Button from "../utils/button/button.component";
import { useNavigate, useParams } from "react-router";
import { useContext } from "react";
import { VerificationContext } from "../../contexts/verification.context";

const CoPanGst = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const { coPan, coGst, changeInput } = useContext(VerificationContext);

  const handleChange = (event) => {
    const input = event.target;
    changeInput(input.name, input.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (coPan.length > 0 && coGst.length > 0) {
      changeInput("coPanGstStatus", "done");
      changeInput("verificationStatus", "process");
      if (type === "pvtLlpPublic") {
        navigate(`/layout/verificationAnchor/${type}/directorDin`);
      } else {
        navigate(`/layout/verificationAnchor/${type}/panDetails`);
      }
    } else {
      changeInput("verificationStatus", "fail");
      changeInput("coPanGstStatus", "fail");
      if (type === "pvtLlpPublic") {
        navigate(`/layout/verificationAnchor/${type}/directorDin`);
      } else {
        navigate(`/layout/verificationAnchor/${type}/panDetails`);
      }
    }
  };

  return (
    <Card title={TEXT.coPanGstTitle} Image={CoPanGstSvg}>
      <form className="coPanGst-form" onSubmit={handleSubmit}>
        <div className="form-group d-flex align-items-center">
          <input
            id="coPan"
            name="coPan"
            className="form-control"
            type="text"
            value={coPan}
            placeholder="Enter company PAN card number"
            onChange={handleChange}
            minLength="10"
            maxLength="10"
            required
          />
        </div>
        <div className="form-group d-flex align-items-center">
          <input
            id="coGst"
            name="coGst"
            className="form-control"
            type="text"
            value={coGst}
            placeholder="Enter company GST number"
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
          CONTINUE &nbsp;
          <img src={GreenRightArrow} alt="arrow" />
        </Button>
      </form>
    </Card>
  );
};

export default CoPanGst;

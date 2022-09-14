import { TEXT } from "../../utils/constants";
import Card from "../utils/card/card.component";
import { ReactComponent as DirectorDinSvg } from "../../assets/images/DirectorDin.svg";
import "./director-din.styles.css";
import GreenRightArrow from "../../assets/icons/greenRightArrow.svg";
import { useNavigate, useParams } from "react-router";
import Button from "../utils/button/button.component";
import { useContext, useEffect } from "react";
import { VerificationContext } from "../../contexts/verification.context";

const DirectorDin = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const { dinNumber, coPanGstStatus, changeInput } =
    useContext(VerificationContext);

  useEffect(() => {
    if (coPanGstStatus === "pending") {
      navigate(`/layout/verificationAnchor/${type}/coPanGst`);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (dinNumber.length > 0) {
      changeInput("dinStatus", "done");
    } else {
      changeInput("dinStatus", "fail");
    }
    navigate(`/layout/verificationAnchor/${type}/bankStatement`);
  };

  const handleChange = (event) => {
    const input = event.target;
    changeInput(input.name, input.value);
  };

  return (
    <Card title={TEXT.directorDinTitle} Image={DirectorDinSvg}>
      <form className="director-din-form" onSubmit={handleSubmit}>
        <div className="form-group d-flex align-items-center">
          <input
            id="dinNumber"
            name="dinNumber"
            className="form-control"
            type="text"
            placeholder="Enter DIN number"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group d-flex align-items-center">
          <input
            id="employeeSelect"
            name="employeeSelect"
            className="form-control"
            type="text"
            placeholder="Select the number of employees *"
            minLength="1"
            pattern="[1-9][0-9]*"
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
            width: `100%`,
          }}
        >
          CONTINUE &nbsp;
          <img src={GreenRightArrow} alt="arrow" />
        </Button>
      </form>
    </Card>
  );
};

export default DirectorDin;

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
    navigate(`/layout/verificationAnchor/${type}`);
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
          <select
            id="employeeSelect"
            name="employeeSelect"
            className="form-control form-select"
            onChange={handleChange}
            required
          >
            <option value="select" selected disabled>
              Select the number of employees *
            </option>
            <option value={1}>1-10</option>
            <option value={2}>11-50</option>
            <option value={3}>51-200</option>
          </select>
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

export default DirectorDin;

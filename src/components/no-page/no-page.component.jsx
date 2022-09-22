import Card from "../utils/card/card.component";
import { ReactComponent as NoPageArt } from "../../assets/images/404Art.svg";
import "./no-page.styles.css";
import { TEXT } from "../../utils/constants";
import Button from "../utils/button/button.component";
import { useNavigate } from "react-router";

const NoPage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };
  return (
    <Card Image={NoPageArt}>
      <div className="no-page-container d-flex flex-column align-items-center justify-content-center">
        <div className="main-text">{TEXT.noPageTitle}</div>
        <div className="sub-text">
          {TEXT.cardNoOrderSubtitle1}{" "}
          <div className="mobile d-inline">{TEXT.cardNoOrderMobile}</div>{" "}
          {TEXT.cardNoOrderSubtitle2}
        </div>
        <Button
          style={{
            border: `1px solid #C76537`,
            color: `#426572`,
            background: `#FFFFFF`,
          }}
          clickEvent={handleNavigation}
        >
          GO BACK HOME
        </Button>
      </div>
    </Card>
  );
};

export default NoPage;

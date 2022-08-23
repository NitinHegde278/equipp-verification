import "./onboard.styles.css";
import GroupLogo from "../../assets/images/GrouplogoTop.svg";
import MainLogo from "../../assets/images/mainLogo.svg";
import Button from "../utils/button/button.component";
import Arrow from "../../assets/images/arrow.svg";
import ArtBoard from "../../assets/images/Artboard.svg";
import { useNavigate } from "react-router-dom";

const Onboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/layout/mobile");
  };

  return (
    <div className="row container-fluid">
      <div className="left-panel col-md-5 d-flex flex-column align-items-center">
        <img className="group-logo" src={GroupLogo} alt="Group Logo" />
        <img className="main-logo" src={MainLogo} alt="Equipp logo" />
        <span className="sub-content">
          If you are part of our beta version,click below to start your journey
        </span>
        <span className="button-continue">
          <Button
            clickEvent={handleClick}
            style={{
              background: `linear-gradient(263.44deg, #C76537 0.13%, #EF9571 30.69%, #BC5137 62.42%, #F6996B 117.66%)`,
              color: `#FFFFFF`,
            }}
          >
            CONTINUE &nbsp;
            <img src={Arrow} alt="arrow" />
          </Button>
        </span>
      </div>
      <div className="right-panel col-md-7 d-flex flex-column">
        <img className="art-board" src={ArtBoard} alt="Art Board" />
        <span className="main-content">
          Get tech when you want, As long as you want
        </span>
        <span className="bottom-text">
          Are you a Freelancer? Startup? Gamer? <br />
          We have something for all your requirements
        </span>
      </div>
    </div>
  );
};

export default Onboard;

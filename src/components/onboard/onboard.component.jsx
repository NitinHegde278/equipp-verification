import "./onboard.styles.css";
import GroupLogo from "../../assets/images/GrouplogoTop.svg";
import LoadingGif from "../../assets/images/loading.gif";
import MainLogo from "../../assets/images/mainLogo.svg";
import Button from "../utils/button/button.component";
import RightArrow from "../../assets/icons/rightArrow.svg";
import { ReactComponent as ArtBoard } from "../../assets/images/Artboard.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TEXT } from "../../utils/constants";

const Onboard = () => {
  const navigate = useNavigate();
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleClick = () => {
    navigate("/layout/mobile");
  };

  const handleEventListener = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleEventListener);
    return () => {
      window.removeEventListener("resize", handleEventListener);
    };
  }, [screenSize]);

  return (
    <div className="row container-fluid onboard-container">
      <div className="left-panel col-12 col-sm-4 col-md-5 col-lg-5 d-flex flex-column align-items-center">
        <img className="img group-logo" src={LoadingGif} alt="Group Logo" />
        <img className="main-logo" src={MainLogo} alt="Equipp logo" />
        <span className="sub-content">{TEXT.onboardSubContent}</span>
        <span className="button-continue">
          <Button
            clickEvent={handleClick}
            style={{
              background: `linear-gradient(263.44deg, #C76537 0.13%, #EF9571 30.69%, #BC5137 62.42%, #F6996B 117.66%)`,
              color: `#FFFFFF`,
            }}
            page="onboard"
          >
            CONTINUE &nbsp;
            <img src={RightArrow} alt="arrow" />
          </Button>
        </span>
      </div>
      <div className="right-panel col-0 col-sm-7 col-md-7 col-lg-7 d-flex flex-column">
        <div className="art-board">
          <ArtBoard
            width={
              screenSize <= 576
                ? "385px"
                : screenSize > 576 && screenSize < 860
                ? "485px"
                : undefined
            }
          />
        </div>
        <div className="main-content">{TEXT.onboardMainContent}</div>
        <div className="bottom-text">
          {TEXT.onboardBottomText1} <br /> {TEXT.onboardBottomText2}
        </div>
      </div>
    </div>
  );
};

export default Onboard;

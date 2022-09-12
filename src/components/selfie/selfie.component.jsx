import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { VerificationContext } from "../../contexts/verification.context";
import { TEXT } from "../../utils/constants";
import Button from "../utils/button/button.component";
import Card from "../utils/card/card.component";
import GreenRightArrow from "../../assets/icons/greenRightArrow.svg";
import "./selfie.styles.css";
import { useNavigate, useParams } from "react-router";

const Selfie = () => {
  const [capture, setCapture] = useState("");
  const [button, setButton] = useState(true);
  const { selfieImage, panStatus, changeInput } =
    useContext(VerificationContext);
  const navigate = useNavigate();
  const { type } = useParams();

  const handleNavigation = () => {
    if (selfieImage.length) {
      changeInput("selfieStatus", "done");
    } else {
      changeInput("selfieStatus", "fail");
    }
    navigate(`/layout/verificationAnchor/${type}`);
  };

  const handleCapture = () => {
    setButton(!button);
    if (button) {
      const canvas = document.getElementById("selfie-canvas");
      canvas.width = 220;
      canvas.height = 220;
      canvas
        .getContext("2d")
        .drawImage(capture, -90, -20, capture.videoWidth, capture.videoHeight);
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      changeInput("selfieImage", image);

      const stream = capture.srcObject;
      const tracks = stream.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });
    } else {
      setCapture("");
      changeInput("selfieImage", "");
    }
  };

  useEffect(() => {
    if (panStatus === "pending") {
      setTimeout(() => {
        const stream = capture.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
          track.stop();
        });
        navigate(`/layout/verificationAnchor/${type}/panDetails`);
      }, 1500);
    }
  });

  useEffect(() => {
    changeInput("selfieImage", "");
    const video = document.getElementById("selfie-video");
    const constraints = {
      video: {
        width: 320,
        height: 320,
      },
    };
    const startWebCam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
        window.stream = stream;
        setCapture(video);
      } catch (error) {
        console.error(error);
      }
    };
    startWebCam();

    // eslint-disable-next-line
  }, [capture]);

  return (
    <Card title={TEXT.selfieTitle}>
      <div className="d-flex flex-column align-items-center gap-2">
        <video
          id="selfie-video"
          className={selfieImage.length ? "hidden" : undefined}
          autoPlay
        ></video>
        <canvas
          id="selfie-canvas"
          className={!selfieImage.length ? "hidden" : undefined}
        ></canvas>
        <div className="camera-text">{TEXT.selfieSubtext}</div>
        <Button
          style={{
            border: `1px solid #C76537`,
            color: `#426572`,
            background: `#FFFFFF`,
            width: `35%`,
          }}
          clickEvent={handleCapture}
        >
          {button ? "CAPTURE" : "RETAKE"}
        </Button>
        <Button
          style={{
            border: `1px solid #C76537`,
            color: `#426572`,
            background: `#FFFFFF`,
          }}
          clickEvent={handleNavigation}
          isDisabled={!selfieImage.length}
        >
          CONTINUE &nbsp;
          <img src={GreenRightArrow} alt="arrow" />
        </Button>
      </div>
    </Card>
  );
};

export default Selfie;

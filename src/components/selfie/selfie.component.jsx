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
    navigate(`/layout/verificationAnchor/${type}/bankStatement`);
  };

  const handleCapture = () => {
    setButton(!button);
    if (button) {
      const canvas = document.getElementById("selfie-canvas");
      canvas.width = 640;
      canvas.height = 640;
      canvas
        .getContext("2d")
        .drawImage(
          capture,
          0,
          0,
          capture.videoWidth - 40,
          capture.videoHeight - 40
        );
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      changeInput("selfieImage", image);

      const tracks = capture.srcObject.getTracks();
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
        const tracks = capture.srcObject.getTracks();

        tracks.forEach((track) => {
          track.stop();
        });
        navigate(`/layout/verificationAnchor/${type}/panDetails`);
      }, 2000);
    }
  });

  useEffect(() => {
    const video = document.getElementById("selfie-video");
    const constraints = {
      video: {
        width: 640,
        height: 640,
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

    if (capture.length === 0) {
      startWebCam();
    } else {
      return () => {
        const tracks = capture.srcObject.getTracks();
        tracks.forEach((track) => {
          track.stop();
        });
      };
    }
  }, [capture]);

  return (
    <Card title={TEXT.selfieTitle}>
      <div className="selfie-form d-flex flex-column align-items-center gap-2">
        <div className="selfie-container">
          <video
            id="selfie-video"
            className={selfieImage.length ? "hidden" : undefined}
            autoPlay
          ></video>
          <canvas id="selfie-canvas" hidden></canvas>
          <img
            src={selfieImage}
            className={`img selfie-image ${
              !selfieImage.length ? "hidden" : undefined
            }`}
            alt="selfie"
          />
        </div>

        <div className="camera-text">{TEXT.selfieSubtext}</div>
        <Button
          style={{
            border: `1px solid #C76537`,
            color: `#426572`,
            background: `#FFFFFF`,
            width: `40%`,
            height: `40px`,
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
            width: `100%`,
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

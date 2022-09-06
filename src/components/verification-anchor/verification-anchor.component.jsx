import { useEffect } from "react";
import "./verification-anchor.styles.css";
import { Route, Routes, useParams } from "react-router";
import PanDetails from "../pan-details/pan-details.component";
import VerificationCard from "../verification-card/verification-card.component";
import NoPage from "../no-page/no-page.component";

const VerificationAnchor = ({ handleTitle }) => {
  const { "*": param } = useParams();
  const type = param.split("/")[0];

  useEffect(() => {
    switch (type) {
      case "student":
        handleTitle("STUDENT");
        break;
      case "workingProfessional":
        handleTitle("WORKING PROFESSIONAL");
        break;
      case "partnershipFirm":
        handleTitle("PARTNERSHIP FIRM");
        break;
      case "pvtLlpPublic":
        handleTitle("PVT LTD/ LLP/ PUBLIC");
        break;
      default:
        handleTitle("");
        break;
    }
  }, [type, handleTitle]);

  return (
    <Routes>
      <Route index path="/:type" element={<VerificationCard />} />
      <Route path=":type/panDetails" element={<PanDetails />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default VerificationAnchor;

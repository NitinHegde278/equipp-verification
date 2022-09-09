import { useEffect } from "react";
import "./verification-anchor.styles.css";
import { Route, Routes, useParams } from "react-router";
import PanDetails from "../pan-details/pan-details.component";
import VerificationCard from "../verification-card/verification-card.component";
import NoPage from "../no-page/no-page.component";
import Selfie from "../selfie/selfie.component";
import BankStatement from "../bank-statement/bank-statement.component";
import VerifyBank from "../verify-bank/verify-bank.component";
import Profession from "../profession/profession.component";
import WorkEmail from "../work-email/work-email.component";
import CoPanGst from "../co-pan-gst/co-pan-gst.component";
import DirectorDin from "../director-din/director-din.component";

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
      <Route path=":type/selfie" element={<Selfie />} />
      <Route path=":type/bankStatement" element={<BankStatement />} />
      <Route path=":type/verifyBank" element={<VerifyBank />} />
      <Route path=":type/profession" element={<Profession />} />
      <Route path=":type/workEmail" element={<WorkEmail />} />
      <Route path=":type/coPanGst" element={<CoPanGst />} />
      <Route path=":type/directorDin" element={<DirectorDin />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default VerificationAnchor;

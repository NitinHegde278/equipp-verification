import { lazy, useEffect } from "react";
import "./verification-anchor.styles.css";
import { Route, Routes, useParams } from "react-router";

const PanDetails = lazy(() => import("../pan-details/pan-details.component"));
const VerificationCard = lazy(() =>
  import("../verification-card/verification-card.component")
);
const NoPage = lazy(() => import("../no-page/no-page.component"));
const Selfie = lazy(() => import("../selfie/selfie.component"));
const BankStatement = lazy(() =>
  import("../bank-statement/bank-statement.component")
);
const VerifyBank = lazy(() => import("../verify-bank/verify-bank.component"));
const Profession = lazy(() => import("../profession/profession.component"));
const WorkEmail = lazy(() => import("../work-email/work-email.component"));
const CoPanGst = lazy(() => import("../co-pan-gst/co-pan-gst.component"));
const DirectorDin = lazy(() =>
  import("../director-din/director-din.component")
);

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

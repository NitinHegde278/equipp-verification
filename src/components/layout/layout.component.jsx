import { lazy } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import GroupLogo from "../../assets/images/GrouplogoTop.svg";
import "./layout.styles.css";

const MobileCard = lazy(() => import("../mobile-card/mobile-card.component"));
const NameEmailCard = lazy(() =>
  import("../name-email-card/name-email-card.component")
);
const OtpCard = lazy(() => import("../otp-card/otp-card.component"));
const NoPage = lazy(() => import("../no-page/no-page.component"));

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="row container-fluid d-flex flex-column">
      <div className="d-flex">
        <img
          className="side-logo"
          src={GroupLogo}
          alt="Group logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="d-flex flex-row justify-content-center">
        <Routes>
          <Route index path="mobile" element={<MobileCard />} />
          <Route path="nameEmail" element={<NameEmailCard />} />
          <Route path="otp" element={<OtpCard />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;

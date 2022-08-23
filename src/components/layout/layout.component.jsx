import { Route, Routes } from "react-router-dom";
import GroupLogo from "../../assets/images/GrouplogoTop.svg";
import MobileCard from "../mobile-card/mobile-card.component";
import OtpCard from "../otp-card/otp-card.component";
import "./layout.styles.css";

const Layout = () => {
  // const navigate = useNavigate();

  // const handleNavigation = () => {
  //     navigate('/layout/otp');
  // };

  return (
    <div className="row container-fluid d-flex flex-column">
      <div className="d-flex">
        <img className="side-logo" src={GroupLogo} alt="Group logo" />
      </div>
      <div className="d-flex flex-row justify-content-center">
        <Routes>
          <Route index path="mobile" element={<MobileCard />} />
          <Route path="otp" element={<OtpCard />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;

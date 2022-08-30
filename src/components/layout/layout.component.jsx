import { lazy, useCallback, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import GroupLogo from "../../assets/images/GrouplogoTop.svg";
import CheckoutSummary from "../checkout-summary/checkout-summary.component";
import "./layout.styles.css";

const MobileCard = lazy(() => import("../mobile-card/mobile-card.component"));
const NameEmailCard = lazy(() =>
  import("../name-email-card/name-email-card.component")
);
const OtpCard = lazy(() => import("../otp-card/otp-card.component"));
const NoPage = lazy(() => import("../no-page/no-page.component"));
const Orders = lazy(() => import("../orders/orders.component"));

const Layout = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const handleTitle = useCallback((title) => {
    setTitle(title);
  }, []);

  return (
    <div className="container-fluid d-flex flex-column layout-container">
      <div
        className={`d-flex align-items-center header-container ${
          title === "CHECKOUT" && "header-background"
        }`}
      >
        <img
          className="side-logo"
          src={GroupLogo}
          alt="Group logo"
          onClick={() => navigate("/")}
        />
        {title && <div data-testid="title">{title}</div>}
      </div>
      <div className="d-flex flex-row justify-content-center layout-card">
        <Routes>
          <Route
            index
            path="mobile"
            element={<MobileCard handleTitle={handleTitle} />}
          />
          <Route
            path="nameEmail"
            element={<NameEmailCard handleTitle={handleTitle} />}
          />
          <Route path="otp" element={<OtpCard handleTitle={handleTitle} />} />
          <Route path="orders" element={<Orders handleTitle={handleTitle} />} />
          <Route
            path="checkoutSummary"
            element={<CheckoutSummary handleTitle={handleTitle} />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;

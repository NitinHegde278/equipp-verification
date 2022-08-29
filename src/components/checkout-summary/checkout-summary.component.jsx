import { useLocation } from "react-router-dom";
import "./checkout-summary.styles.css";

const CheckoutSummary = () => {
  const location = useLocation();
  console.log(location.state);
  return <div>CheckoutSummary</div>;
};

export default CheckoutSummary;

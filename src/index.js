import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserDataProvider } from "./contexts/user-data.context";
import { OrdersProvider } from "./contexts/orders.context";
import { VerificationProvider } from "./contexts/verification.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserDataProvider>
        <VerificationProvider>
          <OrdersProvider>
            <App />
          </OrdersProvider>
        </VerificationProvider>
      </UserDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

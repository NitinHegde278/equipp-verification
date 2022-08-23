import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout.component";
import "./App.css";
import Onboard from "./components/onboard/onboard.component";
import NoPage from "./components/no-page/no-page.component";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<Onboard />} />
        <Route path="layout/*" element={<Layout />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default App;

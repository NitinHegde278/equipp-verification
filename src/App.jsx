import { Routes, Route } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import Loader from "./components/utils/loader/loader.component";

const Onboard = lazy(() => import("./components/onboard/onboard.component"));
const Layout = lazy(() => import("./components/layout/layout.component"));
const NoPage = lazy(() => import("./components/no-page/no-page.component"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="App d-flex justify-content-center align-items-center">
        <Routes>
          <Route index path="/" element={<Onboard />} />
          <Route path="layout/*" element={<Layout />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;

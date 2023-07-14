import LayoutMobile from "./components/Mobile/Layout/Layout";
import LayoutDesktop from "./components/Desktop/Layout/Layout";
import { useMediaQuery } from "react-responsive";
import { Route, Routes } from "react-router-dom";
import PersonalMobile from "./components/Mobile/Personal/Personal";
import PlanMobile from "./components/Mobile/Plan/Plan";
import AddonsMobile from "./components/Mobile/Addons/Addons";
import FinishMobile from "./components/Mobile/Finish/Finish";
import ProcessedMobile from "./components/Mobile/Processed/Processed";

import PersonalDesktop from "./components/Desktop/Personal/Personal";
import PlanDesktop from "./components/Desktop/Plan/Plan";
import AddonsDesktop from "./components/Desktop/Addons/Addons";
import FinishDesktop from "./components/Desktop/Finish/Finish";
import ProcessedDesktop from "./components/Desktop/Processed/Processed";
const App = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:400px)",
  });

  return (
    <Routes>
      <Route path="/" element={isMobile ? <LayoutMobile /> : <LayoutDesktop />}>
        <Route
          index
          path="/"
          element={isMobile ? <PersonalMobile /> : <PersonalDesktop />}
        />
        <Route
          path="/plans"
          element={isMobile ? <PlanMobile /> : <PlanDesktop />}
        />
        <Route
          path="/addons"
          element={isMobile ? <AddonsMobile /> : <AddonsDesktop />}
        />
        <Route
          path="/confirm"
          element={isMobile ? <FinishMobile /> : <FinishDesktop />}
        />
        <Route
          path="/done"
          element={isMobile ? <ProcessedMobile /> : <ProcessedDesktop />}
        />
      </Route>
    </Routes>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Analyze from "../pages/Analyze";
import Results from "../pages/Results";
import Guide from "../pages/Guide";
import Contact from "../pages/Contact";
import SkinToneWorkflow from "../pages/SkinToneWorkflow";

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/results" element={<Results />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/workflow" element={<SkinToneWorkflow />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
   
  );
};

export default AppRoutes;
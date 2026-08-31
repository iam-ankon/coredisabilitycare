import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import DayPrograms from "./pages/DayPrograms.jsx";
import DayProgramDetail from "./pages/DayProgramDetail.jsx";
import GroupHomeSIL from "./pages/GroupHomeSIL.jsx";
import Respite from "./pages/Respite.jsx";
import OtherServices from "./pages/OtherServices.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="day-programs" element={<DayPrograms />} />
        <Route path="day-programs/:slug" element={<DayProgramDetail />} />
        <Route path="group-home-sil" element={<GroupHomeSIL />} />
        <Route path="respite" element={<Respite />} />
        <Route path="other-services" element={<OtherServices />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

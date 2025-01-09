import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Sidebar } from "./components/Sidebar";
import { Teams } from "./pages/Teams";
import { Sponsors } from "./pages/Sponsors";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { SoftwareTeams } from "./pages/SoftwareTeam";
import { FirmwareTeams } from "./pages/FirmwareTeam";
import { MechanicsTeam } from "./pages/MechanicsTeam";
import { ElectronicsTeam } from "./pages/ElectronicsTeam";
import { BacktoTop } from "./components/ BacktoTop";
import { BecomeSponsor } from "./pages/BecomeSponsor";
import { SponsorsLearnMore } from "./pages/SponsorLearnMore";
import ScrollToTop from "./components/ScrollToTop";
import { Join } from "./pages/Join";
import { FirstYearKickOffProgram } from "./pages/FirstYearKickOffProgram";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <div className="fixed w-screen bg-white z-50">
          {/* <div className="hidden lg:flex">
            <Sidebar />
            <BacktoTop />
          </div> */}
          <Navbar />
          <BacktoTop />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/software" element={<SoftwareTeams />} />
          <Route path="/teams/firmware" element={<FirmwareTeams />} />
          <Route path="/teams/mechanics" element={<MechanicsTeam />} />
          <Route path="/teams/electronics" element={<ElectronicsTeam />} />
          <Route path="/teams/electronics" element={<ElectronicsTeam />} />
          <Route path="/kickoff" element={<FirstYearKickOffProgram />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/sponsors/becomesponsor" element={<BecomeSponsor />} />
          <Route
            path="/sponsors/sponsorspackages"
            element={<SponsorsLearnMore />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Dashboard from "./components/DashBoard";
import ApplicationStatus from "./components/ApplicationStatus";
import OngoingProjects from "./components/OnGoingProjects";
import UtilizationState from "./components/UtilizationState.jsx";
import OperationalStatistics from "./components/OperationalStatistics";
import NicProgress from "./components/NicProgress";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applicationstatus" element={<ApplicationStatus />} />
        <Route path="/ongoingprojects" element={<OngoingProjects />} />
        <Route path="/utilizationstate" element={<UtilizationState />} />
        <Route path="/operationalstatistics" element={<OperationalStatistics />} />
        <Route path="/nicprogress" element={<NicProgress />} /> 
      </Routes>
    </Router>
  );
}

export default App;
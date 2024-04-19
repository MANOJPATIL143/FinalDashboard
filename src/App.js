import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Dashboard from "./components/DashBoard";
import ApplicationStatus from "./components/ApplicationStatus";
import OngoingProjects from "./components/OnGoingProjects";
import UtilizationState from "./components/UtilizationState.jsx";
import OperationalStatistics from "./components/OperationalStatistics";
import NicProgress from "./components/NicProgress";
import LoginPage from "./components/LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setLoggedIn={handleLogin} />}
          />
          <Route
            path="/*"
            element={<ProtectedRoutes loggedIn={loggedIn} handleLogout={handleLogout} />}
          />
        </Routes>
      </>
    </Router>
  );
}

const ProtectedRoutes = ({ loggedIn, handleLogout }) => {
  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header handleLogout={handleLogout} />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applicationstatus" element={<ApplicationStatus />} />
        <Route path="/ongoingprojects" element={<OngoingProjects />} />
        <Route path="/utilizationstate" element={<UtilizationState />} />
        <Route
          path="/operationalstatistics"
          element={<OperationalStatistics />}
        />
        <Route path="/nicprogress" element={<NicProgress />} />
      </Routes>
    </>
  );
};

export default App;

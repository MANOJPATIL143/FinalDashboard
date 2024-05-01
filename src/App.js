import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
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
  const [language, setLanguage] = useState("en"); // Default language is English
  const { i18n } = useTranslation(); // Get i18n instance

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
    window.location.href = "/login";
  };

  const changeLanguage = (lng) => {
    setLanguage(lng); // Update language state
    i18n.changeLanguage(lng); // i18n will automatically handle the language change
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
            element={<ProtectedRoutes loggedIn={loggedIn} handleLogout={handleLogout} changeLanguage={changeLanguage} />}
          />
        </Routes>
      </>
    </Router>
  );
}

const ProtectedRoutes = ({ loggedIn, handleLogout, changeLanguage }) => {
  const { t } = useTranslation(); // Get translation function

  if (!loggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {/* <button onClick={() => changeLanguage("es")}>Switch to Spanish</button> Button to switch language */}
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

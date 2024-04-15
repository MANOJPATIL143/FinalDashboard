import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LoginPage from "./components/LoginPage.jsx";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Dashboard from "./components/DashBoard";
import ApplicationStatus from "./components/ApplicationStatus";
import OngoingProjects from "./components/OnGoingProjects";
import UtilizationState from "./components/UtilizationState.jsx";
import OperationalStatistics from "./components/OperationalStatistics";
import NicProgress from "./components/NicProgress";
import "./App.css";

function App() {
  // const [loggedIn, setLoggedIn] = useState(true);
  // const [userData, setUserData] = useState(null);

  // const handleLogin = (userData) => {
  //   setLoggedIn(true);
  //   setUserData(userData);
  // };

  return (
    <>
      <Router>
        {/* <LoginPage handleLogin={handleLogin} />
        {loggedIn ? ( */}
          <>
            <Header />
            <Sidebar />
            <Routes>
              {/* <Route path="/" element={<Dashboard userData={userData} />} /> */}

              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/applicationstatus"
                element={<ApplicationStatus />}
              />
              <Route path="/ongoingprojects" element={<OngoingProjects />} />
              <Route path="/utilizationstate" element={<UtilizationState />} />
              <Route
                path="/operationalstatistics"
                element={<OperationalStatistics />}
              />
              <Route path="/nicprogress" element={<NicProgress />} />
            </Routes>
          </>
        {/* ) : null} */}
      </Router>
    </>
  );
}

export default App;

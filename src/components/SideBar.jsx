import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = (event) => {
    if (event.target.tagName.toLowerCase() === "button") {
      setIsSidebarVisible(!isSidebarVisible);
    }
  };

  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div className={`sidebar ${isSidebarVisible ? "" : "hidden"}`}>
      {/* <button onClick={toggleSidebar}>Menu</button> */}
      <div>
        <button
          style={{
            position: "absolute",
            top: "10%",
            right: "25px",
            transform: "translateY(-50%)",
          }}
          className="fullScreen"
          onClick={toggleFullscreen}
        >
          <i class="fa fa-arrows-alt" aria-hidden="true"></i>
        </button>
      </div>
      <ul>
        <li>
          <Link to="/dashboard">
            <span class="pcoded-micon">
              <i
                style={{
                  backgroundColor: "#4680ff",
                  padding: "5px",
                  border: "1px solid #4680ff",
                  borderRadius: "15%",
                }}
                class="fas fa-bookmark"
                aria-hidden="true"
              ></i>
              <b></b>
            </span>
            <span class="pcoded-mtext" data-i18n="nav.dash.main">
              Dashboard
            </span>
            <span class="pcoded-mcaret"></span>
          </Link>
        </li>

        <li>
          <Link to="/applicationstatus">
            <span class="pcoded-micon">
              <i
                style={{
                  backgroundColor: "#FC6180",
                  padding: "5px",
                  border: "1px solid #FC6180",
                  borderRadius: "15%",
                }}
                class="fas fa-home"
                aria-hidden="true"
              ></i>
              <b></b>
            </span>
            <span class="pcoded-mtext" data-i18n="nav.dash.main">
              Application Status
            </span>
            <span class="pcoded-mcaret"></span>
          </Link>
        </li>

        <li>
          <Link to="/ongoingprojects">
            <span class="pcoded-micon">
              <i
                style={{
                  backgroundColor: "#93BE52",
                  padding: "5px",
                  border: "1px solid #93BE52",
                  borderRadius: "15%",
                }}
                class="fa fa-tasks"
                aria-hidden="true"
              ></i>
              <b></b>
            </span>
            <span class="pcoded-mtext" data-i18n="nav.dash.main">
              On-Going Projects
            </span>
            <span class="pcoded-mcaret"></span>
          </Link>
        </li>

        <li>
          <Link to="/utilizationstate">
            <span class="pcoded-micon">
              <i
                style={{
                  backgroundColor: "orange",
                  padding: "5px",
                  border: "1px solid orange",
                  borderRadius: "15%",
                }}
                class="fa fa-adjust"
                aria-hidden="true"
              ></i>
              <b></b>
            </span>
            <span class="pcoded-mtext" data-i18n="nav.dash.main">
              State/UTs Utilization
              <br /> Certificate
            </span>
            <span class="pcoded-mcaret"></span>
          </Link>
        </li>

        <li>
          <Link to="/operationalstatistics">
            <span class="pcoded-micon">
              <i
                style={{
                  backgroundColor: "#ab7967",
                  padding: "5px",
                  border: "1px solid #ab7967",
                  borderRadius: "15%",
                }}
                class="fa fa-server"
                aria-hidden="true"
              ></i>
              <b></b>
            </span>
            <span class="pcoded-mtext" data-i18n="nav.dash.main">
              Operational Statistics/Implementation
            </span>
            <span class="pcoded-mcaret"></span>
          </Link>
        </li>

        <li>
          <Link to="/nicprogress">
            <span class="pcoded-micon">
              <i
                style={{
                  backgroundColor: "#39ADB5",
                  padding: "5px",
                  border: "1px solid #39ADB5",
                  borderRadius: "15%",
                }}
                class="fa fa-map"
                aria-hidden="true"
              ></i>
              <b></b>
            </span>
            <span class="pcoded-mtext" data-i18n="nav.dash.main">
              NIC Progress
            </span>
            <span class="pcoded-mcaret"></span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

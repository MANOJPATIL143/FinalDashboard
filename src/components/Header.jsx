import React from "react";
import { Header, Image } from "semantic-ui-react";
import image from "../assets/morphing.jpeg";
import Image2 from "../assets/logo-black.png";
import image3 from "../assets/morthimg3.jpeg";
import image4 from "../assets/morthimg2.jpeg";
import image5 from "../assets/log-out-icon-2048x2048-cru8zabe.png"; // Import the logout icon image
import "./Header.css";

const MyHeader = ({ handleLogout }) => {
  return (
    <Header
      as="h1"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 999,
        backgroundColor: "white",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Image className="image1" src={image} alt="" />
        <div>
          <Image className="image4" src={Image2} alt="" />
          <Image className="image3" src={image3} alt="" />
          <Image className="image2" src={image4} alt="" />
          {/* Wrap the logout image inside a button or an anchor tag and call handleLogout function onClick */}
          <button className="button-73" onClick={handleLogout}>
            <Image className="image5" src={image5} alt="Logout" />
            {/* <p style={{ fontSize:"10px" }}>Logout</p> */}
          </button>
        </div>
      </div>
    </Header>
  );
};

export default MyHeader;

import React from 'react';
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="billBashGroupCookieConsent"
      style={{ background: "#2B373B", fontSize: "14px" }}
      buttonStyle={{ color: "#4e503b", fontSize: "14px", background: "#F2F2F2", borderRadius: "3px", padding: "8px 15px" }}
      expires={150}
      enableDeclineButton
      declineButtonText="Decline"
      declineButtonStyle={{ background: "#A0A0A0", fontSize: "14px", borderRadius: "3px", padding: "8px 15px" }}
    >
      This website uses cookies to enhance the user experience.{" "}
      <Link to="/privacy-policy" style={{ color: "#f26722", textDecoration: "underline" }}>
        Learn more
      </Link>.
    </CookieConsent>
  );
};

export default CookieConsentBanner;
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SocialMedia from "./components/SocialMedia/SocialMedia";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="content">
      <div className="socialBlock">
        <SocialMedia />
      </div>
      <div className="appblock">
        <App />
      </div>
    </div>
  </React.StrictMode>
);

import React from "react";

import logo from "../../assets/logo.jpg";

import "./logIn.css";

const logIn = () => {
  return (
    <div className="background">
      <div className="login-form">
        <div className="login">
          <span className="title">Member Login</span>
          <input placeholder="Email" className="email-field" />
          <input
            type="password"
            placeholder="Password"
            className="email-field"
          />
        </div>
        <div className="createAcc">
          <span className="title">Member Login</span>
          <input placeholder="Email" className="email-field" />
          <input
            type="password"
            placeholder="Password"
            className="email-field"
          />
        </div>
      </div>
    </div>
  );
};

export default logIn;

import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <section className="error-page">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops... Page not found.</p>

        <a href="/" className="error-button">
          Go Home
        </a>
      </div>
    </section>
  );
};

export default Error;

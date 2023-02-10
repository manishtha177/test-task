import React from "react";
import "./spinner.css";

const LoadingSpinner = () => {
  return (
    <div className="spinner-container" data-testid="spinner">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;

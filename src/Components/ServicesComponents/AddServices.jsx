import React from "react";
import "./AddServices.css";
import clipIcon from "../../Assets/clip.png";
import clipIcon2 from "../../Assets/clipicon2.png";

const AddServices = () => {
  return (
    <div className="add-services-section">
      {/* Section Header */}
      <div className="add-services-header">
        <h2 className="add-services-title">Additional Services</h2>
        <p className="add-services-subtitle">
          Complementary offerings to round out your marketing ecosystem
        </p>
      </div>

      {/* Cards Row */}
      <div className="add-services-cards">
        {/* Card 1 */}
        <div className="add-service-card">
          <img src={clipIcon} alt="Content Creation" className="service-icon" />
          <h3 className="service-title">Content Creation</h3>
          <p className="service-desc">
            Engaging content that tells your story and drives action
          </p>
        </div>

        {/* Card 2 */}
        <div className="add-service-card">
          <img src={clipIcon2} alt="Market Analysis" className="service-icon" />
          <h3 className="service-title">Market Analysis</h3>
          <p className="service-desc">
            Deep insights that inform strategy and optimize performance{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddServices;

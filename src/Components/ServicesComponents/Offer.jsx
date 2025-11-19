import React from "react";
import "./Offer.css";
import offerImg from "../../Assets/offerimg.png";
import offerImg2 from "../../Assets/offerimg2.png";
import offerImg3 from "../../Assets/offerimg3.png";
import offerImg4 from "../../Assets/offerimg4.png";
import offerIcon from "../../Assets/offericon2.png";
import offerIcon2 from "../../Assets/offericon3.png";
import offerIcon3 from "../../Assets/offericon4.png";
import logo from "../../Assets/icon.png";
import { FaCheck } from "react-icons/fa";

const Offer = () => {
  return (
    <div className="offer-section">
      <div className="offer-container">
        {/* Section Header */}
        <div className="offer-header">
          <h2 className="offer-title">What We Offer</h2>
          <p className="offer-subtitle">
            Comprehensive branding and marketing solutions tailored to your
            business needs
          </p>
        </div>

        {/* First Row - Image Left, Content Right */}
        <div className="offer-row">
          <div className="offer-image">
            <img src={offerImg} alt="Brand Strategy" />
          </div>

          <div className="offer-content">
            <div className="offer-icon">
              <img src={logo} alt="Icon" />
            </div>
            <h3 className="offer-content-title">Brand Strategy</h3>
            <p className="offer-content-desc">
              We develop comprehensive brand strategies that define your unique
              position in the market and create lasting connections with your
              audience.
            </p>

            <ul className="offer-list">
              <li>
                <FaCheck className="check-icon" />
                <span>Brand Positioning</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Market Research</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Competitor Analysis</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Brand Guidelines</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Row - Content Left, Image Right */}
        <div className="offer-row ">
          <div className="offer-content">
            <div className="offer-icon">
              <img src={offerIcon} alt="Icon" />
            </div>
            <h3 className="offer-content-title">Visual Identity</h3>
            <p className="offer-content-desc">
              From logo design to complete visual systems, we craft memorable
              identities that capture your brand’s essence and resonate with
              your target market.{" "}
            </p>

            <ul className="offer-list">
              <li>
                <FaCheck className="check-icon" />
                <span>Logo Design</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Color Systems</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Typography</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Brand Collateral</span>
              </li>
            </ul>
          </div>

          <div className="offer-image">
            <img src={offerImg2} alt="Digital Marketing" />
          </div>
        </div>

        {/* Third Row - Image Left, Content Right */}
        <div className="offer-row">
          <div className="offer-image">
            <img src={offerImg3} alt="Brand Strategy" />
          </div>

          <div className="offer-content">
            <div className="offer-icon">
              <img src={offerIcon2} alt="Icon" />
            </div>
            <h3 className="offer-content-title">Digital Marketing</h3>
            <p className="offer-content-desc">
              Data-driven marketing campaigns that maximize ROI and drive
              measurable growth across all digital channels.
            </p>

            <ul className="offer-list">
              <li>
                <FaCheck className="check-icon" />
                <span>SEO and SEM</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Email Marketing</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>PPC Advertising</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Analytics and Reporting</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Fourth Row - Content Left, Image Right */}
        <div className="offer-row ">
          <div className="offer-content">
            <div className="offer-icon">
              <img src={offerIcon3} alt="Icon" />
            </div>
            <h3 className="offer-content-title">Social Media Management</h3>
            <p className="offer-content-desc">
              Strategic social media management that builds engaged communities
              and amplifies your brand voice across platforms.
            </p>

            <ul className="offer-list">
              <li>
                <FaCheck className="check-icon" />
                <span>Content Strategy</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Community Management</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Influencer Partnerships</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Social Advertising</span>
              </li>
            </ul>
          </div>

          <div className="offer-image">
            <img src={offerImg4} alt="Social Media Management" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;

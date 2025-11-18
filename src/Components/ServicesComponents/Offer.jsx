import React from 'react'
import './Offer.css'
import offerImg from '../../Assets/offerimg.png'
import logo from '../../Assets/logo.png'
import { FaCheck } from 'react-icons/fa'

const Offer = () => {
  return (
    <div className="offer-section">
      <div className="offer-container">
        {/* Section Header */}
        <div className="offer-header">
          <h2 className="offer-title">What We Offer</h2>
          <p className="offer-subtitle">
            Comprehensive branding and marketing solutions tailored to your business needs
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
              We develop comprehensive brand strategies that define your unique position in the market and create lasting connections with your audience.
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
              <img src={logo} alt="Icon" />
            </div>
            <h3 className="offer-content-title">Digital Marketing</h3>
            <p className="offer-content-desc">
              We create powerful digital marketing campaigns that drive engagement, increase visibility, and deliver measurable results for your business.
            </p>
            
            <ul className="offer-list">
              <li>
                <FaCheck className="check-icon" />
                <span>Social Media Marketing</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>SEO Optimization</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Content Strategy</span>
              </li>
              <li>
                <FaCheck className="check-icon" />
                <span>Performance Analytics</span>
              </li>
            </ul>
          </div>
          
          <div className="offer-image">
            <img src={offerImg} alt="Digital Marketing" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
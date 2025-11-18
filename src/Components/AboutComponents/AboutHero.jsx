import React from 'react'
import './AboutHero.css'
import aboutImg from '../../Assets/aboutimg.png'

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero-left">
        <h1 className="about-hero-title">
          We Create Brands That <span>matter</span>
        </h1>

        <p className="about-hero-text">
          A creative agency obsessed with transforming businesses through
          powerful branding, strategic marketing and unforgettable experiences.
        </p>

        <div className="about-hero-line"></div>

        <div className="about-hero-stats">
          <div className="stat-box">
            <h2>100</h2>
            <p>Brands Launched</p>
          </div>

          <div className="stat-box">
            <h2>20+</h2>
            <p>Team Members</p>
          </div>
        </div>
      </div>

      <div className="about-hero-right">
        <img src={aboutImg} alt="about" />
      </div>
    </section>
  )
}

export default AboutHero

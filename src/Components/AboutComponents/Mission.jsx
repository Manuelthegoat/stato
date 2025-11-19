import React from 'react'
import './Mission.css'
import missionImg from '../../Assets/missionimg.png'

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">

        <h2 className="mission-title">Our Mission</h2>

        <p className="mission-text">
          To empower businesses to tell their unique stories and connect with audiences in meaningful
          ways. We believe great branding isn’t just about looking good, it’s about creating lasting
          impact and driving real business results.
        </p>

        <img src={missionImg} alt="Mission" className="mission-image" />

      </div>
    </section>
  )
}

export default Mission

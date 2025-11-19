import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./MeetTheTeam.css";

import teamImg from "../Assets/work.png";
import Newsletter from "../Components/Newsletter/Newsletter";

const MeetTheTeam = () => {
  return (
    <>
      <div className="team-container">
        <h1 className="team-title">MEET THE TEAM</h1>
        <p className="team-subtitle">
          Talented individuals united by a passion for exceptional branding and
          marketing
        </p>

        <Swiper
          spaceBetween={15}
          slidesPerView={1.2}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 3.5,
              spaceBetween: 15,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="team-swiper"
        >
          {/* CARD 1 */}
          <SwiperSlide>
            <div className="team-card">
              <img src={teamImg} alt="team" className="team-image" />
              <h3 className="team-name">PHILLIP OGIRI</h3>
              <p className="team-role">CEO, Director</p>
              <p className="team-desc">
                With 8+ years in brand strategy, Philip leads our creative
                vision with passion and precision.
              </p>
            </div>
          </SwiperSlide>

          {/* Duplicate slides for other team members */}
          <SwiperSlide>
            <div className="team-card">
              <img src={teamImg} alt="team" className="team-image" />
              <h3 className="team-name">Valerie Aliyu</h3>
              <p className="team-role">Business Development</p>
              <p className="team-desc">
                Valerie oversees our operations with sharp attention to detail
                and a commitment to excellence.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="team-card">
              <img src={teamImg} alt="team" className="team-image" />
              <h3 className="team-name">Mark Verem</h3>
              <p className="team-role">Marketing Strategist</p>
              <p className="team-desc">
                Mark crafts data-driven campaigns that deliver measurable
                results and exceed expectations.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="team-card">
              <img src={teamImg} alt="team" className="team-image" />
              <h3 className="team-name">Wachin Akura</h3>
              <p className="team-role">Brand Designer</p>
              <p className="team-desc">
                Akura brings ideas to life through thoughtful visuals and purposeful creativity
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="team-card">
              <img src={teamImg} alt="team" className="team-image" />
              <h3 className="team-name">DAVID BROWN</h3>
              <p className="team-role">Content Strategist</p>
              <p className="team-desc">
                With 8+ years in brand strategy, Philip leads our creative
                vision with passion and precision.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Newsletter />
    </>
  );
};

export default MeetTheTeam;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./MeetTheTeam.css";

import teamImg from "../Assets/work.png";
import Valentina from "../Assets/valentina.jpg";
import Akura from "../Assets/akura.jpg";
import Mark from "../Assets/mark.jpg";
import Hope from "../Assets/hope.jpg";
import Philip from "../Assets/phillip.jpg";
import Newsletter from "../Components/Newsletter/Newsletter";
import CTA from "../Components/CTA/CTA";

const MeetTheTeam = () => {
  const teamImages = [Philip, Valentina, Mark, Akura, Hope];
  const totalImages = teamImages.length;

  const [loadedCount, setLoadedCount] = useState(0);

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  const allLoaded = loadedCount === totalImages;

  return (
    <>
      {!allLoaded && (
        <div className="team-preloader">
          <div className="loader"></div>
        </div>
      )}

      <div className="team-container" style={{ opacity: allLoaded ? 1 : 0 }}>
        <h1 className="team-title">MEET THE TEAM</h1>
        <p className="team-subtitle">
          Talented individuals united by a passion for exceptional branding and
          marketing
        </p>

        <Swiper
          spaceBetween={15}
          slidesPerView={1.1}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 15,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 15,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 15,
              centeredSlides: false,
            },
            1200: {
              slidesPerView: 3.5,
              spaceBetween: 15,
              centeredSlides: false,
            },
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="team-swiper"
        >
          {/* CARD 1 */}
          <SwiperSlide>
            <div className="team-card">
              <img src={Philip} onLoad={handleImageLoad} alt="team" className="team-image" />
              <h3 className="team-name">Philip Ogiri</h3>
              <p className="team-role">CEO, Director</p>
              <p className="team-desc">
                With 8+ years in brand strategy, Philip leads our creative
                vision with passion and precision.
              </p>
            </div>
          </SwiperSlide>

          {/* CARD 2 */}
          <SwiperSlide>
            <div className="team-card">
              <img src={Valentina} onLoad={handleImageLoad} alt="team" className="team-image" />
              <h3 className="team-name">Valentina Aliyu</h3>
              <p className="team-role">Business Development</p>
              <p className="team-desc">
                Valentina oversees our operations with sharp attention to detail
                and a commitment to excellence.
              </p>
            </div>
          </SwiperSlide>

          {/* CARD 3 */}
          <SwiperSlide>
            <div className="team-card">
              <img src={Mark} onLoad={handleImageLoad} alt="team" className="team-image" />
              <h3 className="team-name">Mark Verem</h3>
              <p className="team-role">Marketing Strategist</p>
              <p className="team-desc">
                Mark crafts data-driven campaigns that deliver measurable
                results and exceed expectations.
              </p>
            </div>
          </SwiperSlide>

          {/* CARD 4 */}
          <SwiperSlide>
            <div className="team-card">
              <img src={Akura} onLoad={handleImageLoad} alt="team" className="team-image" />
              <h3 className="team-name">Wachin Akura</h3>
              <p className="team-role">Brand Designer</p>
              <p className="team-desc">
                Akura brings ideas to life through thoughtful visuals and
                purposeful creativity
              </p>
            </div>
          </SwiperSlide>

          {/* CARD 5 */}
          <SwiperSlide>
            <div className="team-card">
              <img src={Hope} onLoad={handleImageLoad} alt="team" className="team-image invert" />
              <h3 className="team-name">Hope Emmason</h3>
              <p className="team-role">Social Media Manager</p>
              <p className="team-desc">
                With 8+ years in brand strategy, Philip leads our creative
                vision with passion and precision.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <CTA />
      <Newsletter />
    </>
  );
};

export default MeetTheTeam;

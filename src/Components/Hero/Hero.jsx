import React from "react";
import CountUp from "react-countup";
import { HiLocationMarker } from "react-icons/hi";
import "./Hero.css";
export const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">

        {/* Left-section */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Discover <br />
              Most Suitable <br />
              Property.
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of Property that suit your choices.
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you.
            </span>
          </div>
          <div className="search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8000} end={9200} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1200} end={2000} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={20} />
                <span>+</span>
              </span>

              <span className="secondaryText">Amazing Awards</span>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="flexColStart flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

import "./Contact.css";


const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="c-container">
        <div className=" flexColStart c-left">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">How are you </span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
            tempora harum. Alias perferendis laborum tempore reiciendis earum
            aliquam officiis soluta!
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText" >Call</span>
                    <span className="secondaryText">278-178-876</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Call now
                </div>
              </div>
                  {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText" >Chat now</span>
                    <span className="secondaryText">278-178-876</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Call now
                </div>
              </div>
            </div>

            {/* second Row */}

            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText" >Video call </span>
                    <span className="secondaryText">278-178-876</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Call now
                </div>
              </div>
                  {/* fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText" >message now</span>
                    <span className="secondaryText">278-178-876</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Call now
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="c-right">
          <div className="image-container image-box">
            <img src="contact.jpg" alt="contact image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import { MdCall } from "react-icons/md";
import "../../index.css";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="c-container">
        <div className="c-left">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">How are you </span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
            tempora harum. Alias perferendis laborum tempore reiciendis earum
            aliquam officiis soluta!
          </span>
          <div className="row">
            <div className="field1">
              <div className="box1">
                <div className="box-detail">
                  <div className="icon">
                    <MdCall size={25} className="icon-style" />
                  </div>
                  <div className="text">
                    <span>Call</span>
                    <span>278-178-876</span>
                  </div>
                </div>
                <button aria-label="Call now">Call now</button>
              </div>

              <div className="box1">
                <div className="icon">
                  <MdCall size={25} />
                </div>
                <div className="box-detail">
                  <span>Call</span>
                  <span>278-178-876</span>
                </div>
                <button>call now</button>
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

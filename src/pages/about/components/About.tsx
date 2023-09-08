import { Social } from "components";
import AboutImg from "../assets/user.jpg";
import { SKILLS } from "./About.constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./About.scss";

const About = () => {
  return (
    <div className="app_container">
      <div className="app_content">
        <div className="title" data-aos="zoom-in">
          About <span></span>
        </div>
        <div className="app_main">
          <div className="about_text">
            <div className="about_title" data-aos="zoom-in-left">
              <h2>A bit about me...</h2>
            </div>
            <div className="about_img" data-aos="fade-right">
              <LazyLoadImage src={AboutImg} effect="blur" />
            </div>
            <div className="about_me" data-aos="fade-right">
              <p>
                Hello. My name is Abdullo. <br /> I learned{" "}
                <span className="gradient-text"> Frontend </span> and worked
                with them. <br /> My currently experience is{" "}
                <span className="gradient-text">1+</span> years.
              </p>
            </div>
          </div>
          <div className="skill_content">
            <div
              className="skill_title"
              data-aos="zoom-in-right"
              data-aos-anchor-placement="top-bottom"
            >
              <h2>Skills</h2>
            </div>
            <div className="skill_boxes">
              {SKILLS.map((item) => (
                <div
                  className="skill_box"
                  data-aos="zoom-in"
                  data-aos-anchor-placement="top-bottom"
                >
                  <div className="img_box">
                    <img src={item?.img} alt="" />
                  </div>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Social />
    </div>
  );
};

export default About;

import { Social } from "components";
import AboutImg from "../assets/user.jpg";
import { SKILLS } from "./About.constants";
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
              <img src={AboutImg} alt="user" />
            </div>
            <div className="about_me" data-aos="fade-right">
              <p>
                Hello. My name is Abdullo. <br /> I learned React, Typescript
                and worked with them
              </p>
            </div>
          </div>
          <div className="skill_content">
            <div className="skill_title" data-aos="zoom-in-right">
              <h2>Skills</h2>
            </div>
            <div className="skill_boxes">
              {SKILLS.map((item) => (
                <div className="skill_box" data-aos="zoom-in">
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

import "./Contact.scss";
import User from "../assets/user.jpg";
import { Social } from "components";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <div className="app_container">
      <div className="app_content">
        <div className="title" data-aos="zoom-in">
          Contact
          <span></span>
        </div>
        <div className="app_main">
          <div className="contact_info">
            <div className="contact_img" data-aos="zoom-in-left"></div>
            <h2 className="gradient-text" data-aos="fade-right">
              Contact details
            </h2>
            <ul data-aos="fade-right">
              <li>
                <a href="#">abdulloergashxojayev01@gmail.com</a>
              </li>
              <li>
                <a href="tel:+998 90 094 18 01">+998 90 094 18 01</a>
              </li>
            </ul>

            <h2
              className="social_text gradient-text"
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
            >
              Social
            </h2>

            <ul data-aos="fade-right" data-aos-anchor-placement="top-bottom">
              {/* <li>
                <a href="#">Linkedin</a>
              </li> */}
              <li>
                <a href="https://www.instagram.com/abdullo_me/" target="_blank">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://t.me/abdullo_me" target="_blank">
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/abdullo.ergashxojayev.3?mibextid=2JQ9oc"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://github.com/abdullodev" target="_blank">
                  Github
                </a>
              </li>
            </ul>
          </div>

          <div className="contact_form">
            <h2
              className="gradient-text"
              data-aos="zoom-in"
              data-aos-anchor-placement="top-bottom"
            >
              Let's build something cool together
            </h2>
            <form>
              <p>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Name" id="name" />
              </p>
              <p>
                <label htmlFor="phoneNumber">Phone number</label>
                <input
                  type="text"
                  placeholder="Phone number"
                  id="phoneNumber"
                />
              </p>
              <p>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  id="email"
                />
              </p>
              <p>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Type your message"
                ></textarea>
              </p>

              <p>
                <Button>Submit</Button>
              </p>
            </form>
          </div>
        </div>
        <Social />
      </div>
    </div>
  );
};

export default Contact;

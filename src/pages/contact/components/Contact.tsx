import { Button } from "@mui/material";
import { Social } from "components";
import { useRef, useState } from "react";
import "./Contact.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "react-hot-toast";
import User from "../assets/user.jpg";

const Contact = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipBoard = async (copyMe: any) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
      toast.success("Email successfully cpied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <div className="app_container">
      <div className="app_content">
        <div className="title" data-aos="zoom-in">
          Contact
          <span></span>
        </div>
        <div className="app_main">
          <div className="contact_info">
            <div className="contact_img" data-aos="zoom-in-left">
              <LazyLoadImage src={User} effect="blur" />
            </div>
            <h2 className="gradient-text" data-aos="fade-right">
              Contact details
            </h2>
            <ul data-aos="fade-right">
              <li>
                <a
                  href="#"
                  onClick={() =>
                    copyToClipBoard("abdulloergashxojayev01@gmail.com")
                  }
                >
                  abdulloergashxojayev01@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+998900941801">+998 90 094 18 01</a>
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

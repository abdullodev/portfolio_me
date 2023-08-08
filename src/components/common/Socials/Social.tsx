import "./Social.scss";
import { SOCIALS } from "./Socials.constants";

const Social = () => {
  return (
    <div className="social_content">
      <h3 data-aos="zoom-in-left" data-aos-anchor-placement="top-bottom">
        © All rights reserved. Abdulloh - 2023
      </h3>
      <div className="socials_boxes">
        <ul>
          {SOCIALS.map((item, index) => (
            <li
              key={index}
              data-aos="zoom-in-right"
              data-aos-anchor-placement="top-bottom"
            >
              <a href="#">{item.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Social;

import "./Home.scss";
import { Button, Grid } from "@mui/material";
import Laptop from "../assets/laptop 1.png";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Link } from "react-router-dom";
import { Social } from "components";

const Home = () => {
  return (
    <div className="app_container">
      <div className="app_content">
        <div className="app_main">
          <div className="main_text">
            <div className="info_text" data-aos="zoom-in">
              <h1>
                Hello, <br />
                <span>I am</span> Abdulloh
              </h1>
              <h3>React, Web Developer</h3>
            </div>

            <div className="main_btns">
              <Link to={"/contact"} style={{ textDecoration: "none" }}>
                <Button data-aos="zoom-in">
                  <ContactPhoneIcon className="icon1" /> Contact
                </Button>
              </Link>
              <a
                href="./Ergashkhujayev Abdulloh.pdf"
                target="_blank"
                data-aos="zoom-in"
              >
                <Button>
                  <FileDownloadIcon className="icon2" />
                  Resume
                </Button>
              </a>
            </div>
          </div>
          <div className="main_img" data-aos="zoom-in">
            <img src={Laptop} alt="Laptop" />
          </div>
        </div>
      </div>
      <Social />
    </div>
  );
};

export default Home;

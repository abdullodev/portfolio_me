import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, IconButton } from "@mui/material";
import { Social } from "components";
import { useState } from "react";
import Slider from "react-slick";
import "./Projects.scss";
import { PROJECTS } from "./Projects.constants";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const Projects = () => {
  const [sliderRef, setSliderRef] = useState<any>(null);

  const settings: any = {
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: false,
    lazyLoad: true,
    className: "center",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goPrev = () => {
    sliderRef?.slickPrev();
  };

  const goNext = () => {
    sliderRef?.slickNext();
  };

  return (
    <div className="app_container">
      <div className="app_content">
        <div className="title">
          Projects
          <span></span>
        </div>
        <div className="app_main_full">
          <div className="spend_box">
            <IconButton onClick={goPrev}>
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton onClick={goNext}>
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
          <div className="projects_content">
            <Slider {...settings} ref={setSliderRef}>
              {PROJECTS.map((item, index) => (
                <div className="project" key={index}>
                  <div className="img_box">
                    <div className="eyeIconBox">
                      {item.demo ? (
                        <a href={item.demo} target="_blank">
                          <RemoveRedEyeIcon className="eyeIcon" />
                        </a>
                      ) : (
                        <span className="admin_panel">This is Admin panel</span>
                      )}
                    </div>
                    <img src={item.imgUrl} alt={item.description} />
                  </div>
                  <div className="project_info">
                    <div className="project_text">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <Social />
      </div>
    </div>
  );
};

export default Projects;

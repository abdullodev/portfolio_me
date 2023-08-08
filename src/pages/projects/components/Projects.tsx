import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, IconButton } from "@mui/material";
import { Social } from "components";
import { useState } from "react";
import Slider from "react-slick";
import "./Projects.scss";

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
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
              {["1", "2", "3", "4", "5", "6"].map((item, index) => (
                <div className="project" key={index}>
                  <div className="img_box">
                    <img
                      src="https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X7/10571/1689673096346/front-left-side-47.jpg"
                      alt=""
                    />
                  </div>
                  <div className="project_info">
                    <div className="project_text">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Rerum quisquam tenetur quo possimus
                      </p>
                    </div>
                    <div className="projects_demo">
                      <Button>Demo</Button>
                      <Button>Github</Button>
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

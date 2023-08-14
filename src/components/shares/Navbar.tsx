import { Fragment, useState } from "react";
import { Button } from "@mui/material";
import { NAVBAR_LIST } from "./Navbar.constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <nav>
        <div data-aos="fade-right" className="logo">
          <Link to={"/"}>
            ER<span>AB</span>
          </Link>
        </div>
        <div data-aos="fade-left" className="nav_links">
          {NAVBAR_LIST?.map((item, index) => (
            <Fragment key={index}>
              <Button
                onClick={() => {
                  if (location.pathname !== item.path) {
                    navigate(item.path);
                  }
                }}
                className={item.path === location.pathname ? "active" : ""}
              >
                {item.title}
              </Button>
            </Fragment>
          ))}
        </div>

        <div
          className={open ? "nav_menu  active" : "nav_menu"}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div
        className={open ? "left_back active" : "left_back"}
        onClick={() => setOpen(!open)}
      ></div>
      <div className={open ? "left_menu active" : "left_menu"}>
        <div className="nav_links_left">
          {NAVBAR_LIST?.map((item, index) => (
            <Fragment key={index}>
              <Button
                onClick={() => {
                  if (location.pathname !== item.path) {
                    navigate(item.path);
                  }
                  setOpen(!open);
                }}
                className={item.path === location.pathname ? "active" : ""}
              >
                {item.title}
              </Button>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

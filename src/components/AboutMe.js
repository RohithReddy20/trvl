/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import "./AboutMe.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import { Button } from "./Button";
function AboutMe() {
  const handlePageChange = () => {
    $(".navbar").css("background", "transparent");

    $(".nav-menu").css(
      "background-image",
      "linear-gradient(to right, #7a02ff, #5d1adf, #4320bf, #2d209e, #1c1d7d, #1a257b, #1b2b78, #1e3175, #274790, #305eab, #3875c7, #3f8ee3)"
    );
    $(".navbar").css(
      "background-image",
      " linear-gradient(to right, #7a02ff, #5d1adf, #4320bf, #2d209e, #1c1d7d, #1a257b, #1b2b78, #1e3175, #274790, #305eab, #3875c7, #3f8ee3)"
    );
    $("Navbar").css(
      "background-image",
      " linear-gradient(to right, #7a02ff, #5d1adf, #4320bf, #2d209e, #1c1d7d, #1a257b, #1b2b78, #1e3175, #274790, #305eab, #3875c7, #3f8ee3)"
    );
  };

  useEffect(() => {
    handlePageChange();
  });

  return (
    <>
      <div className="video-conatiner">
        <video src="../videos/Sleepiest_4_11.mp4" muted autoPlay loop />
      </div>
      <h1 className="title">About Me</h1>
      <div className="abt">
        <div className="info-container">
          <div className="intro">
            <img alt="img" src="../images/n13.jpg" />
            <div className="buttons">
              <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
              >
                <Link to="/sign-up">Wanna Know More</Link>
              </Button>
            </div>
          </div>

          <div className="intro">
            <h2>Hello There!</h2>
            <p>
              My Name is <span className="name">Kim Ngan</span> . I'm a 22 year
              old food engineer student studying at <a target="_blank" href='http://dut.udn.vn/EN'><span className="name">Danang University of Science and Technology</span></a>. I'm in my
              final year and plan to be a partner in a start-up food brand after
              graduation.
            </p>
            <p>
              I have a passion for cooking. I started reading cook books at age
              11. And then, after high school, I started taking classes to
              become a food engineer. My goal is to create recipes that can be
              enjoyed by everyone, and I want to bring great food to Vietnam.
            </p>
            <p>
              I've got plans to open a café called Shanghai Tea House. It will
              focus on Western breakfast, lunch, and snacks. We will have wide
              range of products from coffee to chocolate to cheese to bread. I'm
              very excited to launch this brand and I look forward to working
              with the team to bring you exciting new things soon!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;

"use client";
import React, { useEffect } from "react";
import { Col, Row } from "reactstrap";
import "./../../styles/about.scss";

declare global {
  interface Window {
    _isAboutLoaded: boolean;
  }
}

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    return () => {
      window._isAboutLoaded = true;
    };
  });

  const createFadeInClass = () => {
    if (typeof window !== "undefined") {
      return window._isAboutLoaded ? "" : "fadein";
    }

    return "fadein";
  };

  return (
    <div className="about-page text-white ">
      <Row className="mt-5">
        <Col md="6">
          <div className="left-side text-white">
            <h1 className={`title  ${createFadeInClass()}`}>Hello, Welcome</h1>
            <h4 className={`subtitle ${createFadeInClass()}`}>To About Page</h4>
            <p className={`subsubTitle ${createFadeInClass()}`}>
              Feel free to read short description about me.
            </p>
          </div>
        </Col>
        <Col md="6">
          <div className={`${createFadeInClass()}`}>
            <p>My name is Wenjun Xue and I am a junior software engineer.</p>
            <p className="my-[1rem]">
              After years of study, I have progressively gained a deeper
              understanding of my nature and am now pursuing a path as software
              engineer. Now I work to broaden my practical experience.
            </p>

            <p className="my-[1rem]">
              Sofar I have worked on a variety of technologies and projects up
              to this point. Throughout WBS bootcamp, I attended lots of group
              work. During DPS(digital product school), my team and I developed
              the technical MVP for the Xfactor tool. I now creating websites on
              my own.
            </p>
            <p>
              {`I am finding very exciting this journey with new technologies continuously. If you have any questions, ideas that you are possionate about, or just want to connect, don&rsquo; hesitate to reach out. I&rsquo;
              always open to collaboration.`}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default page;

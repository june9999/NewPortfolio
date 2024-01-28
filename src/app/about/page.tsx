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
            <p>
              After years of study, I have progressively gained a deeper
              understanding of my nature and am now pursuing an alternative path
              than I had previously anticipate. Without having to demonstrate my
              academic prowess, I work to broaden my practical experience. I
              have worked on a variety of technologies and projects up to this
              point.
            </p>

            {/* <p>
              Before I worked on a number of team projects throughout WBS
              bootcamp. Using the Servelss framework and Typerscript, I was
              instrumental in developing the technical MVP for the Xfactor tool
              during my internship at Digital Product School. I am finding it
              enjoyable to experiment with new technology and learn new things.
              I now created my own website on my own, focusing on improving user
              experiences and looking forward to the next adventure.
            </p>
            <p>
              If you have any questions, ideas that you are possionate about, or
              just want to connect, don&rsquo; hesitate to reach out. I&rsquo;
              always open to collaboration.
            </p> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default page;

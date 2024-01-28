"use client";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import background from "../img/background-index.png";
import section1 from "../img/section1.png";
import section2 from "../img/section2.png";
import { ReactTyped, Typed } from "react-typed";
import { useState } from "react";

export default function Home() {
  const roles = ["Developer", "Tech Lover", "React", "Java"];
  const [flipping, IsFlipping] = useState(true);
  console.log(flipping);
  return (
    <>
      <Image
        className="background-image"
        alt="background"
        src={background}
        priority={true}
      />
      <div className={`main-section `}>
        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper flex justify-center`}>
                  {flipping && (
                    <div className={`back sm:w-[20rem]`}>
                      <Image
                        className="home-image "
                        alt="section1"
                        src={section1}
                      />
                      <div className="hero-section-content ">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio
                        </div>
                      </div>
                      <div className="shadow-custom sm:w-[20rem]">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  )}
                  {!flipping && (
                    <div className="front sm:w-[20rem]">
                      <Image
                        className="home-image "
                        alt="section2"
                        src={section2}
                      />
                      <div className="hero-section-content ">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio
                        </div>
                      </div>

                      <div className="shadow-custom sm:w-[20rem]">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper w-full">
              <div className="hero-welcome-text  md:pl-[2rem]">
                <h1 className="wrap flex w-1rem ">
                  Welcome to My Portfolio. <br /> About Me:
                </h1>
                <ReactTyped
                  loop
                  strings={roles}
                  typeSpeed={80}
                  backSpeed={80}
                  backDelay={2000}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                  className="self-type"
                />
              </div>

              <div className="hero-welcome-bio">
                <h1>Let's take a look on my work.</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

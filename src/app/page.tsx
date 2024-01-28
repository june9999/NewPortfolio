"use client";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import background from "../img/background-index.png";
import section1 from "../img/section1.png";
import section2 from "../img/section2.png";
import { ReactTyped, Typed } from "react-typed";
import { useState } from "react";

export default function Home() {
  const roles = [
    "Developer",
    "Tech Lover",
    "Good at React, Typerscript",
    "Good at MERN",
    "Basic knowledge of Java",
  ];
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
                    <div className={`back sm:w-[25rem]`}>
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
                      <div className="shadow-custom sm:w-[25rem]">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  )}
                  {!flipping && (
                    <div className="front sm:w-[25rem]">
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

                      <div className="shadow-custom sm:w-[25rem]">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper ">
              <div className="hero-welcome-text  md:pl-[2rem]">
                <h1 className="wrap flex w-1rem ">
                  Welcome to My Portfolio. Here, you will find the culmination
                  of my passion for technology. <br />
                  <br /> About Me:
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

              <div className="hero-welcome-bio md:pl-[2rem] md:pt-[3rem]">
                <h3>My Languages and Tools:</h3>
                <div className="flex gap-[1rem]  linerani">
                  <a
                    href="https://aws.amazon.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                      alt="aws"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://getbootstrap.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                      alt="bootstrap"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://www.w3schools.com/css/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                      alt="css3"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://www.docker.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                      alt="docker"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://expressjs.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                      alt="express"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://www.figma.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                      alt="figma"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://git-scm.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                      alt="git"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://www.w3.org/html/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                      alt="html5"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://www.java.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                      alt="java"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                      alt="javascript"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://kubernetes.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg"
                      alt="kubernetes"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://www.mongodb.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                      alt="mongodb"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://www.mysql.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                      alt="mysql"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://nestjs.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg"
                      alt="nestjs"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                      alt="nextjs"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                      alt="nodejs"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://www.postgresql.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                      alt="postgresql"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://postman.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                      alt="postman"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                      alt="react"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                      alt="tailwind"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                      alt="typescript"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
                      alt="vuejs"
                      width="40"
                      height="40"
                    />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Roboimg from "../assets/images/png/Roboimg.png";
import Pagelogo from "../assets/images/png/logo.png";
import Roboimg2 from "../assets/images/png/Roboimg2.png";
import { MoreArrow } from "./IconImg";

const Header = () => {
  function drop() {
    document.getElementById("dropcontent").classList.toggle("d-block");
  }
  const [show, setshow] = useState(true);
  return (
    <div className="bg-header position-relative">
      <div className="position-absolute blue_circle1 d-xl-flex gap-4 flex-column d-none">
        <div className="blue_circle"></div>
        <div className="blue_circle"></div>
        <div className="blue_circle"></div>
        <div className="blue_circle"></div>
        <div className="blue_circle"></div>
      </div>
      <Container className="custum_container">
        <div className="d-flex align-items-center justify-content-between py-lg-1 py-2 position_fixed z_index_6 tg-blue start-0 end-0">
          <img
            src={Pagelogo}
            alt="Pagelogo"
            className="mw-68 w-100 cur-pointer ps-lg-0 ps-3"
          />
          <div className="d-flex align-items-center justify-content-between gap-btn z_index_3 pe-5">
            <div
              onClick={() => setshow(!show)}
              className={`${show ? "cross" : "cross1"} menu-icon`}
            >
              <span className="crl-1"></span>
              <span className="crl-2"></span>
              <span className="crl-3"></span>
            </div>
            <button className="btn-enter1 d_sm_none">Enter App</button>
            <ul className={`${show ? "left_false" : "left_true"} nav_bar`}>
              <li className="list-unstyled">
                <a
                  href="#About"
                  className="ff-raleway fs-6sm fw-medium text-white nav-line position-relative"
                >
                  About
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href=""
                  className="ff-raleway fs-6sm fw-medium text-white nav-line position-relative text-nowrap"
                >
                  IBO Event
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="#EEFI Tokenomics"
                  className="ff-raleway fs-6sm fw-medium text-white nav-line position-relative text-nowrap"
                >
                  EEFI Tokenomics
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="#Team"
                  className="ff-raleway fs-6sm fw-medium text-white nav-line position-relative text-nowrap"
                >
                  Team
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="#Partners"
                  className="ff-raleway fs-6sm fw-medium text-white nav-line position-relative text-nowrap"
                >
                  Partners
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="#Roadmap"
                  className="ff-raleway fs-6sm fw-medium text-white nav-line position-relative text-nowrap"
                >
                  Roadmap
                </a>
              </li>
              <li className="d-flex gap-1 btn-more align-items-center">
                <a href="" className="ff-raleway fs-6sm fw-medium text-white">
                  More
                </a>
                <div className="position-relative d-inline-block">
                  <button className="btn-am ps-2 pb-1">
                    <MoreArrow />
                  </button>
                  <div id="dropcontent" className="dropdown-box">
                    <a
                      href="#About"
                      className="mb-0 ff-raleway fs_6sm fw-400 lh-125 d-flex align-items-center justify-content-center"
                    >
                      About
                    </a>
                    <a
                      href="#Team"
                      className="mb-0 ff-raleway fs_6sm fw-400 lh-125 d-flex align-items-center justify-content-center"
                    >
                      Team
                    </a>
                    <a
                      href="#Partners"
                      className="mb-0 ff-raleway fs_6sm fw-400 lh-125 d-flex align-items-center justify-content-center"
                    >
                      Partners
                    </a>
                    <a
                      href="#Roadmap"
                      className="mb-0 ff-raleway fs_6sm fw-400 lh-125 d-flex align-items-center justify-content-center"
                    >
                      Roadmap
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <button className="btn-enter d_lg_block d_none position-relative z-2 text-nowrap">
              Enter App
            </button>
          </div>
        </div>
      </Container>
      <Container className="custum_container">
        <Row className="head-padding p-xl-0 align-items-center">
          <Col
            lg={6}
            className="d-flex align-items-lg-start align-items-center justify-content-center flex-column"
          >
            <h2 className="mb-0 ff_NeueMachinaRegular fs_5xxxl fw-medium text-white mw-463 text-uppercase text-center text-lg-start lh_120 pb-4">
              Building elastic Protocol
            </h2>
            <p className="mb-0 ff-raleway fs-6sm fw-normal text-white text_center mw-521 lh-150 text-capitalize pb-3">
              An ecosystem of unique yield strategies that help you earn yield,
              amplify, and stretch it across all market conditions
            </p>
            <a
              href=""
              className="mb-0 ff-raleway fs-8sm fw-bold text-white text-decoration-underline"
            >
              Audited by Omniscia
            </a>
          </Col>
          <Col
            lg={6}
            className="d-flex align-items-lg-start justify-content-lg-end justify-content-center"
          >
            <img
              src={Roboimg2}
              alt="roboimg2"
              className="d-lg-none d-block robo-img w-100"
            />
            <img
              src={Roboimg}
              alt="Roboimg"
              className="robo-img w-100 d-lg-block d-none"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;

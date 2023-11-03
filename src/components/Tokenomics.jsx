import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Decentralised } from "./IconImg";
import { ExtraValue } from "./IconImg";
import { SmartIndex } from "./IconImg";
import { SocialCoordination } from "./IconImg";
import { Expansive } from "./IconImg";

const Tokenomics = () => {
  return (
    <div>
      <div className="tokenomics_bg_img py_tokenonics mb_45 mb_57">
        <Container className="custum_container">
          <Row className="align-items-center pb-5 pb-lg-0 justify-content-lg-between justify-content-center">
            <Col lg={5} className="pb_100 pb-lg-0">
              <h2 className="fs_46 fw-bold ff_NeueMachinaUltrabold text-black m-0">
                EEFI Tokenomics
              </h2>
              <p className="ff-raleway fs_6sm fw-normal text-black mw_448 lh_160 pb-4 pt-3 m-0">
                EEFI is the special rewards token of the protocol that is minted
                and distributed in a decentralized fashion. It produces
                amplified yield during uptrends and protects from downside
                action during downtrends.
              </p>
              <a
                href=""
                className="view_btn text-white ff-raleway fs_6sm fw-medium mt-3"
              >
                View Contract Address
              </a>
              <p className="fs_24 fw-bold ff_NeueMachinaBold text-black pt-5 pb-1 m-0">
                IBO TOKENOMICS
              </p>
              <p className="fs_18 fw-bold ff-raleway text-black pt-4 m-0">
                IBO Round 1 Price
              </p>
              <p className="fs_6sm fw_600 ff-raleway color_blue pt-3 m-0">
                1 EEFI = $12
              </p>
              <p className="fs_18 fw-bold ff-raleway text-black pt-4 m-0">
                IBO Round 2 Price
              </p>
              <p className="fs_6sm fw_600 ff-raleway color_blue pt-3 m-0">
                1 EEFI = $18
              </p>
              <p className="fs_18 fw-bold ff-raleway text-black pt-4 m-0">
                IBO Round 3 Price
              </p>
              <p className="fs_6sm fw_600 ff-raleway color_blue pt-3 m-0">
                1 EEFI = $26
              </p>
              <p className="ff-raleway fs_18 fw-bold text-black m-0 pt-4">
                TOTAL SUPPLY
              </p>
              <p className="fs_6sm fw_600 ff-raleway text-black m-0 pt-3">
                170,000
              </p>
            </Col>
            <Col lg={5} className="pt_90 pt-lg-0">
              <div
                className="d-flex align-items-center gap-3"
                data-aos="zoom-in-left"
              >
                <div className="pt-2 nav_icon cur-pointer">
                  <Decentralised />
                </div>
                <div>
                  <h2 className="fs_24 fw-bold ff_NeueMachinaBold text-white">
                    Decentralized Yield
                  </h2>
                  <p className="fw-normal fs_6sm ff-raleway text-white opacity_8 m-0 pt-2">
                    Protocol’s native utility | rewards token
                  </p>
                </div>
              </div>
              <div
                className="d-flex align-items-center gap-3 pt-4"
                data-aos="zoom-in-left"
              >
                <div className="pt-2 cur-pointer nav_icon">
                  <ExtraValue />
                </div>
                <div>
                  <h2 className="fs_24 fw-bold ff_NeueMachinaBold text-white">
                    Extra Value
                  </h2>
                  <p className="fw-normal fs_6sm ff-raleway text-white opacity_8 m-0 pt-2">
                    Can be highly deflationary during market uptrends
                  </p>
                </div>
              </div>
              <div
                className="d-flex align-items-center gap-3 pt-4"
                data-aos="zoom-in-left"
              >
                <div className="pt-2 cur-pointer nav_icon">
                  <SmartIndex />
                </div>
                <div>
                  <h2 className="fs_24 fw-bold ff_NeueMachinaBold text-white">
                    Smart Index
                  </h2>
                  <p className="fw-normal fs_6sm ff-raleway text-white opacity_8 m-0 pt-2">
                    Token can be viewed as an index of all strategy performance
                    on the protocol
                  </p>
                </div>
              </div>
              <div
                className="d-flex align-items-center gap-3 pt-4"
                data-aos="zoom-in-left"
              >
                <div className="cur-pointer nav_icon">
                  <SocialCoordination />
                </div>
                <div>
                  <h2 className="fs_24 fw-bold ff_NeueMachinaBold text-white m-0">
                    Social Coordination (E,E)
                  </h2>
                  <p className="fw-normal fs_6sm ff-raleway text-white opacity_8 m-0 pt-2">
                    Promotes hyper social coordination around all strategies on
                    the protocol (E,E) (makes hedging fun and working together
                    produces more benefits to all vault users)
                  </p>
                </div>
              </div>
              <div
                className="d-flex align-items-center gap-3 pt-4"
                data-aos="zoom-in-left"
              >
                <div className="cur-pointer nav_icon">
                  <Expansive />
                </div>
                <div>
                  <h2 className="fs_24 fw-bold ff_NeueMachinaBold text-white m-0">
                    Expansive Utility Dimensions
                  </h2>
                  <p className="fw-normal fs_6sm ff-raleway text-white opacity_8 m-0 pt-2">
                    EEFI’s utility will expand as more strategies are added to
                    the protocol.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Tokenomics;

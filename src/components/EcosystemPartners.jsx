import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Olympus from "../assets/images/webp/Olympus.webp";
import BondProtocol from "../assets/images/webp/BondProtocol.webp";
import Foundry from "../assets/images/webp/Foundry.webp";
import Balancer from "../assets/images/webp/Balancer.webp";
import Gearbox from "../assets/images/webp/Gearbox.webp";
import Uniswap from "../assets/images/webp/Uniswap.webp";

const EcosystemPartners = () => {
  return (
    <>
      <div id="Partners" className="py_partner">
        <Container>
          <h2
            className="ff_NeueMachinaUltrabold fs_6xl text_blue text-center pb_63"
            data-aos="zoom-out-left"
          >
            Ecosystem Partners
          </h2>
          <Row>
            <Col lg={4} md={6} className="col-12" data-aos="zoom-out-right">
              <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                <img src={Olympus} alt="Olympus" />
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              className="col-12 pt-4 pt-md-0"
              data-aos="zoom-out-right"
            >
              <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                <img src={BondProtocol} alt="BondProtocol" />
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              className="col-12 pt-4 pt-lg-0"
              data-aos="zoom-out-right"
            >
              <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                <img src={Foundry} alt="Foundry" />
              </div>
            </Col>
            <Col lg={4} md={6} className="col-12 pt-4" data-aos="zoom-out-left">
              <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                <img src={Balancer} alt="Balancer" />
              </div>
            </Col>
            <Col lg={4} md={6} className="col-12 pt-4" data-aos="zoom-out-left">
              <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                <img src={Gearbox} alt="Gearbox" />
              </div>
            </Col>
            <Col lg={4} md={6} className="col-12 pt-4" data-aos="zoom-out-left">
              <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                <img src={Uniswap} alt="Uniswap" />
              </div>
            </Col>
          </Row>
          <div
            className="d-flex align-items-center justify-content-center pt_71"
            data-aos="zoom-out-right"
          >
            <button className="Announced_btn text_blue fs_6sm fw-semibold ff-raleway">
              More To Be Announced
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EcosystemPartners;

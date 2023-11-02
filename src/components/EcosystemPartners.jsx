import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Olympus from "../assets/images/png/Olympus.png";
import BondProtocol from "../assets/images/png/BondProtocol.png";
import Foundry from "../assets/images/png/Foundry.png";
import Balancer from "../assets/images/png/Balancer.png";
import Gearbox from "../assets/images/png/Gearbox.png";
import Uniswap from "../assets/images/png/Uniswap.png";

const EcosystemPartners = () => {
  return (
    <>
      <div id="Partners" className="py_partner">
        <Container className="custum_container">
          <h2 className="ff_NeueMachinaUltrabold fs_6xl text_blue text-center pb_63">
            Ecosystem Partners
          </h2>
          <Row>
            <Col lg={4} md={6} className="col-12">
              <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                <img src={Olympus} alt="Olympus" />
              </div>
            </Col>
            <Col lg={4} md={6} className="col-12 pt-4 pt-md-0">
              <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                <img src={BondProtocol} alt="BondProtocol" />
              </div>
            </Col>
            <Col lg={4} md={6} className="col-12 pt-4 pt-lg-0">
              <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                <img src={Foundry} alt="Foundry" />
              </div>
            </Col>
            <Col lg={4} md={6} className="col-12 pt-4">
              <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                <img src={Balancer} alt="Balancer" />
              </div>
            </Col>
            <Col lg={4} md={6} className="col-12 pt-4">
              <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                <img src={Gearbox} alt="Gearbox" />
              </div>
            </Col>
            <Col lg={4} md={6} className="col-12 pt-4">
              <div className="partner_box glass_hover d-flex align-items-center justify-content-center">
                <img src={Uniswap} alt="Uniswap" />
              </div>
            </Col>
          </Row>
          <div className="d-flex align-items-center justify-content-center pt_71">
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

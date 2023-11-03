import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Davoice from "../assets/images/png/Davoice.png";
import Solomon from "../assets/images/png/Solomon.png";
import Anton from "../assets/images/png/Aonton.png";
import { TeamTwitter } from "./IconImg";
import { Line } from "./IconImg";
import { TaemDiscoard } from "./IconImg";
import { In } from "./IconImg";

const OurTeam = () => {
  return (
    <>
      <div id="Team" className="bg_team">
        <Container className="custum_container">
          <h2
            className="text-white fs_6xl ff_NeueMachinaUltrabold text-center lh_120 text-capitalize py_team"
            data-aos="zoom-in-down"
          >
            our Team
          </h2>
          <Row className="align-items-center justify-content-center">
            <Col md={4} sm={6} className="col-12" data-aos="zoom-in-up">
              <div className="card_team">
                <img src={Davoice} alt="Davoice" className="w-100 rounded-1" />
                <p className="fs_4md ff-raleway fw-normal lh_120 text-black text-center mb-0 pt-3 pb-2">
                  Davoice
                </p>
                <p className="fs_6sm ff-raleway text-black text-center fw-normal lh_120 pb-4">
                  co-founder
                </p>
                <div className="d-flex gap-3 justify-content-center align-items-center">
                  <TeamTwitter />
                  <Line />
                  <TaemDiscoard />
                </div>
              </div>
            </Col>
            <Col
              md={4}
              sm={6}
              className="col-12 pt-4 pb-4 pt-md-0 pb-md-0"
              data-aos="zoom-in-up"
            >
              <div className="card_team">
                <img src={Solomon} alt="Solomon" className="w-100 rounded-1" />
                <p className="fs_4md ff-raleway fw-normal lh_120 text-black text-center mb-0 pt-3 pb-2">
                  Solomon Adekale
                </p>
                <p className="fs_6sm ff-raleway text-black text-center fw-normal lh_120 pb-4">
                  co-founder
                </p>
                <div className="d-flex gap-3 justify-content-center align-items-center">
                  <TeamTwitter />
                  <Line />
                  <TaemDiscoard />
                  <Line />
                  <In />
                </div>
              </div>
            </Col>
            <Col
              md={4}
              sm={6}
              className="col-12 pb-5 pb-md-0"
              data-aos="zoom-in-up"
            >
              <div className="card_team">
                <img src={Anton} alt="Anton" className="w-100 rounded-1" />
                <p className="fs_4md ff-raleway fw-normal lh_120 text-black text-center mb-0 pt-3 pb-2">
                  Anton
                </p>
                <p className="fs_6sm ff-raleway text-black text-center fw-normal lh_120 pb-4">
                  Co-Founder | Lead Developer
                </p>
                <div className="d-flex gap-3 justify-content-center align-items-center">
                  <TeamTwitter />
                  <Line />
                  <TaemDiscoard />
                  <Line />
                  <In />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurTeam;

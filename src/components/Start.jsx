import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Start = () => {
  return (
    <>
      <div className="bg_supply py_supply">
        <Container className="custum_container">
          <h2
            className="text-white text-center ff-jakarta fs_2xxl lh_120 text-capitalize fw-bold mb-0"
            data-aos="fade-right"
          >
            170k Total Starting Supply
          </h2>
          <p
            className="text-white text-center fw-normal lh_183"
            data-aos="fade-right"
          >
            Initial BONDing Offering (IBO)* Phases
          </p>
          <div className="d-flex align-items-center justify-content-center pt_71">
            <div className="overflow-lg-none overflow-auto">
              <div className="pb-5 pt-3 w_md_900 w_550" data-aos="fade-left">
                <Row className="border_bottom align-items-center justify-content-center">
                  <Col className="col-4">
                    <p className="ff-raleway fw-normal fs_md text-white">
                      Round 1
                    </p>
                  </Col>
                  <Col className="col-4 d-flex align-items-center justify-content-center">
                    <p className="ff-raleway fw-normal fs_md text-white">
                      10,000 EEFI Bonds
                    </p>
                  </Col>
                  <Col className="col-4 d-flex align-items-center justify-content-end">
                    <p className="ff-raleway fw-normal fs_md text-white">
                      {" "}
                      <span className="fs_8sm">@</span> $12
                    </p>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end">
                  <p className="text-white ff_jakarta fw-normal fs_16 pt-2 font_italic">
                    Vested (locked) for 1 Year
                  </p>
                </div>
                <Row className="border_bottom align-items-center justify-content-center">
                  <Col className="col-4">
                    <p className="ff-raleway fw-normal fs_md text-white">
                      Round 2
                    </p>
                  </Col>
                  <Col className="col-4 d-flex align-items-center justify-content-center">
                    <p className="ff-raleway fw-normal fs_md text-white">
                      12,777 EEFI Bonds
                    </p>
                  </Col>
                  <Col className="col-4 d-flex align-items-center justify-content-end">
                    <p className="ff-raleway fw-normal fs_md text-white">
                      {" "}
                      <span className="fs_8sm">@</span> $18
                    </p>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end">
                  <p className="text-white ff_jakarta fw-normal fs_16 pt-2 font_italic">
                    Vested (locked) for six months
                  </p>
                </div>
                <Row className="border_bottom align-items-center justify-content-center">
                  <Col className="col-4">
                    <p className="ff-raleway fw-normal fs_md text-white">
                      Round 3
                    </p>
                  </Col>
                  <Col className="col-4 d-flex align-items-center justify-content-center">
                    <p className="ff-raleway fw-normal fs_md text-white">
                      25,000 EEFI Bonds
                    </p>
                  </Col>
                  <Col className="col-4 d-flex align-items-center justify-content-end">
                    <p className="ff-raleway fw-normal fs_md text-white">
                      {" "}
                      <span className="fs_8sm">@</span> $26
                    </p>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end">
                  <p className="text-white ff_jakarta fw-normal fs_16 pt-2 font_italic">
                    No vesting or lock up periods. Available at launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center d-flex flex-column justify-content-center align-items-center pt-lg-5"
            data-aos="fade-right"
          >
            <p className="ff-raleway fw-normal fs_md text-white lh-150 text-decoration-underline">
              (47,777 or around <span className="fs_36 ff_jakarta">28% </span>
              <span className=""> of total starting supply is up for IBO)</span>
            </p>
            <p className="ff-raleway fs_12 fw-normal text-white mw_521 text-center opacity_08">
              Individuals who hold <span className="fs_4sm">$EEFI</span> will
              also receive an airdrop of the protocol's governance token{" "}
              <span className="fs_4sm">$EFT</span> ...learn more
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Start;

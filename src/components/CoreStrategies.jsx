import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { A_circle } from "./IconImg";
import { I } from "./IconImg";
import TextImg from "../assets/images/png/$AMPL.png";

const CoreStrategies = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="About" className="Bg_blue mb_1 py_coresec mt_10">
      <Container className="custum_container">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h2 className="text-white ff_NeueMachinaUltrabold lh_120 text-capitalize fs_6xl text-center mb-0 pb-4">
            Core Strategies
          </h2>
          <p className="text-white opacity_08 lh_160 ff-raleway fw-normal text-center mw_819 mb-0 pb-5">
            Our initial strategies use powerful burgeoning trends like Real
            Yield, Rebase, and others to generate cutting-edged yield
            innovations. These yield strategies stretch beyond the drought in
            stable coins and set the value for our native protocol token $EEFI.
            Check them out!'
          </p>
        </div>
        <Slider {...settings}>
          <div>
            <Row>
              <Col
                lg={6}
                className="d-flex align-items-center justify-content-center position-relative"
              >
                <div className="A_card z-1">
                  <button className="Innovation_btn text-white lh_160 ff-raleway fw-normal fs_4sm text-capitalize">
                    Innovation
                  </button>
                  <div className="d-flex align-items-center justify-content-center">
                    <A_circle />
                  </div>
                  <div className="d-flex justify-content-between pb-3">
                    <p className="lh_155 ff-raleway fs_6sm fw-normal text-white opacity_08 mb-0">
                      Projected Yield (APY)
                    </p>
                    <p className="text_darkblue ff-inter fs_6sm lh_155 fw-bold mb-0">
                      7,777,777%
                    </p>
                  </div>
                  <div className="d-flex justify-content-between pb-3 bottom_line position-relative">
                    <p className="lh_155 ff-raleway fw-normal fs_6sm text-white opacity_05 mb-0">
                      Current Deposits
                    </p>
                    <p className="text-white lh_155 fs_6sm ff-inter fw-medium mb-0">
                      0.00 AMPL
                    </p>
                  </div>
                  <div className="d-flex justify-content-between pt-3 pb-4">
                    <p className="lh_155 fw-normal ff-raleway fs_6sm text-white opacity_05 mb-0">
                      Max Capacity
                    </p>
                    <p className="lh_155 fw-medium ff-inter fs_6sm text-white mb-0">
                      0.00 AMPL
                    </p>
                  </div>
                </div>
                <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
                  <img src={TextImg} alt="TextImg" className="w-100 mw-485" />
                </div>
              </Col>
              <Col
                lg={6}
                className="d-flex align-items-start align-items-lg-center justify-content-start pt-5 pt-lg-0"
              >
                <div className="overflow-y-auto">
                  <div className="h_340">
                    <p className="lh_120 fw-normal ff_NeueMachinaRegular text-capitalize text-white fs_8lg mb-0 pb-3">
                      Elastic Vault
                    </p>
                    <div className="d-flex align-items-center gap-1 pb-3">
                      <p className="lh_160 ff-raleway fw-medium text-white fs_2md mb-0">
                        Deposit Token
                      </p>
                      <I />
                    </div>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal text-white mb-0 pb-3">
                      {" "}
                      $AMPL
                    </p>
                    <p className="fs_2md lh_160 text-white fw-normal ff-raleway pb-2">
                      Flagship Hedging Strategy
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      This one-of-a-kind strategy combines the benefits of
                      Rebase’s force multiplier effect and Real Yield’s
                      sustainability.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      Helps users to protect against downtrends and amplify
                      yield rewards during market up trends.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      This one-of-a-kind strategy combines the benefits of
                      Rebase’s force multiplier effect and Real Yield’s
                      sustainability.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      Helps users to protect against downtrends and amplify
                      yield rewards during market up trends.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      This one-of-a-kind strategy combines the benefits of
                      Rebase’s force multiplier effect and Real Yield’s
                      sustainability.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      Helps users to protect against downtrends and amplify
                      yield rewards during market up trends.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col
                lg={6}
                className="d-flex align-items-center justify-content-center position-relative"
              >
                <div className="A_card z-1">
                  <button className="Innovation_btn text-white lh_160 ff-raleway fw-normal fs_4sm text-capitalize">
                    Innovation
                  </button>
                  <div className="d-flex align-items-center justify-content-center">
                    <A_circle />
                  </div>
                  <div className="d-flex justify-content-between pb-3">
                    <p className="lh_155 ff-raleway fs_6sm fw-normal text-white opacity_08 mb-0">
                      Projected Yield (APY)
                    </p>
                    <p className="text_darkblue ff-inter fs_6sm lh_155 fw-bold mb-0">
                      7,777,777%
                    </p>
                  </div>
                  <div className="d-flex justify-content-between pb-3 bottom_line position-relative">
                    <p className="lh_155 ff-raleway fw-normal fs_6sm text-white opacity_05 mb-0">
                      Current Deposits
                    </p>
                    <p className="text-white lh_155 fs_6sm ff-inter fw-medium mb-0">
                      0.00 AMPL
                    </p>
                  </div>
                  <div className="d-flex justify-content-between pt-3 pb-4">
                    <p className="lh_155 fw-normal ff-raleway fs_6sm text-white opacity_05 mb-0">
                      Max Capacity
                    </p>
                    <p className="lh_155 fw-medium ff-inter fs_6sm text-white mb-0">
                      0.00 AMPL
                    </p>
                  </div>
                </div>
                <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
                  <img src={TextImg} alt="TextImg" className="w-100 mw-485" />
                </div>
              </Col>
              <Col
                lg={6}
                className="d-flex align-items-center justify-content-center pt-5 pt-lg-0"
              >
                <div className="overflow-y-auto">
                  <div className="h_340">
                    <p className="lh_120 fw-normal ff_NeueMachinaRegular text-capitalize text-white fs_8lg mb-0 pb-3">
                      Elastic Vault
                    </p>
                    <div className="d-flex align-items-center gap-1 pb-3">
                      <p className="lh_160 ff-raleway fw-medium text-white fs_2md mb-0">
                        Deposit Token
                      </p>
                      <I />
                    </div>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal text-white mb-0 pb-3">
                      {" "}
                      $AMPL
                    </p>
                    <p className="fs_2md lh_160 text-white fw-normal ff-raleway pb-2">
                      Flagship Hedging Strategy
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      This one-of-a-kind strategy combines the benefits of
                      Rebase’s force multiplier effect and Real Yield’s
                      sustainability.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      Helps users to protect against downtrends and amplify
                      yield rewards during market up trends.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      This one-of-a-kind strategy combines the benefits of
                      Rebase’s force multiplier effect and Real Yield’s
                      sustainability.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      Helps users to protect against downtrends and amplify
                      yield rewards during market up trends.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      This one-of-a-kind strategy combines the benefits of
                      Rebase’s force multiplier effect and Real Yield’s
                      sustainability.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      Helps users to protect against downtrends and amplify
                      yield rewards during market up trends.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col
                lg={6}
                className="d-flex align-items-center justify-content-center position-relative"
              >
                <div className="A_card z-1">
                  <button className="Innovation_btn text-white lh_160 ff-raleway fw-normal fs_4sm text-capitalize">
                    Innovation
                  </button>
                  <div className="d-flex align-items-center justify-content-center">
                    <A_circle />
                  </div>
                  <div className="d-flex justify-content-between pb-3">
                    <p className="lh_155 ff-raleway fs_6sm fw-normal text-white opacity_08 mb-0">
                      Projected Yield (APY)
                    </p>
                    <p className="text_darkblue ff-inter fs_6sm lh_155 fw-bold mb-0">
                      7,777,777%
                    </p>
                  </div>
                  <div className="d-flex justify-content-between pb-3 bottom_line position-relative">
                    <p className="lh_155 ff-raleway fw-normal fs_6sm text-white opacity_05 mb-0">
                      Current Deposits
                    </p>
                    <p className="text-white lh_155 fs_6sm ff-inter fw-medium mb-0">
                      0.00 AMPL
                    </p>
                  </div>
                  <div className="d-flex justify-content-between pt-3 pb-4">
                    <p className="lh_155 fw-normal ff-raleway fs_6sm text-white opacity_05 mb-0">
                      Max Capacity
                    </p>
                    <p className="lh_155 fw-medium ff-inter fs_6sm text-white mb-0">
                      0.00 AMPL
                    </p>
                  </div>
                </div>
                <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
                  <img src={TextImg} alt="TextImg" className="w-100 mw-485" />
                </div>
              </Col>
              <Col
                lg={6}
                className="d-flex align-items-center justify-content-center pt-5 pt-lg-0"
              >
                <div className="overflow-y-auto">
                  <div className="h_340">
                    <p className="lh_120 fw-normal ff_NeueMachinaRegular text-capitalize text-white fs_8lg mb-0 pb-3">
                      Elastic Vault
                    </p>
                    <div className="d-flex align-items-center gap-1 pb-3">
                      <p className="lh_160 ff-raleway fw-medium text-white fs_2md mb-0">
                        Deposit Token
                      </p>
                      <I />
                    </div>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal text-white mb-0 pb-3">
                      {" "}
                      $AMPL
                    </p>
                    <p className="fs_2md lh_160 text-white fw-normal ff-raleway pb-2">
                      Flagship Hedging Strategy
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      This one-of-a-kind strategy combines the benefits of
                      Rebase’s force multiplier effect and Real Yield’s
                      sustainability.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      Helps users to protect against downtrends and amplify
                      yield rewards during market up trends.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      This one-of-a-kind strategy combines the benefits of
                      Rebase’s force multiplier effect and Real Yield’s
                      sustainability.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      Helps users to protect against downtrends and amplify
                      yield rewards during market up trends.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      This one-of-a-kind strategy combines the benefits of
                      Rebase’s force multiplier effect and Real Yield’s
                      sustainability.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      Helps users to protect against downtrends and amplify
                      yield rewards during market up trends.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col
                lg={6}
                className="d-flex align-items-center justify-content-center position-relative"
              >
                <div className="A_card z-1">
                  <button className="Innovation_btn text-white lh_160 ff-raleway fw-normal fs_4sm text-capitalize">
                    Innovation
                  </button>
                  <div className="d-flex align-items-center justify-content-center">
                    <A_circle />
                  </div>
                  <div className="d-flex justify-content-between pb-3">
                    <p className="lh_155 ff-raleway fs_6sm fw-normal text-white opacity_08 mb-0">
                      Projected Yield (APY)
                    </p>
                    <p className="text_darkblue ff-inter fs_6sm lh_155 fw-bold mb-0">
                      7,777,777%
                    </p>
                  </div>
                  <div className="d-flex justify-content-between pb-3 bottom_line position-relative">
                    <p className="lh_155 ff-raleway fw-normal fs_6sm text-white opacity_05 mb-0">
                      Current Deposits
                    </p>
                    <p className="text-white lh_155 fs_6sm ff-inter fw-medium mb-0">
                      0.00 AMPL
                    </p>
                  </div>
                  <div className="d-flex justify-content-between pt-3 pb-4">
                    <p className="lh_155 fw-normal ff-raleway fs_6sm text-white opacity_05 mb-0">
                      Max Capacity
                    </p>
                    <p className="lh_155 fw-medium ff-inter fs_6sm text-white mb-0">
                      0.00 AMPL
                    </p>
                  </div>
                </div>
                <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">
                  <img src={TextImg} alt="TextImg" className="w-100 mw-485" />
                </div>
              </Col>
              <Col
                lg={6}
                className="d-flex align-items-center justify-content-center pt-5 pt-lg-0"
              >
                <div className="overflow-y-auto">
                  <div className="h_340">
                    <p className="lh_120 fw-normal ff_NeueMachinaRegular text-capitalize text-white fs_8lg mb-0 pb-3">
                      Elastic Vault
                    </p>
                    <div className="d-flex align-items-center gap-1 pb-3">
                      <p className="lh_160 ff-raleway fw-medium text-white fs_2md mb-0">
                        Deposit Token
                      </p>
                      <I />
                    </div>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal text-white mb-0 pb-3">
                      {" "}
                      $AMPL
                    </p>
                    <p className="fs_2md lh_160 text-white fw-normal ff-raleway pb-2">
                      Flagship Hedging Strategy
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      This one-of-a-kind strategy combines the benefits of
                      Rebase’s force multiplier effect and Real Yield’s
                      sustainability.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      Helps users to protect against downtrends and amplify
                      yield rewards during market up trends.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      This one-of-a-kind strategy combines the benefits of
                      Rebase’s force multiplier effect and Real Yield’s
                      sustainability.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      Helps users to protect against downtrends and amplify
                      yield rewards during market up trends.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      This one-of-a-kind strategy combines the benefits of
                      Rebase’s force multiplier effect and Real Yield’s
                      sustainability.
                    </p>
                    <p className="fs_6sm ff-raleway lh_160 fw-normal pb-2 text-white mw_442 mb-0">
                      Helps users to protect against downtrends and amplify
                      yield rewards during market up trends.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default CoreStrategies;

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cardImg1 from "../assets/images/png/bg-card1.png";
// import CardImg2 from "../assets/images/png/card-Img1.png";
import cardImg3 from "../assets/images/png/CardImg3.png";
import cardImg4 from "../assets/images/png/card-Img4.png";
import cardImg5 from "../assets/images/png/CardImg5.png";
import cardImg6 from "../assets/images/png/CardImg6.png";
import cardImg7 from "../assets/images/png/CardImg7.png";
import cardImg8 from "../assets/images/png/cardImg8.png";
import cardImg9 from "../assets/images/png/cardImg9.png";
import SmallImg1 from "../assets/images/png/Small-Img1.png";
// import SmallImg2 from "../assets/images/png/hoverImg.png";
import SmallImg3 from "../assets/images/png/Small-Img3.png";
import SmallImg4 from "../assets/images/png/Small-Img4.png";
import SmallImg5 from "../assets/images/png/SmallImag5.png";
import SmallImg6 from "../assets/images/png/SmallImg6.png";
import SmallImg7 from "../assets/images/png/SmallImg7.png";
import SmallImg8 from "../assets/images/png/SmallImg8.png";
import SmallImg9 from "../assets/images/png/SmallImg9.png";
import CircleImg1 from "../assets/images/webp/CircleImg1.webp";
import CircleImg3 from "../assets/images/webp/CircleImg1.webp";
import CircleImg4 from "../assets/images/webp/CircleImg4.webp";
import CircleImg5 from "../assets/images/webp/CircleImg5.webp";
import CircleImg6 from "../assets/images/webp/CircleImg6.webp";
import CircleImg7 from "../assets/images/webp/CircleImg7.webp";
import CircleImg8 from "../assets/images/webp/CircleImg8.webp";
import CircleImg9 from "../assets/images/webp/CircleImg9.webp";
import Arbiturm from "../assets/images/webp/Arbitrum.webp";
import GMX from "../assets/images/webp/GMX.webp";
import Vela from "../assets/images/webp/Vela.webp";
import JonesDao from "../assets/images/webp/JonesDao.webp";

const Strategies = () => {
  return (
    <>
      <div className="bg_Strategies bg-white py_startegies">
        <Container>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2
              className="text_blue fs_6xl ff_NeueMachinaUltrabold lh_120 text-capitalize text-center mb-0 pb-3"
              data-aos="zoom-in-up"
            >
              {" "}
              Future Use Cases (Strategies)
            </h2>
            <p
              className="text-center fs_6sm  text-black opacity_08 lh_160 ff-raleway mw_882 mb-0 pb_82"
              data-aos="zoom-in-up"
            >
              {" "}
              Elastic Protocol will continue to pioneer an expanding ecosystem
              of yield strategies that will cater to DeFi users across a range
              of blockchains, communities, and interests. Each will help in
              generating sustainable yield and expanding the utility of the
              native utility token $EEFI. Here is some of what we are planning
              and looking into:
            </p>
          </div>
          <Row className="justify-content-center">
            <Col lg={4} md={6} className="col-12" data-aos="fade-right">
              <div className="hover_effect position-relative overflow-hidden">
                <img
                  src={cardImg1}
                  alt="CardImg1"
                  className="w-100 rounded-2 cards_img"
                />
                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal">
                  NFT
                </button>
                <div className="img_box">
                  <img
                    src={SmallImg1}
                    alt="SmallImg1"
                    className="w-100 mw_74 rounded-2"
                  />
                </div>
                <div className="position-absolute nft_card">
                  <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0">
                    NFT
                  </p>
                  <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                    24 NFTs
                  </p>
                  <div className="btn_box d-flex align-items-center gap-2 mt-3">
                    <img src={CircleImg1} alt="CircleImg1" />
                    <p className="mb-0 text-white">@NFTs</p>
                  </div>
                </div>
                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 left-0 w-100 h-100 bottom_1">
                  <div className="over-img-box overflow-hidden">
                    <img
                      src={cardImg1}
                      alt="cardImg1"
                      className="w-100 overlay-small-img"
                    />
                  </div>
                  <h2 className="fs_4md ff_NeueMachinaLight fw-bold line-120 text-white text-capitalize pt-1 mt-3">
                    REAL YIELD
                  </h2>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8">
                    These are strategies that will explore other Real Yield
                    ecosystems outside of Olympus DAO. For example GMX - the
                    leading leverage platform that{" "}
                  </p>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8 mb-4">
                    distributes 100% of fees. We are also looking at Vela
                    Exchange, Jones DAO and many others on Arbitrum.
                  </p>

                  <h3 className="text-white fs_md ff-raleway fw-semibold line-160">
                    Platforms:{" "}
                  </h3>
                  <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                    <div className="col-3 ">
                      <img
                        src={Arbiturm}
                        alt="Arbiturm"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={GMX}
                        alt="GMX"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={Vela}
                        alt="Vela"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={JonesDao}
                        alt="JonesDao}"
                        className="overlay-card-partner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              className="col-12 pt-4 pt-md-0"
              data-aos="fade-right"
            >
              <div className="position-relative hover_effect overflow-hidden">
                <img
                  src={cardImg1}
                  alt="cardImg1"
                  className="w-100 rounded-2 cards_img"
                />
                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal">
                  NFT
                </button>
                <div className="img_box">
                  <img
                    src={SmallImg1}
                    alt="SmallImg1"
                    className="w-100 mw_74 rounded-2"
                  />
                </div>
                <div className="position-absolute nft_card">
                  <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0">
                    NFT
                  </p>
                  <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                    24 NFTs
                  </p>
                  <div className="btn_box d-flex align-items-center gap-2 mt-3">
                    <img src={CircleImg1} alt="CircleImg1" />
                    <p className="mb-0 text-white">@NFTs</p>
                  </div>
                </div>
                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 left-0 w-100 h-100 bottom_1">
                  <div className="over-img-box overflow-hidden">
                    <img
                      src={cardImg1}
                      alt="cardImg1"
                      className="w-100 overlay-small-img"
                    />
                  </div>
                  <h2 className="fs_4md ff_NeueMachinaLight fw-bold line-120 text-white text-capitalize pt-1 mt-3">
                    REAL YIELD
                  </h2>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8">
                    These are strategies that will explore other Real Yield
                    ecosystems outside of Olympus DAO. For example GMX - the
                    leading leverage platform that{" "}
                  </p>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8 mb-4">
                    distributes 100% of fees. We are also looking at Vela
                    Exchange, Jones DAO and many others on Arbitrum.
                  </p>

                  <h3 className="text-white fs_md ff-raleway fw-semibold line-160">
                    Platforms:{" "}
                  </h3>
                  <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                    <div className="col-3 ">
                      <img
                        src={Arbiturm}
                        alt="Arbiturm"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={GMX}
                        alt="GMX"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={Vela}
                        alt="Vela"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={JonesDao}
                        alt="JonesDao}"
                        className="overlay-card-partner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              className="col-12 pt-4 pt-lg-0"
              data-aos="fade-right"
            >
              <div className="position-relative hover_effect overflow-hidden">
                <img
                  src={cardImg3}
                  alt="cardImg3"
                  className="w-100 rounded-2 cards_img"
                />
                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal text-uppercase">
                  OPTIONS
                </button>
                <div className="img_box">
                  <img
                    src={SmallImg3}
                    alt="SmallImg3"
                    className="w-100 mw_74 rounded-2"
                  />
                </div>
                <div className="position-absolute nft_card">
                  <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0 text-uppercase">
                    OPTIONS
                  </p>
                  <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                    24 NFTs
                  </p>
                  <div className="btn_box d-flex align-items-center gap-2 mt-3">
                    <img src={CircleImg3} alt="CircleImg3" />
                    <p className="mb-0 text-white">@OPTIONS</p>
                  </div>
                </div>
                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 left-0 w-100 h-100 bottom_1">
                  <div className="over-img-box overflow-hidden">
                    <img
                      src={cardImg3}
                      alt="cardImg3"
                      className="w-100 overlay-small-img"
                    />
                  </div>
                  <h2 className="fs_4md ff_NeueMachinaLight fw-bold line-120 text-white text-capitalize pt-1 mt-3">
                    REAL YIELD
                  </h2>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8">
                    These are strategies that will explore other Real Yield
                    ecosystems outside of Olympus DAO. For example GMX - the
                    leading leverage platform that{" "}
                  </p>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8 mb-4">
                    distributes 100% of fees. We are also looking at Vela
                    Exchange, Jones DAO and many others on Arbitrum.
                  </p>

                  <h3 className="text-white fs_md ff-raleway fw-semibold line-160">
                    Platforms:{" "}
                  </h3>
                  <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                    <div className="col-3 ">
                      <img
                        src={Arbiturm}
                        alt="Arbiturm"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={GMX}
                        alt="GMX"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={Vela}
                        alt="Vela"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={JonesDao}
                        alt="JonesDao}"
                        className="overlay-card-partner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="col-12 py-4" data-aos="fade-left">
              <div className="position-relative hover_effect overflow-hidden">
                <img
                  src={cardImg4}
                  alt="cardImg4"
                  className="w-100 rounded-2 cards_img"
                />
                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal">
                  BONDs
                </button>
                <div className="img_box">
                  <img
                    src={SmallImg4}
                    alt="SmallImg4"
                    className="w-100 mw_74 rounded-2"
                  />
                </div>
                <div className="position-absolute nft_card">
                  <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0">
                    BONDs
                  </p>
                  <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                    24 NFTs
                  </p>
                  <div className="btn_box d-flex align-items-center gap-2 mt-3">
                    <img src={CircleImg4} alt="CircleImg4" />
                    <p className="mb-0 text-white">@BONDs</p>
                  </div>
                </div>
                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 left-0 w-100 h-100 bottom_1">
                  <div className="over-img-box overflow-hidden">
                    <img
                      src={cardImg4}
                      alt="cardImg4"
                      className="w-100 overlay-small-img"
                    />
                  </div>
                  <h2 className="fs_4md ff_NeueMachinaLight fw-bold line-120 text-white text-capitalize pt-1 mt-3">
                    REAL YIELD
                  </h2>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8">
                    These are strategies that will explore other Real Yield
                    ecosystems outside of Olympus DAO. For example GMX - the
                    leading leverage platform that{" "}
                  </p>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8 mb-4">
                    distributes 100% of fees. We are also looking at Vela
                    Exchange, Jones DAO and many others on Arbitrum.
                  </p>

                  <h3 className="text-white fs_md ff-raleway fw-semibold line-160">
                    Platforms:{" "}
                  </h3>
                  <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                    <div className="col-3 ">
                      <img
                        src={Arbiturm}
                        alt="Arbiturm"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={GMX}
                        alt="GMX"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={Vela}
                        alt="Vela"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={JonesDao}
                        alt="JonesDao}"
                        className="overlay-card-partner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="col-12 py-lg-4" data-aos="fade-left">
              <div className="position-relative hover_effect overflow-hidden">
                <img
                  src={cardImg5}
                  alt="cardImg5"
                  className="w-100 rounded-2 cards_img"
                />
                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal">
                  Social Trading
                </button>
                <div className="img_box">
                  <img
                    src={SmallImg5}
                    alt="SmallImg5"
                    className="w-100 mw_74 rounded-2"
                  />
                </div>
                <div className="position-absolute nft_card">
                  <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0">
                    Social Trading
                  </p>
                  <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                    24 NFTs
                  </p>
                  <div className="btn_box d-flex align-items-center gap-2 mt-3">
                    <img src={CircleImg5} alt="CircleImg5" />
                    <p className="mb-0 text-white">@Social Trading</p>
                  </div>
                </div>
                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 left-0 w-100 h-100 bottom_1">
                  <div className="over-img-box overflow-hidden">
                    <img
                      src={cardImg5}
                      alt="card_img5"
                      className="w-100 overlay-small-img"
                    />
                  </div>
                  <h2 className="fs_4md ff_NeueMachinaLight fw-bold line-120 text-white text-capitalize pt-1 mt-3">
                    REAL YIELD
                  </h2>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8">
                    These are strategies that will explore other Real Yield
                    ecosystems outside of Olympus DAO. For example GMX - the
                    leading leverage platform that{" "}
                  </p>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8 mb-4">
                    distributes 100% of fees. We are also looking at Vela
                    Exchange, Jones DAO and many others on Arbitrum.
                  </p>

                  <h3 className="text-white fs_md ff-raleway fw-semibold line-160">
                    Platforms:{" "}
                  </h3>
                  <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                    <div className="col-3 ">
                      <img
                        src={Arbiturm}
                        alt="Arbiturm"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={GMX}
                        alt="GMX"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={Vela}
                        alt="Vela"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={JonesDao}
                        alt="JonesDao}"
                        className="overlay-card-partner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              className="col-12 py-lg-4 pt-4"
              data-aos="fade-left"
            >
              <div className="position-relative hover_effect overflow-hidden">
                <img
                  src={cardImg6}
                  alt="cardImg6"
                  className="w-100 rounded-2 cards_img"
                />
                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal">
                  PERPS and Delta Neutral
                </button>
                <div className="img_box">
                  <img
                    src={SmallImg6}
                    alt="SmallImg6"
                    className="w-100 mw_74 rounded-2"
                  />
                </div>
                <div className="position-absolute nft_card">
                  <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0">
                    PERPS and Delta Neutral
                  </p>
                  <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                    24 NFTs
                  </p>
                  <div className="btn_box d-flex align-items-center gap-2 mt-3">
                    <img src={CircleImg6} alt="CircleImg6" />
                    <p className="mb-0 text-white">@PERPS and Delta Neutral</p>
                  </div>
                </div>
                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 left-0 w-100 h-100 bottom_1">
                  <div className="over-img-box overflow-hidden">
                    <img
                      src={cardImg6}
                      alt="card_img6"
                      className="w-100 overlay-small-img"
                    />
                  </div>
                  <h2 className="fs_4md ff_NeueMachinaLight fw-bold line-120 text-white text-capitalize pt-1 mt-3">
                    REAL YIELD
                  </h2>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8">
                    These are strategies that will explore other Real Yield
                    ecosystems outside of Olympus DAO. For example GMX - the
                    leading leverage platform that{" "}
                  </p>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8 mb-4">
                    distributes 100% of fees. We are also looking at Vela
                    Exchange, Jones DAO and many others on Arbitrum.
                  </p>

                  <h3 className="text-white fs_md ff-raleway fw-semibold line-160">
                    Platforms:{" "}
                  </h3>
                  <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                    <div className="col-3 ">
                      <img
                        src={Arbiturm}
                        alt="Arbiturm"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={GMX}
                        alt="GMX"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={Vela}
                        alt="Vela"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={JonesDao}
                        alt="JonesDao}"
                        className="overlay-card-partner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              className="col-12 pt-4 pt-lg-0"
              data-aos="fade-right"
            >
              <div className="position-relative hover_effect overflow-hidden">
                <img
                  src={cardImg7}
                  alt="cardImg7"
                  className="w-100 rounded-2 cards_img"
                />
                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal">
                  STABLECOINs
                </button>
                <div className="img_box">
                  <img
                    src={SmallImg7}
                    alt="SmallImg7"
                    className="w-100 mw_74 rounded-2"
                  />
                </div>
                <div className="position-absolute nft_card">
                  <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0">
                    STABLECOINs
                  </p>
                  <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                    24 NFTs
                  </p>
                  <div className="btn_box d-flex align-items-center gap-2 mt-3">
                    <img src={CircleImg7} alt="CircleImg7" />
                    <p className="mb-0 text-white">@STABLECOINs</p>
                  </div>
                </div>
                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 left-0 w-100 h-100 bottom_1">
                  <div className="over-img-box overflow-hidden">
                    <img
                      src={cardImg7}
                      alt="cardImg7"
                      className="w-100 overlay-small-img"
                    />
                  </div>
                  <h2 className="fs_4md ff_NeueMachinaLight fw-bold line-120 text-white text-capitalize pt-1 mt-3">
                    REAL YIELD
                  </h2>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8">
                    These are strategies that will explore other Real Yield
                    ecosystems outside of Olympus DAO. For example GMX - the
                    leading leverage platform that{" "}
                  </p>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8 mb-4">
                    distributes 100% of fees. We are also looking at Vela
                    Exchange, Jones DAO and many others on Arbitrum.
                  </p>

                  <h3 className="text-white fs_md ff-raleway fw-semibold line-160">
                    Platforms:{" "}
                  </h3>
                  <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                    <div className="col-3 ">
                      <img
                        src={Arbiturm}
                        alt="Arbiturm"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={GMX}
                        alt="GMX"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={Vela}
                        alt="Vela"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={JonesDao}
                        alt="JonesDao}"
                        className="overlay-card-partner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              className="col-12 pt-4 pt-lg-0"
              data-aos="fade-right"
            >
              <div className="position-relative hover_effect overflow-hidden">
                <img
                  src={cardImg8}
                  alt="cardImg8"
                  className="w-100 rounded-2 cards_img"
                />
                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal">
                  Ai Smart Vaults
                </button>
                <div className="img_box">
                  <img
                    src={SmallImg8}
                    alt="SmallImg8"
                    className="w-100 mw_74 rounded-2"
                  />
                </div>
                <div className="position-absolute nft_card">
                  <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0">
                    Ai Smart Vaults
                  </p>
                  <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                    24 NFTs
                  </p>
                  <div className="btn_box d-flex align-items-center gap-2 mt-3">
                    <img src={CircleImg8} alt="CircleImg8" />
                    <p className="mb-0 text-white">@Ai Smart Vaults</p>
                  </div>
                </div>
                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 left-0 w-100 h-100 bottom_1">
                  <div className="over-img-box overflow-hidden">
                    <img
                      src={cardImg8}
                      alt="cardImg8"
                      className="w-100 overlay-small-img"
                    />
                  </div>
                  <h2 className="fs_4md ff_NeueMachinaLight fw-bold line-120 text-white text-capitalize pt-1 mt-3">
                    REAL YIELD
                  </h2>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8">
                    These are strategies that will explore other Real Yield
                    ecosystems outside of Olympus DAO. For example GMX - the
                    leading leverage platform that{" "}
                  </p>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8 mb-4">
                    distributes 100% of fees. We are also looking at Vela
                    Exchange, Jones DAO and many others on Arbitrum.
                  </p>

                  <h3 className="text-white fs_md ff-raleway fw-semibold line-160">
                    Platforms:{" "}
                  </h3>
                  <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                    <div className="col-3 ">
                      <img
                        src={Arbiturm}
                        alt="Arbiturm"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={GMX}
                        alt="GMX"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={Vela}
                        alt="Vela"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={JonesDao}
                        alt="JonesDao}"
                        className="overlay-card-partner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              md={6}
              className="col-12 pt-4 pt-lg-0"
              data-aos="fade-right"
            >
              <div className="position-relative hover_effect overflow-hidden">
                <img
                  src={cardImg9}
                  alt="cardImg9"
                  className="w-100 rounded-2 cards_img"
                />
                <button className="NFT_button text-white fs_4sm lh_160 ff-raleway fw-normal">
                  Ai Smart Vaults
                </button>
                <div className="img_box">
                  <img
                    src={SmallImg9}
                    alt="SmallImg9"
                    className="w-100 mw_74 rounded-2"
                  />
                </div>
                <div className="position-absolute nft_card">
                  <p className="fs_md text-white lh_120 ff_NeueMachinaUltrabold mb-0">
                    Ai Smart Vaults
                  </p>
                  <p className="text-white lh_160 fw-normal ff-raleway fs_6sm mb-0 pt-1">
                    24 NFTs
                  </p>
                  <div className="btn_box d-flex align-items-center gap-2 mt-3">
                    <img src={CircleImg9} alt="CircleImg9" />
                    <p className="mb-0 text-white">@Ai Smart Vaults</p>
                  </div>
                </div>
                <div className="overlay-card position-absolute d-flex flex-column justify-content-between z-1 left-0 w-100 h-100 bottom_1">
                  <div className="over-img-box overflow-hidden">
                    <img
                      src={cardImg9}
                      alt="cardImg9"
                      className="w-100 overlay-small-img"
                    />
                  </div>
                  <h2 className="fs_4md ff_NeueMachinaLight fw-bold line-120 text-white text-capitalize pt-1 mt-3">
                    REAL YIELD
                  </h2>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8">
                    These are strategies that will explore other Real Yield
                    ecosystems outside of Olympus DAO. For example GMX - the
                    leading leverage platform that{" "}
                  </p>
                  <p className="text-white ff-raleway fs-6sm fw-normal line-160 op8 mb-4">
                    distributes 100% of fees. We are also looking at Vela
                    Exchange, Jones DAO and many others on Arbitrum.
                  </p>

                  <h3 className="text-white fs_md ff-raleway fw-semibold line-160">
                    Platforms:{" "}
                  </h3>
                  <div className="row d-flex justify-content-between mt-2 pt-1 w-100">
                    <div className="col-3 ">
                      <img
                        src={Arbiturm}
                        alt="Arbiturm"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={GMX}
                        alt="GMX"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={Vela}
                        alt="Vela"
                        className="overlay-card-partner"
                      />
                    </div>
                    <div className="col-3">
                      <img
                        src={JonesDao}
                        alt="JonesDao}"
                        className="overlay-card-partner"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Strategies;

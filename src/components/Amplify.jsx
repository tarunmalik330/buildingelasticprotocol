import React from "react";
import Container from "react-bootstrap/Container";
import cloudImg_files from "../assets/images/webp/ABC.webp";

const Amplify = () => {
  return (
    <div className="bg_amplify bg_amplify min_vh_100 h_350 h_sm_500 d-flex flex-column position-relative ">
      <img
        src={cloudImg_files}
        alt="cloudImg_files"
        className="position-absolute start-0 w-100 end-0 bottom_11 d-none d-lg-block"
      />
      <div className="d-flex justify-content-center bg-black">
        <h2
          className="ff-jakarta text-white fs_2xxl fw-bolder mb-0 pt-2 pt-xxl-4 bg-black pb-2 pt-lg-3"
          data-aos="zoom-in"
        >
          Amplify and stretch gains
        </h2>
      </div>
      <Container className="custum_container d-flex flex-column justify-content-center align-items-center flex-sm-grow-1">
        <p
          className="text-white ff-raleway fw-normal fs_4sm mw_554 text-center pt_169 pt-sm-0 pt_202 pt_227"
          data-aos="zoom-in-up"
        >
          We take a different balanced approach to finding and creating yield
          opportunities in the everchanging crypto market. Our yield strategies
          help users stay protected and hedged during bear markets and amplify
          yield during bull markets without resorting to leverage or other
          dangerous techniques.
        </p>
      </Container>
    </div>
  );
};

export default Amplify;

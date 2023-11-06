import React from "react";
import Container from "react-bootstrap/Container";
import Footerlogo from "../assets/images/webp/fooetrlogo.webp";
import { Youtube } from "./IconImg";
import { Githube } from "./IconImg";
import { Twitter } from "./IconImg";
import { Au } from "./IconImg";
import { Discoard } from "./IconImg";
import { M } from "./IconImg";
import { Mail } from "./IconImg";
import { Arrow } from "./IconImg";
import { Pdf } from "./IconImg";

const Footer = () => {
  return (
    <>
      <div className="bg-white py_footer">
        <Container>
          <div className="text-center">
            <img src={Footerlogo} alt="Footerlogo" className="w-100 mw_107" />
            <p className="text_blue fs_6sm fw-normal ff-raleway py-3 mb-0">
              Join Our Community
            </p>
            <ul className="d-flex list-unstyled flex_flow_wrap align-items-center justify-content-center mb-0">
              <li>
                <a
                  className="text_grey fs_6sm ff-raleway fw-normal footer_link"
                  href=""
                >
                  About
                </a>
              </li>
              <li className="mx_12">
                <a
                  className="text_grey fs_6sm ff-raleway fw-normal footer_link text-nowrap"
                  href=""
                >
                  IBO Event
                </a>
              </li>
              <li className="mx_12">
                <a
                  className="text_grey fs_6sm ff-raleway fw-normal footer_link text-nowrap"
                  href=""
                >
                  EEFI Tokenomics
                </a>
              </li>
              <li className="mx_12">
                <a
                  className="text_grey fs_6sm ff-raleway fw-normal footer_link"
                  href=""
                >
                  Team
                </a>
              </li>
              <li className="mx_12">
                <a
                  className="text_grey fs_6sm ff-raleway fw-normal footer_link"
                  href=""
                >
                  Roadmap
                </a>
              </li>
              <li className="mx_12">
                <a
                  className="text_grey fs_6sm ff-raleway fw-normal footer_link"
                  href=""
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  className="text_grey fs_6sm ff-raleway fw-normal footer_link"
                  href=""
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="pt-4 d-lg-flex flex-wrap align-items-center justify-content-center">
              <Youtube />
              <Githube />
              <Twitter />
              <Au />
              <Discoard />
              <M />
              <Mail />
              <Arrow />
              <Pdf />
            </div>
          </div>
        </Container>
      </div>
      <div className="bg_white">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0 py-3 text_lightBlack ff-raleway fw-normal fs_4sm">
              @Copyright 2023
            </p>
            <p className="mb-0 py-3 text_lightBlack ff-raleway fw-normal fs_4sm">
              Privacy policy
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;

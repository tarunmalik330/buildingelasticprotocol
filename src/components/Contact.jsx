import React from "react";
import Container from "react-bootstrap/Container";

const Contact = () => {
  return (
    <>
      <div className="contact_bg py_contact d-none d-lg-block">
        <Container className="custum_container">
          <h2 className="ff_NeueMachinaUltrabold fs_6xl text-white text-center lh_120 mb-0">
            Contact Us
          </h2>
          <p className="fs_sm6 ff-raleway lh_160 fw-normal text-white opacity_08 text-center mb-0 pt-3 pb-5">
            Have a question or want to contribute? Reach out to us.
          </p>
          <form className="pt-4 pb-4 w-100">
            <div className="w-100 d-flex gap-5 pb-3">
              <input
                type="text"
                placeholder="First Name"
                className="w-50 py-4 bg-transparent outline_none border_bottom ff-raleway fs_6sm fw-normal text-white lh-150"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-50 py-4 bg-transparent outline_none border_bottom ff-raleway fs_6sm fw-normal text-white lh-150"
              />
            </div>
            <div className="w-100 d-flex gap-5 pb-3">
              <input
                type="text"
                placeholder="Email"
                className="w-50 py-4 bg-transparent outline_none border_bottom ff-raleway fs_6sm fw-normal text-white lh-150"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-50 py-4 bg-transparent outline_none border_bottom ff-raleway fs_6sm fw-normal text-white lh-150"
              />
            </div>
            <textarea
              name="#"
              id="#"
              rows="4"
              placeholder="Massage"
              className="resize_none pt-5 w-100 bg-transparent outline_none border_bottom ff-raleway fs_6sm fw-normal text-white lh-150 "
            ></textarea>
          </form>
          <div className="d-flex align-items-center justify-content-center pt_64">
            <button className="button glass_hover text-white ff-raleway fw-medium fs_md">
              SUBMIT'
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
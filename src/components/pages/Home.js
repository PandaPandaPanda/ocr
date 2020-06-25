import React, { Fragment } from "react";
import OCRState from "../../context/ocr/OCRState";
import OCR from "../ocr/OCR";

const Home = () => {
  return (
    <Fragment>
      <OCRState>
        <OCR></OCR>
      </OCRState>
    </Fragment>
  );
};

export default Home;

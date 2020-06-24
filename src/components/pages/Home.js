import React, { Fragment } from "react";
import Search from "../users/Search";
import Users from "../users/Users";
import OCRState from "../../context/ocr/OCRState";
import OCR from "../ocr/OCR";

const Home = () => {
  return (
    <Fragment>
      <OCRState>
        <Search></Search>
        <Users></Users>
        <OCR></OCR>
      </OCRState>
    </Fragment>
  );
};

export default Home;

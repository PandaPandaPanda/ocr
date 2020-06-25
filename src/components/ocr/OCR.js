import React, { useContext, Fragment } from "react";
import Progress from "./Progress";
import OCRContext from "../../context/ocr/ocrContext";
import "./OCR.css";
import Card from "react-bootstrap/Card";

const OCR = () => {
  const ocrContext = useContext(OCRContext);

  const {
    imgSrc,
    result,
    uploadImg,
    processImg,
    progressBar,
    progress,
    clearOCR,
  } = ocrContext;

  const handlePreview = (e) => {
    e.preventDefault();

    let file = e.target.files[0];
    let reader = new FileReader();

    if (e.target.files.length === 0) {
      return;
    }

    reader.onloadend = (e) => {
      uploadImg(reader.result);
    };
    //reader.result
    reader.readAsDataURL(file);
  };

  return (
    <div id="ocr">
      <input type="file" onChange={handlePreview} />

      <div id="ocr-content">
        <Card primary style={{ width: "18rem" }} className="m-2">
          <Card.Header>Preview</Card.Header>
          <Card.Body>
            <Card.Img src={imgSrc}></Card.Img>
          </Card.Body>
        </Card>

        <Card primary style={{ width: "18rem" }} className="m-2">
          <Card.Header>Result</Card.Header>
          <Card.Text>{result}</Card.Text>
        </Card>
      </div>

      {imgSrc !== null && (
        <Fragment>
          <Progress progress={progress} progressBar={progressBar}></Progress>

          <button
            className="tbn btn-light btn-block mb-2"
            onClick={result !== null ? clearOCR : processImg}
          >
            {result !== null ? "Clear" : "Process"}
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default OCR;

{
  /* <button className="tbn btn-light btn-block" onClick={processImg}>
          Process
        </button> */
}

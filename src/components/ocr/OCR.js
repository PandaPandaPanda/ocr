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
    <Fragment>
      <div id="ocr">
        <div id="ocr-content">
          <Card border="secondary">
            <Card.Header>Upload Image</Card.Header>
            <Card.Body>
              {imgSrc === null ? (
                <div class="file-upload">
                  <input type="file" onChange={handlePreview} />
                  <i class="fa fa-arrow-up"></i>
                </div>
              ) : (
                <Card.Img src={imgSrc}></Card.Img>
              )}
            </Card.Body>
          </Card>

          <Card border="secondary">
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
    </Fragment>
  );
};

export default OCR;

{
  /* <button className="tbn btn-light btn-block" onClick={processImg}>
          Process
        </button> */
}

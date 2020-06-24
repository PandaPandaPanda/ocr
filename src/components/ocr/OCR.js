import React, { useContext, Fragment } from "react";
import Progress from "./Progress";
import OCRContext from "../../context/ocr/ocrContext";
import "../../App.css";

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
      <input type="file" onChange={handlePreview} />

      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <h2>Preview</h2>
          <img src={imgSrc} alt="" style={{ width: "20rem", height: "auto" }} />
        </div>

        <div style={{ width: "50%" }}>
          {result != null && (
            <Fragment>
              <div style={{ margin: "0.5rem 0 1rem" }}>
                <h2>Result</h2>
                <p>{result}</p>
              </div>
            </Fragment>
          )}
        </div>
      </div>
      {imgSrc !== null && (
        <div onClick={processImg}>
          <Progress progress={progress} progressBar={progressBar}></Progress>
        </div>
      )}
      {result != null && (
        <button className="tbn btn-light btn-block" onClick={clearOCR}>
          Clear
        </button>
      )}
    </Fragment>
  );
};

export default OCR;

{
  /* <button className="tbn btn-light btn-block" onClick={processImg}>
          Process
        </button> */
}

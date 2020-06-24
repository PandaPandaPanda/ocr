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
    <div style={{ textAlign: "center" }}>
      <input type="file" onChange={handlePreview} />
      <h2>Preview</h2>
      <img src={imgSrc} alt="" style={{ width: "20rem", height: "auto" }} />
      {imgSrc !== null && (
        <div onClick={processImg}>
          <Progress progress={progress} progressBar={progressBar}></Progress>
        </div>
      )}
      {/* {progressBar === true && <Progress progress={progress} progressBar={progressBar}/>} */}
      {result != null && (
        <div style={{ margin: "0 0 10rem" }}>
          <h2>Result</h2>
          <p>{result}</p>
        </div>
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

import React, { useReducer } from "react";
import OCRContext from "./ocrContext";
import OCRReducer from "./ocrReducer";
import Tesseract from "tesseract.js";
import {
  LOAD_IMG,
  PROCESS_IMG,
  SET_PROGRESS_BAR,
  SET_PROGRESS,
  CLEAR_OCR,
} from "../types";

const OCRState = (props) => {
  const initialState = {
    imgSrc: null,
    result: null,
    progressBar: false,
    progress: 0,
  };

  const [state, dispatch] = useReducer(OCRReducer, initialState);

  //Upload Img
  const uploadImg = (src) => {
    dispatch({
      type: LOAD_IMG,
      payload: src,
    });
  };

  const processImg = () => {
    setProgressBar();

    Tesseract.recognize(state.imgSrc, "eng", {
      logger: (m) => {
        console.log(m);
        if (m.status == "recognizing text") {
          setProgress(Math.round(m.progress * 100));
        }
      },
    }).then(({ data: { text } }) => {
      dispatch({
        type: PROCESS_IMG,
        payload: text,
      });
    });
  };

  const clearOCR = () => dispatch({ type: CLEAR_OCR });

  const setProgressBar = () => dispatch({ type: SET_PROGRESS_BAR });

  const setProgress = (progress) =>
    dispatch({ type: SET_PROGRESS, payload: progress });

  return (
    <OCRContext.Provider
      value={{
        imgSrc: state.imgSrc,
        result: state.result,
        progressBar: state.progressBar,
        progress: state.progress,
        uploadImg,
        processImg,
        setProgress,
        clearOCR,
      }}
    >
      {props.children}
    </OCRContext.Provider>
  );
};

export default OCRState;

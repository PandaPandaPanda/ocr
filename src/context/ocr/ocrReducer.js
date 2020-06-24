import {
  LOAD_IMG,
  PROCESS_IMG,
  CLEAR_OCR,
  SET_PROGRESS_BAR,
  SET_PROGRESS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOAD_IMG:
      return {
        imgSrc: action.payload,
        result: null,
        progressBar: false,
        progress: 0,
      };
    case CLEAR_OCR:
      return {
        ...state,
        imgSrc: null,
        result: null,
        progressBar: false,
        progress: 0,
      };
    case PROCESS_IMG:
      return {
        ...state,
        result: action.payload,
      };
    case SET_PROGRESS:
      return {
        ...state,
        progress: action.payload,
      };
    case SET_PROGRESS_BAR:
      return {
        ...state,
        progressBar: true,
      };
    default:
      return state;
  }
};

import React from "react";

const Progress = ({ progress, progressBar }) => {
  return (
    <div
      className="progress"
      style={{
        backgroundColor: "#d8d8d8",
        borderRadius: "20px",
        position: "relative",
        margin: "2rem auto 2rem",
        height: "2rem",
        width: "80%",
        textAlign: "center",
      }}
    >
      {progressBar ? (
        <div
          className="progress-done"
          style={{
            background: "linear-gradient(to left, #F2709C, #FF9472)",
            boxShadow: "0 3px 3px -5px #F2709C, 0 2px 5px #F2709C",
            borderRadius: "20px",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "0",
            opacity: "1",
            transition: "ease",
            width: `${progress}%`,
          }}
        >
          <img
            src={require("../../resources/duck.gif")}
            style={{
              height: "4rem",
              width: "3rem",
              position: "absolute",
              left: `${progress - 3}%`,
            }}
          ></img>
        </div>
      ) : (
        "Process"
      )}
    </div>
  );
};

export default Progress;

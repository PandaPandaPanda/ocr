import React from "react";

const Progress = ({ progress, progressBar }) => {
  return (
    <div
      className="progress"
      style={{
        backgroundColor: "#d8d8d8",
        borderRadius: "20px",
        position: "relative",
        margin: "2rem auto 5rem",
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
            transition: "1s ease 0.3s",
            width: `${progress}%`,
          }}
        ></div>
      ) : (
        "Process"
      )}
    </div>
  );
};

export default Progress;

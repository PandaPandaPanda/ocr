import React, { Fragment } from "react";

const About = () => {
  return (
    <div style={{ margin: "auto"}}>
      <h1 style={{ margin: 50}}>UWSE25 - A Need For Speed</h1>
      <p>
        Greetings friend! We are Kevin Xu and Jenny Tai. Nice to meet you!
      <br></br>
        We interpret "A need for speed" as in efficiency. As a result, we made a
        website that will help improve productivity. 
      </p>
      <p style={{ margin: 20}}>
        It uses <strong>OCR</strong> <em>(from Google tesseract)</em> to recognize text in images. <br></br>
        It can be used in many different scenarios relevant to us <strong>UW students</strong>, including:
      </p>
      <ol style={{ margin: 20}}>
        <li>
          <strong>Easier</strong> to take lesson notes with just one click on your phone
        </li>
        <li>
          <strong>Save storage</strong> space by turning hand-writen notes to txt files
        </li>
        <li>
          <strong>Searchable</strong> notes are easier to review before exam
        </li>
        <li>
          <strong>Editable</strong> for notes that needs to be frequently updated
        </li>
        <li>
          Saving the <strong>environment</strong> by reducing the amount of paper needed in the classroom
        </li>
      </ol>
      <p style={{ margin: 30}}>
        We hope this project would be helpful to UWaterloo SE students in the future
      <br></br>
        Especially the goose on the progress bar, we hope it made you laugh. 
      </p>
      <h3 style={{fontSize: 22}}>Version: 1.0.0</h3>
      <h3>Made by Kevin and Jenny</h3>
    </div>
  );
};

export default About;

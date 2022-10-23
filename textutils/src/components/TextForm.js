import React, { useState } from "react";

export default function TextForm(props) {
  const handleUppercaseClick = () => {
    setText(text.toLocaleUpperCase());
  };

  const handleOnChnage = (event) => {
    setText(event.target.value);
  };

  const handleLowercaseClick = (event) => {
    setText(text.toLocaleLowerCase());
  };

  //state in react
  const [text, setText] = useState("");
  /*   setText("updated text"); */
  return (
    <>
      <div className="container">
        <h1>
          {props.heading}-{text}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myform"
            rows="8"
            onChange={handleOnChnage}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUppercaseClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLowercaseClick}>
          Convert to lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>    
        Your Text Summery
        </h2>
        <p>{text.split(" ").length  } words {text.length} character</p>
        <p>{0.008 *text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

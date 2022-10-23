import React, { useState } from "react";

export default function TextForm(props) {
  const handleUppercaseClick = () => {
    setText(text.toLocaleUpperCase())
  };

  const handleOnChnage = (event) => {
    setText(event.target.value)
  };

  //state in react
  const [text, setText] = useState("Enter Text Here");
  /*   setText("updated text"); */
  return (
    <div>
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
      <button className="btn btn-primary" onClick={handleUppercaseClick}>
        Convert to uppercase
      </button>
    </div>
  );
}

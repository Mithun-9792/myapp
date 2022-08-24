import React, { useState } from "react";
import copy from "copy-to-clipboard";
// import PropTypes from 'prop-types'

export default function Form(props) {
  const handleUpclick = () => {
    // console.log("Uppercase was clicked.")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted in Uppercase!", "success");
  };
  const handleLoclick = () => {
    // console.log("Uppercase was clicked.")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted in Lowercase!", "success");
  };
  const handleDelclick = () => {
    // console.log("Uppercase was clicked.")
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extraspaces has been removed!", "success");
  };

  const copyToClipboard = () => {
    copy(text);
    props.showAlert("Text Copied in Clipboard!", "success");
  };

  const handleOnChange = (event) => {
    // console.log('On change')
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "#0f3056" }}>
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            onChange={handleOnChange}
            value={text}
            placeholder="Enter Text Here"
            style={{
              backgroundColor: props.mode === "dark" ? "#2857a6" : "white",
              color: props.mode === "dark" ? "white" : "#0f3056",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>
          Convert into Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>
          Convert into Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={copyToClipboard}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleDelclick}>
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Clear Extra Spaces
        </button>
      </div>
      <div
        className="contianer my-3"
        style={{ color: props.mode === "dark" ? "white" : "#0f3056" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== "".length;
            }).length
          }{" "}
          words and {text.length} characters have entered.
        </p>
        <p>
          Reading Speed ={" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          wpm{" "}
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter text to preview"}</p>
      </div>
    </>
  );
}

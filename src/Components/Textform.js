import React, { useState } from "react";

export default function Textform(props) {
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const removeExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  let [text, setText] = useState("");
  return (
    <>
      <div className="w-[70%]  m-auto h-[70%] mt-20">
        <div className="mx-[4%] text-sm sm:text-lg lg:text-2xl xl:text-3xl my-5 font-semibold">
          {props.title}
        </div>

        <div>
          <textarea
            id="text"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter the Text"
            className=" mx-[4%] w-[92%] md:h-[200px] h-[125px] rounded-lg cursor-text p-2 border-2 border-indigo-800"
          ></textarea>
          <div className="flex justify-start flex-wrap mx-[4%]">
            <button
              className="bg-indigo-700 text-white text-sm border-2 border-indigo-950 rounded-xl p-1 m-2 hover:bg-indigo-900"
              onClick={upperCase}
            >
              Convert to UpperCase
            </button>
            <button
              className="bg-indigo-700 text-white text-sm border-2 border-indigo-950 rounded-xl p-1 m-2 hover:bg-indigo-900"
              onClick={lowerCase}
            >
              Convert to LowerCase
            </button>
            <button
              className="bg-indigo-700 text-white text-sm border-2 border-indigo-950 rounded-xl p-1 m-2 hover:bg-indigo-900"
              onClick={removeExtraSpaces}
            >
              Remove Extra Spaces
            </button>
            <button
              className="bg-indigo-700 text-white text-sm border-2 border-indigo-950 rounded-xl p-1 m-2 hover:bg-indigo-900"
              onClick={copyText}
            >
              Copy Text
            </button>
            <button
              className="bg-indigo-700 text-white text-sm border-2 border-indigo-950 rounded-xl p-1 m-2 hover:bg-indigo-900"
              onClick={clearText}
            >
              Clear Text
            </button>
          </div>
        </div>
      </div>

      <div className="w-[70%] sm:text-left text-center  m-auto">
      <div className="mx-[4%] mt-6">
          <h1 className="font-semibold text-xl my-2">Your Text Summary</h1>
          <p className="mx-4">
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p className="mx-4">{0.008 * text.split(" ").length} Minutes Read</p>
          <h2 className="font-semibold text-xl mt-3">Preview</h2>
          <p className="mx-4">{text.length ? text : "Nothing to Preview"}</p>
        </div>
      </div>
    </>
  );
}

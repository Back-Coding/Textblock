// import React from 'react'

import React ,{useState} from "react";
import PropTypes from 'prop-types'



export default function TextEedit(props) {

  const handleUpClick=()=>{
    // console.log("UpperCase ");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase ","success");

  }
  const handleLowerCase=()=>{
    // console.log("UpperCase ");
    // let newText=text.toUpperCase();
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase ","success");
  }
  
  const handleRemoveSpace=()=> {
    // console.log("remove methods|| function ");
    let text1 =text.split("  ").join("");
   setText(text1);
   props.showAlert("Remove space ","success");

  }

  const textClear=()=>{
    setText('');
    props.showAlert("Text is clear ","success");

  }
  const handleCopy=()=>{
    let text=document.getElementById('MyTextBox');
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("tex is copy","success");

  }
  const handleOnChange=(event)=>{
    // console.log("onChange methods");
    setText(event.target.value);
  }
 
  const [text,setText]= useState('');
  // text="Enter te" // wrong way to change the state
  // setText("new Text") // correct way to change the state
  // console.log(props.mode);

  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}} >
        <div className="mb-3">
          <h3>{props.heading}</h3>
          <textarea className="form-control "value={text} onChange={handleOnChange} id="MyTextBox"rows="10" style={{resize:"none",background:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}} ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveSpace}>Remove Space </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Text Copy </button>
        <button className="btn btn-primary mx-2" onClick={textClear}>Text Clear</button>
    </div> 
    <div className="container my-3"  style={{color:props.mode==='light'?'black':'white'}}>
      <h2>Your text summary</h2>
      <p> {text.split(" ").length-1}  words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>
      <textarea className="form  border border-0" value={text} rows="4" cols="150" style={{
        resize:"none",background:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}></textarea>
      </p>
    </div>
    </>
  );
}
TextEedit.propTypes={
  heading:PropTypes.string.isRequired,

}
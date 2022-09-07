import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!" , "success");
    }

    const handleloClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase-!" , "success");
    }
    
    const handleCapitalizedClick = ()=>{
        let newText=text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText)
        props.showAlert("Capitalized the word!" , "success");
    }

    const handleClearClick = ()=>{
        let newText="";
        setText(newText)
        props.showAlert("Cleared the text" , "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('')
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ?'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ?'grey' : 'white', color: props.mode === 'dark' ?'white' : 'black'}} id="myBox" rows="8"></textarea>
    </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalizedClick}>Capitalized Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ?'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: 'Enter something above to preview here.'}</p>
    </div>
    </>
  )
}

import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = ()=> {
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleOnChange =(event) => {
    setText(event.target.value);
  }

  const handleLoClick = ()=> {
    let newText=text.toLocaleLowerCase();
    setText(newText);

  }  
  const handleClearText = ()=> {
    let newText="";
    setText(newText);

  }  
  const handleCopyText = ()=> {
    let text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  } 
  const handleExtraSpaces = ()=> {
    let newText=text.split(/[ ]+/) ;
    setText(newText.join(" "));
  } 

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>        
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to Uppercase </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> Convert to Lowercase </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}> Clear Text </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopyText}> Copy Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}> Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words {text.length} chars</p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
    </div>

    </>
  )
}
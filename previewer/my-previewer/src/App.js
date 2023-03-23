import React,{useState} from 'react'
import {marked} from 'marked'
export default function App() {
  const [text,setText]=
  useState('# Marked in the browser\n\nRendered by **marked**.')
  const handleChange=(event)=>{
      setText(event.target.value)
  }
  const inputStyle={
    width:"400px",
    // marginLeft:"auto",
    // marginRight:"auto",
    padding:"10px",
    height:"50vh",
     border:"2px solid red"
  }
  const containerStyle={
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column",
     
  }
  const previewerStyle={
border:"2px solid red",
width:"600px",
padding:"10px"
  }
  const html=marked(text)
  return (
    <>
    <div className="App">
      <div className="container" style={containerStyle}>
        
        <h1>editor</h1>
      <div id="editorWrapper">
      <textarea value={text} id="editor" 
      style={inputStyle}
      onChange={handleChange}>
        </textarea>
        </div>
        
        <h1>previewer</h1>
        <div id="preview" style={previewerStyle}>
       {/* {text} */}
          <div
             
              dangerouslySetInnerHTML=
              {{ __html: html }}
              />
          </div>
    </div>
    </div>
    </>
  );
}

import React, { useState,useEffect } from "react";
import Editor from "./Editor";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml.js'; 
import 'codemirror/mode/javascript/javascript.js';  
import 'codemirror/mode/css/css.js'; 
import './main.css';


function App() {
  const [html, setHtml] = useState("");
  const [javascript, setJavascript] = useState("");
  const [css, setCss] = useState("");
  const [srcDoc , setSrcDoc]=useState("");

  useEffect(()=> {
    const timeout = setTimeout(() => {
       setSrcDoc(`
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${javascript}</script>
        </html>
     `)
    },250)
     return() => clearTimeout(timeout)
  },[ html, css, javascript])


  

  return (
    <>
      <div className=" pane top-pane">
        <Editor 
        language="xml" 
        displayName="HTML" 
        value={html} 
        onChange={setHtml} />

        <Editor 
        language="javascript" 
        displayName="JavaScript" 
        value={javascript} 
        onChange={setJavascript} />

        <Editor 
        language="css" 
        displayName="CSS" 
        value={css} 
        onChange={setCss} />

      </div>
      <div className="pane">
        <iframe
        srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          height="100%"
          width="100%"
        />
      </div>
    </>
  );
}

export default App;

import React from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";


function Editor(props){
    function handleChange(editor,data , value1){
        props.onChange(value1)
    }
    const [open,setOpen]=React.useState(true);
    return (
        <div className={`container ${open ? "" : "collapsed"}`}>
           <div className="Header">
              {props.displayName}
              <button onClick={() => setOpen(prevopen => !prevopen)}>O/C</button>
            </div>
        <ControlledEditor 
            onBeforeChange={handleChange}
            value={props.value}
            className="wrapper"
            options={{
                theme: 'material',
                lineWrapping:true,
                lint:true,
                mode:props.language,
                lineNumbers:true
            }}
        />

        </div>

       
    
    )
    
}
export default Editor;
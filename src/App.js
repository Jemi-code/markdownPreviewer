import React, {useState} from "react";
import "./styles/app.scss";
import Badge from "react-bootstrap/Badge";
//import axios from "axios";
import {marked} from 'marked';
import $ from "jquery";
import { deTxt } from "./default.js";


console.log(marked);

function App() {
  const [markdown, setMarkdown] = useState("" + deTxt);
  
  const updateMarkdown = (e) => {
    setMarkdown(e.target.value);
  }

  let sendMarkdown = marked.parse(markdown);

  $(document).ready(() => {
    $("#preview").html(sendMarkdown);
  })



  let inputStyle = {
    width: "100%",
    height: "",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px"
  };


  let outputStyle = {
    width: "max-width",
    height: "max-height",
    backgroundColor: "#DCDCDC",
    marginLeft: "auto",
    marginRight: "auto",
    padding:"10px"
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <h1 className="text-center">
              <Badge className="text-align-center text-center preview" variant="light">
                Markdown Previewer
              </Badge>
            </h1>

            <div className="row mt-4 d-flex justify-content-center">
              <div className="col-8">
                <div className="col">
                  <h4 className="text-center">
                    <Badge className="text-align-center" variant="secondary">
                      Markdown Input
                    </Badge>
                  </h4>

                <div className="mark-input" style={inputStyle}>
                    <textarea 
                    name = "input" 
                    className="input" 
                    style={inputStyle} 
                    value={markdown} 
                    id="editor"
                    rows={10}
                    onChange={updateMarkdown}> 
                    {console.log(markdown)}
                    </textarea>
                </div>
              </div>
              </div>

              <div className="col-12">
                <div className="col">
                  <h4 className = "text-center">
                    <Badge className="text-align-center" variant="secondary">
                      Preview
                    </Badge>
                  </h4>
                </div>
                <div id = "preview" style={outputStyle} 
                 //dangerouslySetInnerHTML = {{__html: sendMarkdown }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

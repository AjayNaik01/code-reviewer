require("dotenv").config();
import { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-okaidia.css";
import "./App.css";
import Markdown from "react-markdown";
import axios from "axios";

function App() {
  const [code, setCode] = useState(`function sum(a,b) {
    return 1+1;
}`);
  const [review, setReview] = useState(``);
  useEffect(() => {
    window.Prism.highlightAll();
  }, []);

  async function reviewCode() {
    const response = await axios.post(process.env.REACT_APP_API_URL, {
      code,
    });
    setReview(response.data);
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                Prism.highlight(code, Prism.languages.jsx, "jsx")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code","Fira Mono", monospace',
                fontSize: 12,
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="review" onClick={reviewCode}>
            Review
          </div>
        </div>

        <div className="right">
          <Markdown>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;

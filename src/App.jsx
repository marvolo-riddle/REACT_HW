import React from "react";
import MarkdownEditor from "./components/MarkdownEditor.jsx";

class App extends React.Component {
  render() {
    const onContentChange = (content) => {
      console.log(content);
    };

    return <MarkdownEditor onContentChange={onContentChange}></MarkdownEditor>;
  }
}

export default App;

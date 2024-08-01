import { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/editor";

function MarkdownEditor({ onContentChange }) {
  const element = useRef(null);

  useEffect(() => {
    const editor = new Editor({
      el: element.current,
      initialEditType: "markdown",
      initialValue: " ",
    });

    editor.addHook("change", () => {
      const content = editor.getMarkdown();
      onContentChange(content);
    });
  }, []);

  return <div ref={element}></div>;
}

export default MarkdownEditor;

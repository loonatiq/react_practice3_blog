import { useState } from "react";

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <form>
        <input value={title} onChange={handleTitleChange}></input>
        <input value={content} onChange={handleContentChange}></input>
      </form>
    </>
  );
}

export default PostForm;

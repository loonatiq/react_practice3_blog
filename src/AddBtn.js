import { useState } from "react";
import PostForm from "./components/PostForm";

function AddBtn() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <>
      <button onClick={toggleMenu}>추가</button>
      <div>{toggle === true ? <PostForm /> : ""}</div>
    </>
  );
}

export default AddBtn;

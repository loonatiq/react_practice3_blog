import { useState } from "react";
import PostForm from "./PostForm";
import "./AddBtn.css";

function AddBtn() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <>
      <div className="addBtn">
        <button onClick={toggleMenu}>+</button>
      </div>
      <div>{toggle === true ? <PostForm /> : ""}</div>
    </>
  );
}

export default AddBtn;

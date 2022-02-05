import { useState } from "react";
import "./PostForm.css";

const INITIAL_VALUES = {
  title: "",
  imgUrl: "",
  content: "",
};

function PostForm({ initialValues = INITIAL_VALUES }) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  return (
    <>
      <form>
        <input
          type="file"
          name="imgUrl"
          value={values.imgUrl}
          onChange={handleChange}
          className="imgUrl"
        ></input>
        <textarea
          name="title"
          value={values.title}
          onChange={handleInputChange}
          placeholder="제목을 입력해 주세요."
          className="title"
        ></textarea>
        <textarea
          name="content"
          value={values.content}
          onChange={handleInputChange}
          placeholder="내용을 입력해 주세요"
          className="content"
        ></textarea>
        <div className="subButton">
          <button>확인</button>
          <button>취소</button>
        </div>
      </form>
    </>
  );
}

export default PostForm;

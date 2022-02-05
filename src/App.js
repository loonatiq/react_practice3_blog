import React, { useState } from "react";
import "./App.css";
import AddBtn from "./components/AddBtn";
import PostList from "./components/PostList";
import items from "./mock.json";
import PostForm from "./components/PostForm";

function App() {
  // const current = new Date();
  // const today = `${current.getFullYear()}/${
  //   current.getMonth() + 1
  // }/${current.getDate()}`;

  return (
    <>
      <div className="navbar">Blog</div>
      <AddBtn />
      <PostList items={items} />
    </>
  );
}

export default App;

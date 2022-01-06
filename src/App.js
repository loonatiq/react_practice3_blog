import React, {useState} from 'react';
import './App.css';
import Post from './Post';
import AddBtn from './AddBtn';

function App() {
  const [title, setTitle] = useState('제목');
  const [date, setDate] = useState('날짜');

  return (
    <>
    <div className='navbar'>Blog</div>
    <div>
      맛집
    </div>
    <AddBtn />
    <Post title={title} date={date}/>
    </>
  );
}

export default App;

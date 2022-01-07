import React, {useState} from 'react';
import './App.css';
import Post from './Post';
import AddBtn from './AddBtn';

function App() {
  const [title, setTitle] = useState('제목');
  // const [date, setDate] = useState(today);
  const current = new Date();
  const today = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
  return (
    <>
    <div className='navbar'>Blog</div>
    <div>
      맛집
    </div>
    <AddBtn />
    <Post title={title} date={today}/>
    <Post title={title} date={today}/>
    <Post title={title} date={today}/>
    <Post title={title} date={today}/>
    </>
  );
}

export default App;

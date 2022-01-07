import './Post.css';

function Post({title, date}){

  return(
    <div className='Post'>
      <div className='title'>
        {title}
      </div>
      <div>
        {date}
      </div>
    </div>
  );
}

export default Post;
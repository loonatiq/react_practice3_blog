function PostListItem({ item }) {
  return (
    <div>
      <img src={item.imgUrl}></img>
      <h1>{item.title}</h1>
      <p>{item.content}</p>
    </div>
  );
}
function PostList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <PostListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}
export default PostList;

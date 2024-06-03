import "./PostCard.css";

export default function PostCard({ title, cover, body}) {
  return (
    <div className="post" >
      <img src={cover} alt={title}></img>
      <div className="posts">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
}

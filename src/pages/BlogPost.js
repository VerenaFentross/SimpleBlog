import blogData from "../blogData.json";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  let params = useParams();
  let post = blogData[params.id];
  return (
    <div className="post">
      <img src={post.img_url} alt="meh, bild weg" />
      <div>
        {" "}
        <h2>{post.title}</h2>
        <p>{post.published_date}</p>
      </div>
      <p>{post.description}</p>
      <h4>by {post.author}</h4>
    </div>
  );
};

export default BlogPost;

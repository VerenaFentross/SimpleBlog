import { Link } from "react-router-dom";
import blogData from "../blogData.json";
import "./Articles.css";

const Articles = () => {
  return (
    <div className="articles">
      {blogData.map((article) => (
        <div className="vorschauKarte">
          <img src={article.img_url} alt="meh, bild weg" />
          <div>
            <h3>{article.title}</h3>
            <Link className="button" to={`/${article.id}`}>
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;

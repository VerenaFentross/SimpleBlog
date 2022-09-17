import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <img src="./img/background.png " alt="meh, bild weg" />
      <h1>Welcome to my simple Blog</h1>
      <Link className="button" to="/articles">
        Go to articles
      </Link>
    </div>
  );
};

export default Home;

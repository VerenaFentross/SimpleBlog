import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <h2>My Life</h2>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/articles">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

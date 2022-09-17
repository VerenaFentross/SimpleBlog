import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import BlogPost from "./pages/BlogPost";

//IMAGES

// import dog from "./img/doggo.png";
//( return <img src={logo} alt="Logo" />;)

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/:id" element={<BlogPost />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
